
import React, { useState } from "react";

const TrafficLight = () => {

  const[redShadow, setredShadow] = useState("false")
  const[yellowShadow, setyellowShadow] = useState("false")
  const[greenShadow, setgreenShadow] = useState("false")
	
	function redLight() {
		console.log("luz verde")
		setredShadow("justShadow")
    setyellowShadow(false)
    setgreenShadow(false)
	}

  function yellowLight() {
		console.log("luz verde")
    setyellowShadow("justShadow")
    setredShadow(false)
    setgreenShadow(false)
	}

  function greenLight() {
		console.log("luz verde")
    setgreenShadow("justShadow")
    setredShadow(false)
    setyellowShadow(false)
	
	}
  

	return (
		<>	
			<div className="Container">
				<div className="square"></div>
				<div className={`box`}>
					<button onClick={redLight} className={`redLightCircle ${redShadow}`}></button>
					<button onClick={yellowLight} className={`yellowLightCircle ${yellowShadow}`}></button>
					<button onClick={greenLight} className={`greenLightCircle ${greenShadow}`}></button>
				</div>
			</div>
		</>
	);
};

export default TrafficLight;