import React, { useState, useEffect } from "react";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import resume from "../../Assets/My-Resume.jpg";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../Resume/Resume.css";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <div className="container">
        <button className="resume_btn">
          <a className="resume_a" download href={pdf}>
            Download
          </a>
        </button>
        <div className="resume_page">
          <img className="resume_foto" src={resume} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
