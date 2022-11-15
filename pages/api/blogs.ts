// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Blog = {
  title: string;
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog>
) {
  if (req.method === "POST") {
    const data = {
      id: new Date().toISOString(),
      title: req.body.title,
      description: req.body.description,
    };
    res.status(201).json(data);
  }
  //   res.status(200).json({ name: "John Doe" });
}
