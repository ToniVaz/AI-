import React from "react";
import { Button } from "react-bootstrap";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function App() {
  const [image, setImageUrl] = React.useState(null);

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: "fin del mundo",
      n: 6,
      size: "1024x1024",
    });
    const image_url = response.data.data[0].url;
    setImageUrl(image_url);
    console.log("IMAGE IAMGE", image_url);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "3px solid red",
        height: "100vh",
      }}
    >
      {image && (
        <div
          style={{
            maxWidth: "500px",
            height: "500px",
          }}
        >
          <img
            style={{ maxWidth: "500px", maxHeight: "500px" }}
            src={image}
            alt="image"
          />
        </div>
      )}
      <Button type="button" onClick={generateImage}>
        GENERATE
      </Button>{" "}
    </div>
  );
}

export default App;
