const Sequelize = require("sequelize");
const dotenv = require('dotenv');

dotenv.config();

class Database {
    constructor() {
      this.connection = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PW, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        timezone: '-03:00'
      });
    }
  
    async authenticate() {
      try {
        await this.connection.authenticate();
        console.log("Conexão feita com sucesso!");
      } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error; // Rejeita a promessa se ocorrer um erro
      }
    }
  }
  
  module.exports = new Database();