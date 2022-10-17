const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'acct_1Ls9huPiAy2acxzmt',
  stripe_test_secret_key: 'sk_test_51Lqo8EBD6WdQHm4vbjRnBzMTuLguhUS2JM9nsXoy2pwzoPwsHM7O8InVGq2kA7NLFURdDislYDNavN65xyAGmPt000qT5Numi9',
  stripe_test_api_key: 'pk_test_51Lqo8EBD6WdQHm4vHkGezvxrXgjRaY07w7eEijt5qlql2vHQ6JNRKaMTozRMqDUtEAuuUnwnpVxyk20Hzoxh1Ax900Zmzq6FIL' 
}

export default config
