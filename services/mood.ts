import axios from "axios";
interface ResponseType {
  response: string;
}

const baseURL = "https://mood-tracker-0x33.onrender.com";

const getInsights = async (
  mood: number,
  description: string
): Promise<string> => {
  const insights = await axios.post<ResponseType>(`${baseURL}/mood-insights`, {
    mood,
    description,
  });

  return insights.data.response;
};

export default { getInsights };
