"use client";

const dotenv = require("dotenv");
dotenv.config();

import { useState, useEffect } from "react";
import { getModelResponse } from "../src/handlers/huggingface";
import { MODELS, PROMPS_SET_1 } from "../src/constants/constants";
import { getRandomArrayIndex } from "../src/handlers/global_functions";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Placeholder } from "react-bootstrap";
import { FaCopy } from "react-icons/fa";

export default function GenerateImage() {
  const [fetchingImageFromHuggingFace, setFetchingImageFromHuggingFace] =
    useState(false);
  const [imageBlob, setImageBlob] = useState(null);
  const [userPrompt, setUserPrompt] = useState("");

  useEffect(() => {
    generateRandomPrompt();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(imageBlob);
    link.download = `fusion-image-generator-${new Date()
      .toISOString()
      .replace(/:/g, "-")}.png`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const generateRandomPrompt = () => {
    let _userPrompt = getRandomArrayIndex(PROMPS_SET_1)?.prompt;
    _userPrompt =
      _userPrompt && typeof _userPrompt === "string"
        ? _userPrompt
        : "Insect Kingdom of Giant Mechanical Bugs: Imagine a… beetle, a copper butterfly, and a bronze spider.";
    setUserPrompt(_userPrompt);
  };

  const handleGetModelResponse = async () => {
    setFetchingImageFromHuggingFace(true);

    if (!userPrompt || typeof userPrompt !== "string") {
      alert("Please enter a valid prompt");
      return false;
    }
    if (userPrompt?.trim()?.length <= 0) {
      alert("Please enter a prompt");
      return false;
    }

    const modelResponse = await getModelResponse(
      "stabilityai-stable-cascade",
      userPrompt?.trim(),
      "text-to-image"
    );

    if (
      modelResponse &&
      typeof modelResponse === "object" &&
      modelResponse?.size > 0
    ) {
      setImageBlob(modelResponse);
    }

    setFetchingImageFromHuggingFace(false);
  };

  const handleReset = () => {
    setUserPrompt("");
    setImageBlob(null);
    generateRandomPrompt();
    setFetchingImageFromHuggingFace(false);
  };

  const backgroundStyle = {
    hasImage: {
      width: "100%",
      display: "flex",
      minWidth: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url('${URL.createObjectURL(
        imageBlob ? imageBlob : new Blob()
      )}')`,
    },
    hasNoImage: {
      width: "100%",
      display: "flex",
      minWidth: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
    },
  };

  return (
    <main
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        // backgroundColor: "green",
      }}
    >
      <div
        className="animated-background"
        style={
          imageBlob ? backgroundStyle.hasImage : backgroundStyle.hasNoImage
        }
      >
        <div style={style.prompter_container}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Select size="lg">
              {MODELS.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </Form.Select> */}
            <h2 style={{ textAlign: "center" }}>Turn Your Words Into</h2>
            <h1 style={{ textAlign: "center" }}>
              <b>Visual Reality</b>
            </h1>
            <hr />
            {!imageBlob && !fetchingImageFromHuggingFace && (
              <>
                <Form.Label>Prompt</Form.Label>
                <Form.Control
                  rows={6}
                  type="text"
                  as="textarea"
                  value={userPrompt}
                  placeholder="Describe your image..."
                  onChange={(e) => setUserPrompt(e.target.value)}
                />
              </>
            )}
            {fetchingImageFromHuggingFace && (
              <div className="generatedImagePlaceholder">
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
              </div>
            )}
          </Form.Group>

          {imageBlob && (
            <div>
              <img
                alt="image"
                width={500}
                className="generatedImage"
                src={URL.createObjectURL(imageBlob)}
              />
              <p style={style.prompt_used_text}>{'"'}{userPrompt}{'"'}</p>
            </div>
          )}

          {!imageBlob ? (
            <Button
              size="sm"
              disabled={fetchingImageFromHuggingFace}
              variant="primary"
              onClick={handleGetModelResponse}
            >
              {fetchingImageFromHuggingFace
                ? "Generating Image"
                : "Generate Image"}
            </Button>
          ) : (
            <>
              <br />
              <Button size="sm" variant="success" onClick={handleDownload}>
                <span style={style.prompt_btn_text}>Download Image</span>
              </Button>
              <br />
              <Button onClick={handleReset} variant="primary" size="sm">
                Generate NEW Image
              </Button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

const style = {
  prompter_container: {
    width: "100%",
    display: "flex",
    padding: "30px",
    maxWidth: "400px",
    borderRadius: "5px",
    flexDirection: "column",
    border: "1px solid gray",
    backgroundColor: "white",
  },
  prompt_used_container: {
    width: "100%",
    display: "flex",
    marginBottom: "10px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prompt_used_text: {
    color: "gray",
    marginTop: "10px",
    paddingLeft: "10px",
    borderLeft: "5px solid gray",
    fontStyle: "italic",
  },
  prompt_btn_text: {
    margin: "0px 5px 0px 5px",
  },
};
