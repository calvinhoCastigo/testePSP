import { Request, Response } from "express";
import Conexao from "../models/Conexao";
import Cliente from "../models/Cliente";
const db = new Conexao();

let querySelect = "SELECT idCliente, nomeCliente, saldoCliente FROM cliente";

export function montaObjCliente(cliente: any): Cliente | null {
  const idCliente = cliente.idCliente;
  const nomeCliente = cliente.nomeCliente;
  const saldoCliente = cliente.saldo;
  const listaContasAPagar = cliente.listaContasAPagar;
  const listaContasAReceber = cliente.listaContasAReceber;
  let clienteObj = new Cliente(
    idCliente,
    nomeCliente,
    saldoCliente,
    listaContasAPagar,
    listaContasAReceber
  );
  return clienteObj;
}

export const getClientes = async (req: Request, res: Response) => {
  try {
    const resultados = await db.query(querySelect);
    let clientes: Array<Cliente | null> = [];

    resultados.forEach((cliente: any) => {
      clientes.push(montaObjCliente(cliente));
    });

    res.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar os clientes:", error);
    res.status(500).json({ error: "Erro ao buscar os clientes" });
  }
};

export const getCliente = async (req: Request, res: Response) => {
  const idCliente = parseInt(req.params.idCliente);
  try {
    querySelect += " WHERE idCliente =" + idCliente;
    const resultados = await db.query(querySelect);
    let cliente: Cliente | null = null;
    if (resultados.length > 0) {
      cliente = montaObjCliente(resultados[0]);
    }
    res.json(cliente);
  } catch (error) {
    console.error("Erro ao buscar o cliente:", error);
    res.status(500).json({ error: "Erro ao buscar o cliente" });
  }
};
