import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import TextBlock from "./components/textBlock";
import Footer from "./components/footer";

const App = () => {
  const parallaxLayers = [
    { id: "artback", speed: 0.15 },
    { id: "mountain", speed: 0.22 },
    { id: "logoland", speed: 0.32 },
    { id: "jungle1", speed: 0.2 },
    { id: "jungle2", speed: 0.25 },
    { id: "jungle3", speed: 0.3 },
    { id: "jungle4", speed: 0.35 },
    { id: "manonmountain", speed: 0.4 },
    { id: "jungle5", speed: 0.25 },
  ];

  const renderParallaxBackgrounds = () =>
    parallaxLayers.map((layer) => (
      <ParallaxLayer
        key={layer.id}
        offset={0}
        speed={layer.speed}
        factor={1} 
      >
        <div className={`animation_layer parallax`} id={layer.id} />
      </ParallaxLayer>
    ));

  return (
    <div className="App">
      <Parallax pages={2}  debounce={100}>
        {renderParallaxBackgrounds()}
        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
