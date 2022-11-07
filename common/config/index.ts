const env = process.env.NODE_ENV;

interface AppConfig {
  BASE_URL: string;
}

const config = {
  common: {},
  development: {
    BASE_URL: "http://localhost:3001/api",
  },
  production: {
    BASE_URL: "https://chartbell.com/api",
  },
  test: {},
};

const CONFIG = Object.assign(config.common, config[env]) as AppConfig;

export default CONFIG;
