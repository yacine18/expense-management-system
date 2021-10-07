import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import path from 'path'
import db from "./models";

//importing routes
import transactionRouter from "./routes/transactions.route";
import userRouter from "./routes/users.route";

const app = express();

app.use(express.json());
app.use(cors());


//routes
app.use("/api/users", userRouter);
app.use("/api/transactions", transactionRouter);

app.use(express.static(path.join(__dirname, '/client/build')))
app.get('*', (req,res)=> res.sendFile(path.join(__dirname, '/client/build/index.html')))

const port = process.env.PORT || '8081';
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
