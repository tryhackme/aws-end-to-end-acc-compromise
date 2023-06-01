/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
      COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
      COGNITO_USER_POOL_CLIENT_ID: process.env.COGNITO_USER_POOL_CLIENT_ID,
    },
  };