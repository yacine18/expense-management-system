import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import db from "../models";
import jwt from "jsonwebtoken";
import { generateToken, isAuth } from "../utils";
import sgMail from "@sendgrid/mail";

const sendGridApiKey: any = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendGridApiKey);

const userRouter = Router();

// create user account
userRouter.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await db.User.findOne({
      where: {
        email,
      },
    });

    if (!name || !email || !password) {
      res.status(400).json({ message: "Fields Should not be emplty" });
      return;
    }

    if (user) {
      res.status(400).json({ message: "User with this email already exists" });
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const createdUser = await db.User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "Account created successfully",
      user: {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        token: generateToken(createdUser),
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// user login
userRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(400).json({ message: "No Account with this email" });
      return;
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (isMatch) {
      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user),
      });
    } else {
      res.status(400).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {}
});

//update profile details
userRouter.put("/:id", isAuth, async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);
  try {
    const updatedUser = await db.User.update(
      { name, email, password: hashedPassword },
      {
        where: {
          id,
        },
      }
    );
    res
      .status(200)
      .json({ message: "User Updated Successfully", user: updatedUser });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//forget password route
userRouter.post("/forget-password", async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await db.User.findOne({ email });

  try {
    if (user.email !== email) {
      res.status(400).json({ message: "User does not exists" });
      return;
    }

    const jwtSecret: any = process.env.JWT_SECRET;
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      jwtSecret,
      {
        expiresIn: "24h",
      }
    );

    // email msg object
    const msg = {
      to: user.email, // Change to your recipient
      from: "hilali.yacin@gmail.com", // Change to your verified sender
      subject: "Reset Password",
      // text: 'and easy to do anywhere, even with Node.js',
      html: `<p>Please click the link to reset your password: http://localhost:3000/reset-password/${user.id}/${token}</p>
      <p>This email valid for 24h</p>
      `,
    };

    //sending email
    await sgMail.send(msg);

    console.log(`http://localhost:8081/reset-password/${user.id}/${token}`);
    res.status(200).json({ message: "Email sent" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//reset password route
userRouter.post(
  "/reset-password/:id/:token",
  async (req: Request, res: Response) => {
    const { id, token } = req.params;
    const { password } = req.body;

    try {
      const user = await db.User.findOne({ id });
      const hashedPassword = bcrypt.hashSync(password, 8);
      if (!user) {
        res.status(400).json({ message: "User does not exists" });
        return;
      }

      const jwtSecret: any = process.env.JWT_SECRET;
      const verifyToken = jwt.verify(token, jwtSecret);
      res.status(200).json({ message: "Reset Email for " + user.email });
      await db.User.update(
        { password: hashedPassword },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {}
  }
);

export default userRouter;
