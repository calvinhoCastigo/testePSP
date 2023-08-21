import express, { Request, Response } from "express";
import Conexao from "./models/Conexao";
import dotenv from "dotenv";
import routes from "./routes"; // Importe as rotas

dotenv.config();
const app = express();

const port = process.env.SERVER_PORT;

const db = new Conexao();

(async () => {
  try {
    const isConnected = await db.testConnection();
    if (isConnected) {
      console.log("Conexão bem-sucedida com o banco de dados.");
    } else {
      console.error("Não foi possível conectar ao banco de dados.");
    }
  } catch (error) {
    console.error("Erro ao testar a conexão com o banco de dados:", error);
  }
})();

app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
