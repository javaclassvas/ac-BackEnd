import { Router, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "models/User";

const router = Router();

router.put(
  "/",
  asyncHandler(
    async (
      { body: { nickname } }: Request<{}, {}, { nickname: string }>,
      res: Response
    ) => res.json(await User.create({ nickname }))
  )
);

router.get(
  "/list",
  asyncHandler(async (req: Request, res: Response<User[]>) =>
    res.json(await User.findAll())
  )
);

export default router;
