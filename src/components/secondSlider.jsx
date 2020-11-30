import React from "react";

const Second = () => {
  return (
    <div className="component second-component">
      <div className="row">
        <div className="column">
          <img
            style={{
              objectFit: "contain",
              height: "400px",
              width: "400px",
            }}
            src="https://i.ibb.co/HK3BrJh/120183670-369877354381257-4203090725074945369-n.jpg"
            alt=""
          />
        </div>
        <div className="double-column">
          <p className="text">
            Amor se que aveces no suelo ser la persona mas facil de tratar, que
            aveces puedas sentir que no me importas, pero dejame decirte que es
            todo lo contrario <br />
            <span>⬇️</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;
