import mysql from 'mysql2/promise';
import { env } from '$env/dynamic/private'; // Import environment variables

const pool: mysql.Pool = mysql.createPool({
    host: env.DB_HOST,       // Use environment variable for DB host
    user: env.DB_USER,       // Use environment variable for DB user
    password: env.DB_PASSWORD, // Use environment variable for DB password
    database: env.DB_NAME     // Use environment variable for DB name
});

export default pool; // Export the connection pool for use in other modules
