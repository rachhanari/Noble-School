import React from "react";
import "./HAbout.css";

// Corrected image imports
import acting from "../Assets/school-img/acting.png"
import acting1 from "../Assets/school-img/acting1.png";
import stage1 from "../Assets/school-img/stage1.png";
import goals from "../Assets/school-img/goals.png";
import stageImg from "../Assets/school-img/stage-img.png";
import prayer from "../Assets/school-img/prayer.png";
import fasidress from "../Assets/school-img/fasidress.png";
import anual from "../Assets/school-img/anual.png";
// import Contact from "../contact/Contact";

const images = [acting, acting1, stage1, goals, stageImg, prayer, fasidress, anual];

const HAbout = () => {
  return (
    <>
    <section className="habout">
      <div className="titles">
      <h3 className="subtitle">GALLERY</h3>
      <h2 className="title">Explore Top Events</h2>
      </div>
      <div className="grid">
        {images.map((img, index) => (
          <div key={index} className="image-container">
            <img src={img} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
    {/* <Contact /> */}
    </>
  );
};

export default HAbout;
