import { createPool, Pool, PoolConnection } from "mysql2/promise";
require("dotenv").config();

class Conexao {
  private pool: Pool;

  constructor() {
    this.pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async query(sql: string, values?: any[]): Promise<any> {
    const connection: PoolConnection = await this.pool.getConnection();

    try {
      const [rows] = await connection.query(sql, values);
      return rows;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  async testConnection(): Promise<boolean> {
    let isConnected = false;
    const connection = await this.pool.getConnection();

    try {
      await connection.ping();
      isConnected = true;
    } catch (error) {
      isConnected = false;
    } finally {
      connection.release();
    }

    return isConnected;
  }
}
export default Conexao;
