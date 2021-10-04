import { Request, Response, Router } from "express";
import db from "../models/index";
import {isAuth} from '../utils'

const transactionRouter = Router();

// create new transaction
transactionRouter.post("/", isAuth, async (req: Request, res: Response) => {
  const { label, amount } = req.body;
  const userId = req.user.id
  try {
    if (!label || !amount) {
      res.status(400).json({ message: "Fields should not be empty" });
      return;
    }

    const createdTransaction = await db.Transaction.create({
      label,
      amount,
      userId
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
transactionRouter.get("/", isAuth, async (req: Request, res: Response) => {
  try {
    const transactions = await db.Transaction.findAll({id:req.user.id});
    res.status(200).json(transactions);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});


export default transactionRouter;
