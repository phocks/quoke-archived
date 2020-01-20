import { findHome } from "../../../lib/mongodb";

export default async (req, res) => {
 const quotes = await findHome("quotations", {})
 res.json(quotes)
};