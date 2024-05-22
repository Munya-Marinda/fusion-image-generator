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
import AppNavbar from "../src/components/appNavbar";

export default function GenerateImage() {
  const [fetchingImageFromHuggingFace, setFetchingImageFromHuggingFace] =
    useState(false);
  const [imageBlob, setImageBlob] = useState(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [userPromptPreview, setUserPromptPreview] = useState("");

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

    setUserPromptPreview(userPrompt);

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
    <>
      <AppNavbar />
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
          <div style={style.prompter_container} className="prompter_container">
            <hr />
            <div className="chat_flexbox">
              <div className="chat_flexbox_1">
                {!imageBlob && !fetchingImageFromHuggingFace && (
                  <img
                    src="assets/no-image-1.png"
                    alt="no-image"
                    className="generatedImage"
                  />
                )}
                {fetchingImageFromHuggingFace && (
                  <div className="generatedImagePlaceholder">
                    <Placeholder animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </div>
                )}
                {imageBlob && !fetchingImageFromHuggingFace && (
                  <>
                    <img
                      alt="image"
                      width={500}
                      className="generatedImage"
                      src={URL.createObjectURL(imageBlob)}
                    />
                    <div className="generatedImagePromtTextPreview">
                      <p style={style.prompt_used_text}>
                        {'"'}
                        {userPromptPreview}
                        {'"'}
                      </p>
                    </div>
                  </>
                )}
              </div>
              {/*
          ================================================================== 
          ================================================================== 
          */}
              <div className="chat_flexbox_2">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    rows={6}
                    type="text"
                    as="textarea"
                    value={userPrompt}
                    className="prompt_textarea"
                    placeholder="Describe your image..."
                    onChange={(e) => {
                      setUserPrompt(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button
                  size="sm"
                  variant="primary"
                  className={"prompt_btn_1"}
                  onClick={handleGetModelResponse}
                  disabled={fetchingImageFromHuggingFace}
                >
                  {fetchingImageFromHuggingFace
                    ? "Generating Image"
                    : "Generate Image"}
                </Button>
                {imageBlob && (
                  <>
                    {/* <br /> */}
                    {/* <Button
                    onClick={handleReset}
                    className={"prompt_btn_1"}
                    variant="primary"
                    size="sm"
                  >
                    Generate Image
                  </Button> */}
                    <br />
                    <Button
                      className={"prompt_btn_1"}
                      size="sm"
                      variant="success"
                      onClick={handleDownload}
                    >
                      <span style={style.prompt_btn_text}>Download Image</span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const style = {
  prompter_container: {
    width: "100%",
    display: "flex",
    // padding: "30px",
    maxWidth: "800px",
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
