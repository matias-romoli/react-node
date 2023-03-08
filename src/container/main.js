import { logger } from "../config/logger.js";
import { DB } from "../db/mysql.js";
const database = DB.getInstance();

export class Contenedor {
  constructor() {
    this.db = database;
  }
  async list() {
    try {
      const db = await this.db.on();

      let sql = "SELECT * FROM task";
      const [rows] = await db.query(sql);

      return rows;
    } catch (error) {
      return [];
    } finally {
      await this.db.off();
    }
  }
  async listID(data) {
    try {
      const db = await this.db.on();

      let sql = "SELECT * FROM task WHERE ID = ?";
      const [rows] = await db.query(sql, [data.id]);

      return rows;
    } catch (error) {
      logger.error(error);
    } finally {
      await this.db.off();
    }
  }
  async new(data) {
    try {
      const db = await this.db.on();
      let sql = "INSERT INTO task(task) VALUES (?)";

      return await db.query(sql, [data.newTask]);
    } catch (error) {
      logger.error(error);
    } finally {
      await this.db.off();
    }
  }
  async delete(data) {
    try {
      const db = await this.db.on();

      let sql = "DELETE FROM task WHERE id = ?";
      return await db.query(sql, [data.id]);
    } catch (error) {
      logger.error(error);
    } finally {
      await this.db.off();
    }
  }
}
