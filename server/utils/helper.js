// contain helper function - loosely bound with code itself
const axios = require("axios");
const config = require("../utils/config");
const OpenAI = require("openai");

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: config.API_KEY,
});

const getAIResponse = async (mood, description) => {
  const prompt = `Help to upflit my mood, my mood is ${mood} out of 5 right now. To describe more here is the description - ${description}.\n give geniune advice after anaylzing the description carefully `;

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
