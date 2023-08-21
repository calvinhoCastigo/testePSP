import { Request, Response } from "express";
import Conexao from "../models/Conexao";
import ContasAReceber from "../models/ContasAReceber";
import ContasAPagar from "../models/ContasAPagar";
import ListaContasAReceber from "../models/ListaContasAReceber";
import ListaContasAPagar from "../models/ListaContasAPagar";
const db = new Conexao();

export function montaObjContasAReceber(transacao: any): ContasAReceber {
  const transacaoObj = new ContasAReceber(
    transacao.idTransacao,
    transacao.is_pendenteTransacao,
    transacao.valorTransacao,
    transacao.descricaoTransacao,
    transacao.dataTransacao,
    transacao.numeroCartao,
    transacao.cvvCartao,
    transacao.validadeCartao
  );
  return transacaoObj;
}

export function montaObjContasAPagar(transacao: any): ContasAPagar {
  const transacaoObj = new ContasAPagar(
    transacao.idTransacao,
    transacao.valorTransacao,
    transacao.descricaoTransacao,
    transacao.dataTransacao,
    transacao.numeroCartao,
    transacao.cvvCartao,
    transacao.validadeCartao
  );
  return transacaoObj;
}

export const getContasAReceber = async (req: Request, res: Response) => {
  const idCliente = parseInt(req.params.idCliente);
  try {
    const sql =
      `SELECT
        idTransacao,
        idCliente,
        descricaoTransacao,
        dataTransacao,
        valorTransacao,
        is_pendenteTransacao,
        numeroCartao,
        cvvCartao,
        validadeCartao
      FROM transacao WHERE idCliente =` +
      idCliente +
      ` AND tipoTransacao='R'`;

    const resultados = await db.query(sql);

    let transacoes: ListaContasAReceber = new ListaContasAReceber([]);

    resultados.forEach((transacao: any) => {
      transacoes.lista.push(montaObjContasAReceber(transacao));
    });
    transacoes.setSaldo();

    res.json(transacoes);
  } catch (error) {
    console.error("Erro ao buscar as transações:", error);
    res.status(500).json({ error: "Erro ao buscar as transações" });
  }
};

export const getContasAPagar = async (req: Request, res: Response) => {
  const idCliente = parseInt(req.params.idCliente);
  try {
    const sql =
      `SELECT
        idTransacao,
        idCliente,
        descricaoTransacao,
        dataTransacao,
        valorTransacao,
        is_pendenteTransacao,
        numeroCartao,
        cvvCartao,
        validadeCartao
      FROM transacao WHERE idCliente =` +
      idCliente +
      ` AND tipoTransacao='P'`;

    const resultados = await db.query(sql);
    let transacoes: ListaContasAPagar = new ListaContasAPagar([]);

    resultados.forEach((transacao: any) => {
      transacoes.lista.push(montaObjContasAPagar(transacao));
    });
    transacoes.setSaldo();
    res.json(transacoes);
  } catch (error) {
    console.error("Erro ao buscar as transações:", error);
    res.status(500).json({ error: "Erro ao buscar as transações" });
  }
};

export const getTransacao = async (req: Request, res: Response) => {
  const idTransacao = parseInt(req.params.idTransacao);
  try {
    const sql =
      `SELECT
        idTransacao,
        idCliente,
        descricaoTransacao,
        dataTransacao,
        tipoTransacao,
        valorTransacao,
        is_pendenteTransacao,
        numeroCartao,
        cvvCartao,
        validadeCartao
      FROM transacao WHERE idTransacao =` + idTransacao;
    const resultados = await db.query(sql);
    let transacao: ContasAReceber | ContasAPagar | null = null;
    if (resultados.length > 0) {
      if (resultados[0].tipoTransacao == "R") {
        transacao = montaObjContasAReceber(resultados[0]);
      } else {
        transacao = montaObjContasAPagar(resultados[0]);
      }
    }
    res.json(transacao);
  } catch (error) {
    console.error("Erro ao buscar a transação:", error);
    res.status(500).json({ error: "Erro ao buscar a transação" });
  }
};

export const insertContasAPagar = async (req: Request, res: Response) => {
  const idCliente = req.params.idCliente;
  const descricaoTransacao = req.body.descricaoTransacao;
  const valorTransacao = req.body.valorTransacao;
  const numeroCartao = req.body.numeroCartao;
  const cvvCartao = req.body.cvvCartao;
  const validadeCartao = req.body.validadeCartao;
  let transacaoObj = new ContasAPagar(
    0,
    valorTransacao,
    descricaoTransacao,
    new Date(),
    numeroCartao,
    cvvCartao,
    validadeCartao
  );
  try {
    const sql =
      "INSERT INTO transacao " +
      "(idCliente, descricaoTransacao, dataTransacao, tipoTransacao, valorTransacao, is_pendenteTransacao, numeroCartao, cvvCartao, validadeCartao) " +
      "VALUES " +
      "(" +
      idCliente +
      ",'" +
      transacaoObj.descricao +
      "','" +
      transacaoObj.data.toISOString().slice(0, 19).replace("T", " ") +
      "', 'P', " +
      transacaoObj.valor +
      ", FALSE, '" +
      transacaoObj.numeroCartao +
      "', '" +
      transacaoObj.cvv +
      "', '" +
      transacaoObj.validade +
      "')";
    let resultados = await db.query(sql);
    res.json(resultados);
  } catch (error) {
    console.error("Erro ao registar a transação:", error);
    res.status(500).json({ error: "Erro ao registrar a transação" });
  }
};

export const insertContasAReceber = async (req: Request, res: Response) => {
  const idCliente = req.params.idCliente;
  const descricaoTransacao = req.body.descricaoTransacao;
  const valorTransacao = req.body.valorTransacao;
  const numeroCartao = req.body.numeroCartao;
  const cvvCartao = req.body.cvvCartao;
  const validadeCartao = req.body.validadeCartao;
  let transacaoObj = new ContasAPagar(
    0,
    valorTransacao,
    descricaoTransacao,
    new Date(new Date().getDate() + 30),
    numeroCartao,
    cvvCartao,
    validadeCartao
  );
  try {
    const sql =
      "INSERT INTO transacao " +
      "(idCliente, descricaoTransacao, dataTransacao, tipoTransacao, valorTransacao, is_pendenteTransacao, numeroCartao, cvvCartao, validadeCartao) " +
      "VALUES " +
      "(" +
      idCliente +
      ",'" +
      transacaoObj.descricao +
      "','" +
      transacaoObj.data.toISOString().slice(0, 19).replace("T", " ") +
      "', 'R', " +
      transacaoObj.valor +
      ", TRUE, '" +
      transacaoObj.numeroCartao +
      "', '" +
      transacaoObj.cvv +
      "', '" +
      transacaoObj.validade +
      "')";
    let resultados = await db.query(sql);
    res.json(resultados);
  } catch (error) {
    console.error("Erro ao registar a transação:", error);
    res.status(500).json({ error: "Erro ao registrar a transação" });
  }
};
