import dotenv from 'dotenv';

dotenv.config();

const config = {
  general: {
    port: process.env.PORT | 3000,
    environment: process.env.NODE_ENV
  }
};

export default config;