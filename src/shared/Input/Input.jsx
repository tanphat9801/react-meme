import { useState } from "react";
import cls from "classnames";
import "./input.css";

const Input = ({ type = "text", error, placeholder, ...props }) => {
  const [localType, setLocalType] = useState(type);

  const handleShowHide = () => {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  };

  const classes = cls("fa-solid", {
    "fa-eye": localType === "password",
    "fa-eye-slash": localType === "text",
  });

  return (
    <>
      <div className="form-controls">
        <div className="feild">
          <input
            type={localType}
            className="input"
            placeholder={placeholder}
            {...props}
          />
          <span>
            {type === "password" && (
              <i id="eye" className={classes} onClick={handleShowHide} />
            )}
          </span>
        </div>
        {error && <span className="form-err">{error}</span>}
      </div>
    </>
  );
};

export default Input;
