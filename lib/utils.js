import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

export const apiGet = async (req, path) => {
  const { origin } = absoluteUrl(req);

  const res = await fetch(origin + path);
  const data = await res.json();

  return data;
};

export function truncate(str, no_words) {
  return str
    .split(" ")
    .splice(0, no_words)
    .join(" ");
}
