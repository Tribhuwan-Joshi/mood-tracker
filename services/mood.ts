import axios from "axios";

interface ResponseType {
  response: string;
}

const getInsights = async (
  mood: number,
  description: string
): Promise<string> => {
  const insights = await axios.post<ResponseType>(
    "http://localhost:3000/mood-insights",
    {
      mood,
      description,
    }
  );

  return insights.data.response;
};

export default { getInsights };
