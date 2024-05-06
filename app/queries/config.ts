import dotenv from 'dotenv';

dotenv.config();

const databaseConfig = {
    config: {
        host: process.env.MYSQL_URL,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
};

export default databaseConfig;