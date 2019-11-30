import { findOne } from "../../lib/mongodb";

export default async function handle(req, res) {
  const { slug } = req.query;
  const quote = await findOne("topics", { slug: slug });
  res.json(quote);
}
