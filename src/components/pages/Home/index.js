import React from 'react'

import "../../../styles/styles.css";
import "../../../styles/colors.css";
import "./styles.css";
import "../../../assets/icons/map.svg";

import imgProject1 from "../../../assets/project-1.jpeg";
import imgProject2 from "../../../assets/project-2.jpg";
import imgProject3 from "../../../assets/project-3.jpg";

import Divider from '../../Divider';
import About from '../About';
import Footer from '../../Footer';

import { useState, useEffect } from 'react';



const Home = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage === 3 ? 1 : currentImage + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLeftClick = () => {
    setCurrentImage((currentImage) => (currentImage === 1 ? 3 : currentImage - 1));
  };

  const handleRightClick = () => {
    setCurrentImage((currentImage) => (currentImage === 3 ? 1 : currentImage + 1));
  };

  return (
    <>
      <div className="home">
        <div className="home-layouts">
          <div className="home-layout">
            <div className="image-container">
              {currentImage === 1 && (
                <img
                  src={imgProject1}
                  alt="Project 1"
                  style={{ width: "1200px", height: "900px" }}
                  className="fade"
                />
              )}
              {currentImage === 2 && (
                <img
                  src={imgProject2}
                  alt="Project 2"
                  style={{ width: "1200px", height: "900px" }}
                  className="fade"
                />
              )}
              {currentImage === 3 && (
                <img
                  src={imgProject3}
                  alt="Project 3"
                  style={{ width: "1200px", height: "900px" }}
                  className="fade"
                />
              )}
              <div className="button-overlay">
                <a href="/" className="button-link">
                  Подробнее
                </a>
              </div>
              <p>Описание проекта {currentImage}</p>
              <button onClick={handleLeftClick} className="prev-button">&#60;</button>
              <button onClick={handleRightClick} className="next-button">&#62;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

