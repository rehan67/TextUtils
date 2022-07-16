import React, { useState } from "react";

export default function TextForm(props) {
  // OnClick function
  const handleUpCLick = () => {
    // console.log("handle OnClicked :" + text);
    // Store Text in New Text and apply touppercase Function
    let newText = text.toUpperCase();
    //  Set Text function
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLoCLick = () => {
    // console.log("handle OnClicked :" + text);
    // Store Text in New Text and apply toLowercase Function
    let newText = text.toLowerCase();
    //  Set Text function
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleClearClick = (event) => {
    let newText = "";
    //  Set Text function
    setText(newText);
    props.showAlert("Clear Text", "success");
  };

  const handleCopyClick = (event) => {
    let text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy To Clipboard", "success");
  };

  const handleRemoveExtraSpacesClick = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces", "success");
  };

  // onChange Function and Handle Event
  const handleOnChange = (event) => {
    // console.log("on Change ");
    setText(event.target.value);
  };

  //    Declare the State
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "White",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCLick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoCLick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleRemoveExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text summary</h2>
        {/* characters in textarea */}
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        {/* Minutes to read text */}
        <p> {0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview here"}
        </p>
      </div>
    </>
  );
}
