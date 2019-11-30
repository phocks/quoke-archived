import { findMany } from "../../lib/mongodb";

export default async function handle(req, res) {
  const topicsArray = await findMany("topics", {});
  res.json(topicsArray);
}
