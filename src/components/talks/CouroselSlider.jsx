import React, { useState } from "react";

// icons import
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CouroselSlider = ({ slideHeadings }) => {
  const [talkIndex, setTalkIndex] = useState(0);

  function showPrevImg() {
    setTalkIndex((prevIndex) => {
      if (prevIndex === 0) {
        return slideHeadings.length - 1;
      }

      return prevIndex - 1;
    });
  }

  function showNextImg() {
    setTalkIndex((prevIndex) => {
      if (prevIndex === slideHeadings.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    });
  }

  return (
    <div className="courosel_wrap">
      <div>
        <div className="individual_talk">
          <h3>{slideHeadings[talkIndex].title}</h3>
          <p>{slideHeadings[talkIndex].content}</p>
        </div>
      </div>
      <button className="slider_btn" style={{ left: 0 }} onClick={showPrevImg}>
        <FaAngleLeft />
      </button>
      <button className="slider_btn" style={{ right: 0 }} onClick={showNextImg}>
        <FaAngleRight />
      </button>
      {/* <a href={slideHeadings[talkIndex].url} target="_blank">
          Know more
        </a> */}
    </div>
  );
};

export default CouroselSlider;

// <div className="courosel_wrap">
//   {slideHeadings.map((talk, talksArrayIndex) => (
//     <div key={talksArrayIndex} className="individual_talk">
//       <h3>{talk.title}</h3>
//       <p>{talk.content}</p>
//     </div>
//   ))}
// </div>
