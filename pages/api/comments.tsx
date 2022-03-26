import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    const { comment, reference } = req.body;
    const response = await fetch(process.env.SHEET_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: [
          {
            date: new Date().toISOString(),
            comment,
            reference,
          },
        ],
      }),
    });

    res.status(response.status).json({message: "resolved"})
  } else {
    res.status(400).json({ message: "error" });
  }
};

export default handler;
