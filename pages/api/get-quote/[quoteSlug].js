import { findOne } from "../../../lib/mongodb";
import { getCollection } from "../../../lib/mongodb";

export default async function handle(req, res) {
  const { quoteSlug } = req.query;

  const quote = await findOne("quotations", { slug: quoteSlug });

  const collection = await getCollection("quotations");
  const result = await collection.updateOne(
    { slug: quoteSlug },
    { $inc: { views: 1 } }
  );

  res.status(200).json(quote);
}
