const { Configuration, OpenAIApi } = require("openai");
bodyParser = require("body-parser");
cors = require("cors");
dotenv = require("dotenv");
require("custom-env").env("staging");
dotenv.config();
express = require("express");

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3006;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  console.log(req.body);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are the famous author, George Orwell, author of 1984. I would like to have a conversation with you. Please keep responses under 200 characters.",
      },
      {
        role: "user",
        content: "What are the main characters in the book 1984?",
      },
    ],
  });

  res.json({
    completion: completion.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});
