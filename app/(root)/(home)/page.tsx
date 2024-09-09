import React from "react";
import Home from "@/components/Home/Home";

const Box = () => {
  const size = Math.round(Math.random() * 10) * 10;

  const position = Math.round(Math.random() * 95);

  return (
    <li
      style={{ left: `${position}%`, height: `${size}px`, width: `${size}px` }}
    ></li>
  );
};

const HomePage = () => {
  return (
    <main className="app">
      <div className="boxes">
        <ul>
          {[...Array(20)].map((_, index) => (
            <Box key={index} />
          ))}
        </ul>
      </div>
      <div className="">
        <Home />
      </div>
    </main>
  );
};

export default HomePage;

/*

Werkzeuge https://ui.shadcn.com/docs/installation/next  
https://nextjs.org/docs/getting-started/installation
https://clerk.com/ (components for users example register)

https://fonts.google.com/selection/embed (finden eine Antwort der Frage warum ich keine Fonts umzusetzen kann)

https://codepen.io/sushantsharma20/pen/vwVMXR (Hintergrund mit einer Animation)

dummyjson.com API

https://fakestoreapi.com/docs


https://www.youtube.com/watch?v=MG1Hc7VWnvc
(01.48) time  man muss kucken warum ich kein normales Suchfeld habe und warum er link und nicht rechts ist 
*/
