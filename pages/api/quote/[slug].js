import { findOne } from "../../../lib/mongodb";

export default async function handle(req, res) {
  const { slug } = req.query;

  const quote = await findOne("quotations", { slug: slug });

  res.status(200).json(quote);
}
