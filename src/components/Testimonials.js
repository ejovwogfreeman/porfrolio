import React from "react";
import "../css/Testimonials.css";
import img2 from "../assets/img7.jpg";

const Testimonials = () => {
  const tests = [
    {
      id: 1,
      img: img2,
      title: "John Doe",
      content:
        "Exceptional frontend developer with strong design and coding skills.",
    },
    {
      id: 2,
      img: img2,
      title: "Sally Smith",
      content:
        "Outstanding backend developer excels in programming and data handling.",
    },
    {
      id: 3,
      img: img2,
      title: "Mark Powell",
      content:
        "Versatile full-stack developer excels in both frontend and backend.",
    },
    {
      id: 4,
      img: img2,
      title: "Morgan Freeman",
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
