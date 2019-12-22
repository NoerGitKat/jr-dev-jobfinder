const redis = require("redis");
const { promisify } = require("util");

const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

const redisMethods = {
  getRedisData: getAsync,
  setRedisData: setAsync
};

module.exports = redisMethods;
