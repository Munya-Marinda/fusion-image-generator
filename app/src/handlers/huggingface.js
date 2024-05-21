import { MODELS } from "../constants/constants";

export const getModelResponse = async (id, userPrompt, modelType) => {
  // console.table(id, userPrompt, modelType);

  const model = getModelById(id);

  if (!model) {
    console.error(`Model with id ${id} not found`);
    return false;
  }

  const apiKey_result = await getApiKey("huggingface");

  if (!apiKey_result) {
    // console.log("Access Token is Invalid");
    return false;
  }

  if (modelType === "text-generation" || modelType === "text-summarization") {
    const query = async (data) => {
      const response = await fetch(model.url, {
        headers: {
          Authorization: `Bearer ${apiKey_result}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    };

    const response = await query({ inputs: userPrompt });

    if (response?.error) {
      // console.log(response?.error?.toString());
    }

    try {
      return response[0]?.generated_text || response[0]?.summary_text;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  if (modelType === "text-to-image") {
    const API_URL =
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

    const query = async (data) => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${apiKey_result}`,
          },
          method: "POST",
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.blob();
        return result;
      } catch (error) {
        console.error("Error fetching image:", error);
        return false;
      }
    };
    const response = await query({ inputs: userPrompt });

    if (response) {
      return response;
    }
  }
};

const getApiKey = async (type) => {
  try {
    const response = await fetch(
      "http://lerf.000webhostapp.com/9876543210/fusion-chat/get_hf_access_token.php?key=8T6F9t)CHByckZRqvHrHYM9w",
      { method: "GET", redirect: "follow" }
    );
    const result = await response.json();
    const huggingface_api_key = result?.access_token;
    if (huggingface_api_key) {
      return huggingface_api_key;
    } else {
      console.error("No access token found");
      return false;
    }
  } catch (error) {
    console.error("Error fetching access token:", error);
    return false;
  }
};

export const getModelById = (id) => {
  return MODELS.filter((model) => model.id === id)[0];
};
