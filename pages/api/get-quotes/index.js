import { findMany } from "../../../lib/mongodb";

export default async (req, res) => {
 const quotes = await findMany("quotations", {})
 res.json(quotes)
};