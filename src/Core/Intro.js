import React, { useRef, useEffect } from "react";
import { TweenMax, Expo, Power4 } from "gsap";
import "./Intro.css"

function Home() {
  let first = useRef(null);
  let second = useRef(null);
  let third = useRef(null);
  let logo = useRef(null);
  let menulinksulli = useRef(null);
  let borderbottom = useRef(null);
  let subtitle = useRef(null);
  let title = useRef(null);
  let desc = useRef(null);
  let readmore = useRef(null);
  let slider = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);

  useEffect(() => {
    TweenMax.from(logo.current, 1, {
      delay: 1.2,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom(
      menulinksulli.current,
      1,
      {
        delay: 1.2,
        opacity: 0,
        x: -20,
        ease: Power4.easeInOut,
      },
      0.08
    );
    TweenMax.to(borderbottom.current, 1, {
      delay: 1.4,
      width: "100%",
      ease: Expo.easeInOut,
    });

    TweenMax.from(subtitle.current, 1, {
      delay: 2.8,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.to(title.current, 1, {
      delay: 2.2,
      width: "100%",
      ease: Expo.easeInOut,
    });

    TweenMax.from(desc.current, 1, {
      delay: 2.8,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(readmore.current, 1, {
      delay: 2.8,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.to(slider.current, 1, {
      delay: 3,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    TweenMax.to(img1.current, 1, {
      delay: 2.2,
      width: "450px",
      ease: Expo.easeInOut,
    });

    TweenMax.to(img2.current, 1, {
      delay: 2.2,
      width: "300px",
      ease: Expo.easeInOut,
    });

    TweenMax.to(img3.current, 1, {
      delay: 2.2,
      width: "300px",
      ease: Expo.easeInOut,
    });

    TweenMax.to(first.current, 1.5, {
      delay: 0.2,
      left: "-100%",
      ease: Expo.easeInOut,
    });

    TweenMax.to(second.current, 1.5, {
      delay: 0.4,
      left: "-100%",
      ease: Expo.easeInOut,
    });

    TweenMax.to(third.current, 1.5, {
      delay: 0.6,
      left: "-100%",
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div className="home">
      <div className="home-subsec">
        <div ref={first} className="overlay first"></div>
        <div ref={second} className="overlay second"></div>
        <div ref={third} className="overlay third"></div>

        <div className="wrapper">
        </div>

        <hr className="border-bottom" />

        <div className="content">
          <div className="text">
            <h1 ref={title} className="title">
              <span>
                SPACEX
                
              </span>
              <p className="launchpads">LAUNCHPADS</p>
            </h1>
          </div>

          <div ref={img1} className="img-1"></div>

          <div ref={slider} className="slider">
            <div className="pages">
              <span>01</span>/04
            </div>
          </div>
          <div ref={img2} className="img-2"></div>
          <div ref={img3} className="img-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
