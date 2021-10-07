require('dotenv').config()
import express from "express";
import cors from "cors";
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

const port = process.env.PORT || 8081;
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
