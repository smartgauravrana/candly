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
    BASE_URL: "http://172-104-207-75.ip.linodeusercontent.com:3000/api",
  },
  test: {},
};

export default Object.assign(config.common, config[env]) as AppConfig;
