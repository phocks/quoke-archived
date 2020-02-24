import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

export const apiGet = async (req, path) => {
  const { origin } = absoluteUrl(req);

  const res = await fetch(origin + path);
  const data = await res.json();

  return data;
};

// Returns string truncated by words. If truncated
// adds three dots ...
export function truncate(str, numberOfWords) {
  const newString = str
    .split(" ")
    .splice(0, numberOfWords)
    .join(" ");

  if (newString === str) return newString;
  else return `${newString} ...`;
}
