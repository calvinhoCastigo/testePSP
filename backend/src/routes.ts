import { Router } from "express";
import * as clienteController from "./controllers/clienteController";
import * as transacaoController from "./controllers/transacaoController";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

router.get("/clientes", clienteController.getClientes);
router.get("/cliente/:idCliente", clienteController.getCliente);
router.get("/contasareceber/:idCliente", transacaoController.getContasAReceber);
router.get("/contasapagar/:idCliente", transacaoController.getContasAPagar);
router.get("/transacao/:idTransacao", transacaoController.getTransacao);
router.post(
  "/contasareceber/:idCliente",
  transacaoController.insertContasAReceber
);
// router.put("/transacao/:idTransacao")
router.post("/contasapagar/:idCliente", transacaoController.insertContasAPagar);
export default router;
