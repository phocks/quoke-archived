import { search } from "../../lib/mongodb";

export default async (req, res) => {
  const { q = "", limit = 5, skip = 0 } = req.query;

  const query = {
    $text: {
      $search: q,
      $language: "en",
      $caseSensitive: false,
      $diacriticSensitive: false
    }
  };

  const quotes = await search("quotations", query, {
    limit: +limit,
    skip: +skip
  });
  
  res.json(quotes);
};
