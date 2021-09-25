import express, {Request, Response} from "express";
import { v4 as uuid } from "uuid";
import db from './models/index'

const app = express();

app.use(express.json())

app.post('/transactions/seed', async(req:Request, res:Response) => {
    try {
      const transactions = await db.Transaction.create({
        id:uuid(),
        label: 'AWS Subscription',
        amount: '30'
    })
    res.status(200).json(transactions)
    } catch (error:any) {
        res.status(500).json({Message: error.message})
    }
   
})

app.get('/transactions/seed', async(req:Request, res:Response) => {
  try {
    const transactions = await db.Transaction.findAll({})
  res.status(200).json(transactions)
  } catch (error:any) {
      res.status(500).json({Message: error.message})
  }
 
})

const port = process.env.PORT || 8081
db.sequelize.sync().then(() => {
  app.listen(port, () => console.log("Server up and running " + port));
});
