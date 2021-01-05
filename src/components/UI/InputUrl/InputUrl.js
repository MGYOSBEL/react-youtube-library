import React from "react";

const inputUrl = (props) => {
  let errorMessage = null;
  const inputClasses = [
    "outline-none  w-full bg-transparent border-b-solid border-b-2 text-white",
  ];
  const invalidClasses = "text-red-500 border-red-600";
  const errorFeedBackClasses = "text-red-500 text-xs pt-0";
  const labelClasses = "";
  if (props.invalid && props.touched) {
    inputClasses.push(invalidClasses);
    errorMessage = (
      <p className={errorFeedBackClasses}>Please enter a valid URL</p>
    );
  } else {
    inputClasses.push("focus:border-pink-600");
  }

  const caretStyle = {
    caretColor: props.invalid && props.touched ? "#f44336" : "#c2185b",
  };

  return (
    <div className="relative my-2 w-full">
      <label className={labelClasses}>{props.label}</label>
      <input
        style={caretStyle}
        type="url"
        className={inputClasses.join(" ")}
        placeholder={props.placeholder}
        label={props.label}
        value={props.value}
        onChange={props.changed}
      />
      {errorMessage}
    </div>
  );
};

export default inputUrl;
