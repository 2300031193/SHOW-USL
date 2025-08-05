// src/NameAnimation.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./NameAnimation.css";

const NameAnimation = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      {
        opacity: 0,
        y: () => gsap.utils.random(-200, 200),
        x: () => gsap.utils.random(-400, 400),
        rotation: () => gsap.utils.random(-180, 180),
        scale: 0.3,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        duration: 2,
      }
    );
  }, []);

  const handleHover = (el) => {
    gsap.to(el, {
      color: "#FF4081",
      scale: 1.2,
      ease: "power3.out",
      duration: 0.3,
    });
  };

  const handleOut = (el) => {
    gsap.to(el, {
      color: "#00fff7",
      scale: 1,
      ease: "power3.out",
      duration: 0.3,
    });
  };

  const name = "USL.CHAITANYA";

  return (
    <div className="name-container">
      {name.split("").map((char, index) => (
        <span
          key={index}
          className="letter"
          ref={(el) => (lettersRef.current[index] = el)}
          onMouseEnter={() => handleHover(lettersRef.current[index])}
          onMouseLeave={() => handleOut(lettersRef.current[index])}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default NameAnimation;
