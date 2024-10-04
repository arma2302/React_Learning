import React, { useState } from "react";

export default function StateExample2() {
  const [isVisible, setVisiblity] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const handleToggle = () => {
    setVisiblity(!isVisible);
    handleColorChange();
  };
  const handleColorChange = () => {
    setBgColor(isVisible ? "black" : "white");
  };

  return (
    <div style={{ backgroundColor: bgColor }}>
      <section>
        <div>
          <h2>Title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            velit eveniet hic inventore. Commodi quibusdam fugit facere, enim
            quo cumque? Accusantium ra tione aliquam sit quos? Officiis atque
            mollitia consectetur aperiam?
          </p>
        </div>
      </section>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
}
