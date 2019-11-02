import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";

const index = async (req, res) => {
  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  try {
    const result = await collection.find({ addedBy: "quoke" }).toArray();
    console.log(result);

    res.json(result);
  } catch (error) {
    console.error(error);
  }

  // res.json([
  //   {
  //     text:
  //       "Science is not only compatible with spirituality; it is a profound source of spirituality. When we recognize our place in an immensity of light-years and in the passage of ages, when we grasp the intricacy, beauty, and subtlety of life, then that soaring feeling, that sense of elation and humility combined, is surely spiritual. So are our emotions in the presence of great art or music or literature, or acts of exemplary selfless courage such as those of Mohandas Gandhi or Martin Luther King, Jr. The notion that science and spirituality are somehow mutually exclusive does a disservice to both.",
  //     author: "Carl Sagan",
  //     source: "The Demon-Haunted World: Science as a Candle in the Dark",
  //     slug: "science-is-not-only-compatible-with-spirituality",
  //     __id: "2340987kjhfds"
  //   }
  // ]);
};

export default index;
