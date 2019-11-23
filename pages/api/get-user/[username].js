/**
 * A server-side route that gives user data
 * depending on /user query
 */

import { getCollection } from "../../../lib/mongodb";

export default async (req, res) => {
  const { username } = req.query;

  const collection = await getCollection("users");

  // See if user exists
  const result = await collection.findOne({ username: username });

  if (!result) {
    res.status(200).json({ userFound: false });
    
  } else {
    res.status(200).json({
      userFound: true,
      username: result.username,
      dateRegistered: result.dateRegistered
    });
  }
};
