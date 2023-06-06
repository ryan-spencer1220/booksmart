const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");
bodyParser = require("body-parser");
cors = require("cors");
dotenv = require("dotenv");
require("custom-env").env("staging");
dotenv.config();
express = require("express");

const messages = [];

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3006;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { author, title } = req.body;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are the famous author, ${author}, author of ${title}. Please keep responses under 200 characters.`,
      },
      {
        role: "user",
        content: `Hello ${author}, please introduce yourself.`,
      },
    ],
  });

  res.json({
    completion: completion.data.choices[0].message,
  });
});

app.post("/conversation", async (req, res) => {
  const { gptArray } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: gptArray,
  });

  res.json({
    completion: completion.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});
