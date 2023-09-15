import React from "react";
import "../css/Testimonials.css";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";
import review4 from "../assets/review4.jpg";

const Testimonials = () => {
  const tests = [
    {
      id: 1,
      img: review1,
      title: "Jane Mark",
      content:
        "Exceptional frontend developer with strong design and coding skills.",
    },
    {
      id: 2,
      img: review2,
      title: "Sally Smith",
      content:
        "Outstanding backend developer excels in programming and data handling.",
    },
    {
      id: 3,
      img: review3,
      title: "Mark Powell",
      content:
        "Versatile full-stack developer excels in both frontend and backend.",
    },
    {
      id: 4,
      img: review4,
      title: "Morgan Nicky",
      content:
        "Exceptional web development instructor with profound expertise and effective teaching methods.",
    },
  ];

  return (
    <div className="testset-container">
      <div className="text">
        <h1>
          Testimonies & <br /> Recommendations
        </h1>
      </div>
      <div className="tests-right">
        <div className="tests-container">
          {tests.map((test) => {
            return (
              <div key={test.id} style={{ textAlign: "center" }}>
                <img src={test.img} alt="testimonial-description" />
                <h5>{test.title}</h5>
                <p>{test.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
