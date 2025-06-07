interface Config {
  apiUrl: string;
  environment: "development" | "production" | "test";
  version: string;
}

const config: Config = {
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
  environment: (import.meta.env.MODE as Config["environment"]) || "development",
  version: import.meta.env.VITE_APP_VERSION || "1.0.0",
};

export default config;
