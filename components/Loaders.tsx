"use client";

import { useEffect, useState } from "react";

export const Loader_Recipes = () => {
  return (
    <div className="w-10 h-10 border-4 border-t-main border-gray-300 rounded-full animate-spin"></div>
  );
};

export const Loader_Forms = () => {
  return (
    <>
      <style>
        {`
              .loading-wave {
              width: 60px;
              height: 20px;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              }
  
              .loading-bar {
              width: 10px;
              height: 5px;
              margin: 0 5px;
              background-color: #ffffff;
              border-radius: 5px;
              animation: loading-wave-animation 1s ease-in-out infinite;
              }
  
              .loading-bar:nth-child(2) {
              animation-delay: 0.1s;
              }
  
              .loading-bar:nth-child(3) {
              animation-delay: 0.2s;
              }
  
              .loading-bar:nth-child(4) {
              animation-delay: 0.3s;
              }
  
              @keyframes loading-wave-animation {
                  0% {
                      height: 7px;
                  }
  
                  50% {
                      height: 25px;
                  }
  
                  100% {
                      height: 7px;
                  }
              }
          `}
      </style>
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    </>
  );
};

export const Loader_Main = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowLoader(false)
    }, 1000)

    return () => clearTimeout(timer)
  },[])

  return (
    <>
      {showLoader && (
        <div className="bg-overlay w-full h-screen fixed top-0 left-0 z-[99] flex items-center justify-center">
          <div className="hourglassBackground">
            <div className="hourglassContainer">
              <div className="hourglassCurves"></div>
              <div className="hourglassCapTop"></div>
              <div className="hourglassGlassTop"></div>
              <div className="hourglassSand"></div>
              <div className="hourglassSandStream"></div>
              <div className="hourglassCapBottom"></div>
              <div className="hourglassGlass"></div>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
                .hourglassBackground {
                position: relative;
                background-color: #f44235;
                height: 130px;
                width: 130px;
                border-radius: 50%;
                margin: 30px auto;
                }
            
                .hourglassContainer {
                position: absolute;
                top: 30px;
                left: 40px;
                width: 50px;
                height: 70px;
                -webkit-animation: hourglassRotate 2s ease-in 0s infinite;
                animation: hourglassRotate 2s ease-in 0s infinite;
                transform-style: preserve-3d;
                perspective: 1000px;
                }
            
                .hourglassContainer div,
                .hourglassContainer div:before,
                .hourglassContainer div:after {
                transform-style: preserve-3d;
                }
            
                @-webkit-keyframes hourglassRotate {
                0% {
                    transform: rotateX(0deg);
                }
            
                50% {
                    transform: rotateX(180deg);
                }
            
                100% {
                    transform: rotateX(180deg);
                }
                }
            
                @keyframes hourglassRotate {
                0% {
                    transform: rotateX(0deg);
                }
            
                50% {
                    transform: rotateX(180deg);
                }
            
                100% {
                    transform: rotateX(180deg);
                }
                }
            
                .hourglassCapTop {
                top: 0;
                }
            
                .hourglassCapTop:before {
                top: -25px;
                }
            
                .hourglassCapTop:after {
                top: -20px;
                }
            
                .hourglassCapBottom {
                bottom: 0;
                }
            
                .hourglassCapBottom:before {
                bottom: -25px;
                }
            
                .hourglassCapBottom:after {
                bottom: -20px;
                }
            
                .hourglassGlassTop {
                transform: rotateX(90deg);
                position: absolute;
                top: -16px;
                left: 3px;
                border-radius: 50%;
                width: 44px;
                height: 44px;
                background-color: #999999;
                }
            
                .hourglassGlass {
                perspective: 100px;
                position: absolute;
                top: 32px;
                left: 20px;
                width: 10px;
                height: 6px;
                background-color: #999999;
                opacity: 0.5;
                }
            
                .hourglassGlass:before,
                .hourglassGlass:after {
                content: '';
                display: block;
                position: absolute;
                background-color: #999999;
                left: -17px;
                width: 44px;
                height: 28px;
                }
            
                .hourglassGlass:before {
                top: -27px;
                border-radius: 0 0 25px 25px;
                }
            
                .hourglassGlass:after {
                bottom: -27px;
                border-radius: 25px 25px 0 0;
                }
            
                .hourglassCurves:before,
                .hourglassCurves:after {
                content: '';
                display: block;
                position: absolute;
                top: 32px;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #333;
                animation: hideCurves 2s ease-in 0s infinite;
                }
            
                .hourglassCurves:before {
                left: 15px;
                }
            
                .hourglassCurves:after {
                left: 29px;
                }
            
                @-webkit-keyframes hideCurves {
                0% {
                    opacity: 1;
                }
            
                25% {
                    opacity: 0;
                }
            
                30% {
                    opacity: 0;
                }
            
                40% {
                    opacity: 1;
                }
            
                100% {
                    opacity: 1;
                }
                }
            
                @keyframes hideCurves {
                0% {
                    opacity: 1;
                }
            
                25% {
                    opacity: 0;
                }
            
                30% {
                    opacity: 0;
                }
            
                40% {
                    opacity: 1;
                }
            
                100% {
                    opacity: 1;
                }
                }
            
                .hourglassSandStream:before {
                content: '';
                display: block;
                position: absolute;
                left: 24px;
                width: 3px;
                background-color: white;
                -webkit-animation: sandStream1 2s ease-in 0s infinite;
                animation: sandStream1 2s ease-in 0s infinite;
                }
            
                .hourglassSandStream:after {
                content: '';
                display: block;
                position: absolute;
                top: 36px;
                left: 19px;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-bottom: 6px solid #fff;
                animation: sandStream2 2s ease-in 0s infinite;
                }
            
                @-webkit-keyframes sandStream1 {
                0% {
                    height: 0;
                    top: 35px;
                }
            
                50% {
                    height: 0;
                    top: 45px;
                }
            
                60% {
                    height: 35px;
                    top: 8px;
                }
            
                85% {
                    height: 35px;
                    top: 8px;
                }
            
                100% {
                    height: 0;
                    top: 8px;
                }
                }
            
                @keyframes sandStream1 {
                0% {
                    height: 0;
                    top: 35px;
                }
            
                50% {
                    height: 0;
                    top: 45px;
                }
            
                60% {
                    height: 35px;
                    top: 8px;
                }
            
                85% {
                    height: 35px;
                    top: 8px;
                }
            
                100% {
                    height: 0;
                    top: 8px;
                }
                }
            
                @-webkit-keyframes sandStream2 {
                0% {
                    opacity: 0;
                }
            
                50% {
                    opacity: 0;
                }
            
                51% {
                    opacity: 1;
                }
            
                90% {
                    opacity: 1;
                }
            
                91% {
                    opacity: 0;
                }
            
                100% {
                    opacity: 0;
                }
                }
            
                @keyframes sandStream2 {
                0% {
                    opacity: 0;
                }
            
                50% {
                    opacity: 0;
                }
            
                51% {
                    opacity: 1;
                }
            
                90% {
                    opacity: 1;
                }
            
                91% {
                    opacity: 0;
                }
            
                100% {
                    opacity: 0;
                }
                }
            
                .hourglassSand:before,
                .hourglassSand:after {
                content: '';
                display: block;
                position: absolute;
                left: 6px;
                background-color: white;
                perspective: 500px;
                }
            
                .hourglassSand:before {
                top: 8px;
                width: 39px;
                border-radius: 3px 3px 30px 30px;
                animation: sandFillup 2s ease-in 0s infinite;
                }
            
                .hourglassSand:after {
                border-radius: 30px 30px 3px 3px;
                animation: sandDeplete 2s ease-in 0s infinite;
                }
            
                @-webkit-keyframes sandFillup {
                0% {
                    opacity: 0;
                    height: 0;
                }
            
                60% {
                    opacity: 1;
                    height: 0;
                }
            
                100% {
                    opacity: 1;
                    height: 17px;
                }
                }
            
                @keyframes sandFillup {
                0% {
                    opacity: 0;
                    height: 0;
                }
            
                60% {
                    opacity: 1;
                    height: 0;
                }
            
                100% {
                    opacity: 1;
                    height: 17px;
                }
                }
            
                @-webkit-keyframes sandDeplete {
                0% {
                    opacity: 0;
                    top: 45px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                1% {
                    opacity: 1;
                    top: 45px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                24% {
                    opacity: 1;
                    top: 45px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                25% {
                    opacity: 1;
                    top: 41px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                50% {
                    opacity: 1;
                    top: 41px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                90% {
                    opacity: 1;
                    top: 41px;
                    height: 0;
                    width: 10px;
                    left: 20px;
                }
                }
            
                @keyframes sandDeplete {
                0% {
                    opacity: 0;
                    top: 45px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                1% {
                    opacity: 1;
                    top: 45px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                24% {
                    opacity: 1;
                    top: 45px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                25% {
                    opacity: 1;
                    top: 41px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                50% {
                    opacity: 1;
                    top: 41px;
                    height: 17px;
                    width: 38px;
                    left: 6px;
                }
            
                90% {
                    opacity: 1;
                    top: 41px;
                    height: 0;
                    width: 10px;
                    left: 20px;
                }
                }
                `}
      </style>
    </>
  );
};
