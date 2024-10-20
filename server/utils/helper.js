// contain helper function - loosely bound with code itself
const axios = require("axios");
const config = require("../utils/config");
const OpenAI = require("openai");

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: config.API_KEY,
});

const getAIResponse = async (mood, description) => {
  const prompt = `Help to upflit my mood, my mood is ${mood} out of 5 right now. To describe more - ${description}. give geniune advice without being excessive optimistic, see feeling from my pov. blend your answer with Existentialism philosphy, give me answer in paragraph`;

  const completion = await openai.chat.completions.create({
    model: "mistralai/mistral-7b-instruct:free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
};

module.exports = { getAIResponse };
