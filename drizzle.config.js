/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:X5mGMgQNnoE2@ep-twilight-salad-a2c5fbjc.eu-central-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };