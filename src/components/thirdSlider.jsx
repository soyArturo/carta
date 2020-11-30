import React from "react";

const Third = () => {
  return (
    <div className="component second-component">
      <div className="row">
        <div className="column">
          <img
            style={{ objectFit: "contain", height: "400px", width: "400px" }}
            src="https://i.ibb.co/TwYknD3/120350078-1282141912123641-5387519122190384733-n.jpg"
            alt=""
          />
        </div>
        <div className="double-column">
          <p className="text">
            Eres lo mejor que me ha pasado en la vida, a pesar de que tenemos
            gustos direntes, si tenemos uno en comun y es el que nos amamos con
            todo nuestro ser y solo queremos ser felices juntos, tener una
            familia y envejecer juntos. No miro un futuro en donde no este
            contigo. <br />
            <span>⬇️</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
