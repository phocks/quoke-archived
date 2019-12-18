import { findMany } from "../../lib/mongodb";

export default async (req, res) => {
  const quotes = await findMany("quotations", { topics: req.query.topic });
  res.json(quotes);
};
