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
  // const { gptArray } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: req.body,
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
