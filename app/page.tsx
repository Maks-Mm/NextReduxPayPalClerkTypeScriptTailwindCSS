import { Button } from "@/components/ui/button";
import React from "react";
import "./index.css";

const HomePage = () => {
  return (
    <main className="app">
      <div className="boxes">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="text-8xl text-red-400">
        HomePage
        <Button>Button</Button>
      </div>
    </main>
  );
};

export default HomePage;

/*

Werkzeuge https://ui.shadcn.com/docs/installation/next  
https://nextjs.org/docs/getting-started/installation

https://fonts.google.com/selection/embed (finden eine Antwort der Frage warum ich keine Fonts umzusetzen kann)

https://codepen.io/sushantsharma20/pen/vwVMXR (Hintergrund mit einer Animation)


https://www.youtube.com/watch?v=MG1Hc7VWnvc
(12.00)time
*/
