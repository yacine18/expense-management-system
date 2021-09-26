import { Request, Response, Router } from "express";
import db from "../models/index";

const transactionRouter = Router();

// create new transaction
transactionRouter.post("/", async (req: Request, res: Response) => {
  const { label, amount } = req.body;
  try {
    if (!label || !amount) {
      res.status(400).json({ message: "Fields should not be empty" });
      return;
    }

    const createdTransaction = await db.Transaction.create({
      label,
      amount,
    });

    res.status(200).json({
      message: "Transaction Created!",
      transaction: createdTransaction,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// get all transactions from DB
transactionRouter.get("/", async (req: Request, res: Response) => {
  try {
    const transactions = await db.Transaction.findAll({});
    res.status(200).json({
      transactions,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

//update transation
transactionRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const {label, amount} = req.body
  try {
    const updatedTransaction = await db.Transaction.update({label, amount}, {
      where:{
        id
      }
    });

    res.status(200).json({
      message: "Transaction updated successfully",
      updatedTransaction,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

//delete transation
transactionRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await db.Transaction.destroy({
      where:{
        id
      }
    });

    res.status(200).json({
      message: "Transaction deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});


export default transactionRouter;
