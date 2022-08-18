const dotenv = require('dotenv');
dotenv.config();

const config = {
    env : process.env.NODE_ENV || 'dev',
    port : process.env.PORT || 3000,
    dbHost : process.env.DB_HOST,
    dbPort : process.env.DB_PORT,
    dbUser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    dbName : process.env.DB_NAME,
    jwtSecret : process.env.JWT_SECRET,
    emailHost : process.env.EMAIL_HOST,
    emailPort : process.env.EMAIL_PORT,
    emailSecure : process.env.EMAIL_SECURE,
    emailUser : process.env.EMAIL_USER,
    emailPassword : process.env.EMAIL_PASSWORD,
    emailFrom :  process.env.EMAIL_FROM,
}


module.exports = config;
