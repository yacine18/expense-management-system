import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import db from "../models";
import { generateToken, isAuth } from "../utils";

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

//get user info
userRouter.get("/:id", isAuth, async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await db.User.findOne({
      where: {
        id,
      },
    });

    res.status(200).json({ user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default userRouter;
