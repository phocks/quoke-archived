import { search } from "../../lib/mongodb";

export default async (req, res) => {
  const { limit, skip } = req.query;

  const quotes = await search(
    "quotations",
    {},
    { limit: +limit, skip: +skip }
  );
  res.json(quotes);
};
