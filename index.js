const { Configuration, OpenAIApi } = require("openai");
bodyParser = require("body-parser");
cors = require("cors");
dotenv = require("dotenv");
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

app.get("/", async (req, res) => {
  const { messages } = req.body;

  console.log(req.body);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are DesignGPT, helpful graphic assistant graphic design chatbot",
      },
    ],
  });

  console.log("HIT");

  res.json({
    completion: completion.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});
