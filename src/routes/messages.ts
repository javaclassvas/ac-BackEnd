import { Router, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { io } from "websockets";
import Message from "models/Message";
import User from "models/User";

const router = Router();

router.put(
  "/",
  asyncHandler(
    async (
      {
        body: { userId, content },
      }: Request<{}, {}, { userId: number; content: string }>,
      res: Response
    ) => {
      const message = await Message.create({ userId, content });
      const newMessage = await Message.findByPk(message.id, {
        include: [{ model: User, as: "user" }],
      });
      io.emit("new-message", newMessage);
      res.json(newMessage);
    }
  )
);

router.get(
  "/list",
  asyncHandler(async (req: Request, res: Response<Message[]>) =>
    res.json(
      await Message.findAll({
        limit: 10,
        order: [["createdAt", "DESC"]],
        include: [{ model: User, as: "user" }],
      })
    )
  )
);

export default router;
