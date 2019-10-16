# Quoke
A website about quotations

## To develop locally

Prerequisites: must have MongoDB server running locally with a database called "quoke" and a collection called "quotations" with at least 1 document in there with a `text` and `author` like

```
{
  _id:ObjectId(5da7095914f83005db482f93),
  "text": "When one door of happiness closes, another opens; but often we look so..."
  author: "Helen Keller"
}
```

Then:

1. Clone this repo
2. run `yarn install`
3. run `yarn run dev`

Go to: http://localhost:3000/
