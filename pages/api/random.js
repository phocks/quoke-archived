import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";
import slug from "slug";

// Number of words to truncate the quote text to
const SLUG_WORD_COUNT = 10;

const random = async (req, res) => {
  const client = await MongoClient.connect(url, options);

  const db = client.db(dbName);
  const collection = db.collection("quotations");

  const samples = await collection
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();

  const randomQuote = samples[0];

  if (typeof randomQuote.slug === "undefined") {
    const quoteText = randomQuote.text;
    const truncatedText = truncate(quoteText, SLUG_WORD_COUNT);

    const slugText = slug(truncatedText, {
      replacement: "-", // replace spaces with replacement
      symbols: true, // replace unicode symbols or not
      remove: /[.]/g, // (optional) regex to remove characters
      lower: true, // result in lower case
      charmap: slug.charmap, // replace special characters
      multicharmap: slug.multicharmap // replace multi-characters
    });

    randomQuote.slug = slugText;

    const r = await collection.updateOne(
      { _id: randomQuote._id },
      { $set: { slug: slugText } }
    );
  }

  res.status(200).json(randomQuote);
  client.close();
};

export default random;

function truncate(str, wordCount) {
  return str
    .split(" ")
    .splice(0, wordCount)
    .join(" ");
}
