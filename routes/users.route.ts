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
     return res.status(400).json({ message: "No Account with this email" });
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

//get user data
userRouter.get("/:id", isAuth, async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await db.User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    res.status(404).json({ message: "User not found!" });
    return;
  }

  res.status(200).json(user);
});

//forget password route
userRouter.post("/forget-password", async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await db.User.findOne({ email });
 
  try {
    if (email !== user.email) {
     return res.status(400).json({ message: "User does not exists" });
    }

    const jwtSecret: any = process.env.JWT_SECRET;
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      jwtSecret,
      {
        expiresIn: "30m",
      }
    );

    // email msg object
    const msg = {
      to: user.email, // Change to your recipient
      from: "hilali.yacin@gmail.com", // Change to your verified sender
      subject: "Reset Password",
      // text: 'and easy to do anywhere, even with Node.js',
      html: `<p>Please click the link to reset your password: https://expense-system-management.herokuapp.com/reset-password/${token}</p>
      <p>This email valid for 30 min</p>
      `,
    };

    //sending email
    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//reset password route
userRouter.post("/reset-password", async (req: Request, res: Response) => {

  const { password, email } = req.body;
  try {
    const user = await db.User.findOne({ email });
    const hashedPassword = bcrypt.hashSync(password, 8);
    if (!user) {
      res.status(400).json({ message: "User does not exists" });
      return;
    }
    const jwtSecret: any = process.env.JWT_RESET_PASSWORD_SECRET;
    jwt.verify(user.resetToken, jwtSecret);
    res.status(200).json({ message: "Reset Email for " + user.email });
    await db.User.update(
      { password: hashedPassword },
      {
        where: {
          id:user.id,
        },
      }
    );

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default userRouter;
