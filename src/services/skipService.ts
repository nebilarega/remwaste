import { api } from "../config/api";
import type { Card } from "../types/card";

interface SkipLocationParams {
  postcode: string;
  area: string;
}

interface SkipResource {
  read: () => Card[];
}

const createResource = (promise: Promise<Card[]>): SkipResource => {
  let status: "pending" | "success" | "error" = "pending";
  let result: Card[] = [];
  let error: Error;

  const suspender = promise.then(
    (data) => {
      status = "success";
      result = data;
    },
    (e) => {
      status = "error";
      error = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw error;
      } else if (status === "success") {
        return result;
      }
      return result; // This line will never be reached, but satisfies TypeScript
    },
  };
};

export const skipService = {
  getSkipsByLocation: async ({
    postcode,
    area,
  }: SkipLocationParams): Promise<Card[]> => {
    try {
      const response = await api.get(`/skips/by-location`, {
        params: {
          postcode,
          area,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching skips:", error);
      throw error;
    }
  },

  getSkipsResource: (params: SkipLocationParams): SkipResource => {
    return createResource(skipService.getSkipsByLocation(params));
  },
};
