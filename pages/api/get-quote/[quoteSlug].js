import { findOne } from "../../../lib/mongodb";

export default async function handle(req, res) {
  const { quoteSlug } = req.query;

  const quote = await findOne("quotations", { slug: quoteSlug });

  res.status(200).json(quote);
}
