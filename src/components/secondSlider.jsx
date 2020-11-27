import React from "react";

const Second = () => {
  return (
    <div className="component second-component">
      <h1 className="title-xl">
        Felices 3 meses!{" "}
        <span style={{ fontSize: "1.5rem" }}>y los que faltan</span>
      </h1>
      <div className="imgs">
        <div>
          <img
            style={{ objectFit: "contain", height: "250px", width: "350px" }}
            src="https://i.ibb.co/HK3BrJh/120183670-369877354381257-4203090725074945369-n.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ objectFit: "contain", height: "250px", width: "350px" }}
            src="https://i.ibb.co/TwYknD3/120350078-1282141912123641-5387519122190384733-n.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ objectFit: "contain", height: "250px", width: "350px" }}
            src="https://i.ibb.co/r2npCz1/127187573-904015240407484-6750999531204212330-n.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
