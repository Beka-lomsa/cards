import { useState } from "react";
import Rectangle from "../img/Rectangle.png";
import {AiFillEye} from "react-icons/all";
import "./maincardimage.css"

export default function MainCardImage() {
  const [image, setImage] = useState(<img style={cardIMage} src={Rectangle}/>)
  const [classDissepiar, setClassDissepiar] = useState("eyeBackContainerDissapier")

  return (
    <div 
    onMouseOver={() => {
      setClassDissepiar("eyeBackContainer")
    }}
    onMouseLeave={() => {
      setClassDissepiar("eyeBackContainerDissapier")
    }}>
      {image}
      <div className={classDissepiar}>
        <AiFillEye color="#FFFFFF" size="3rem" style={eyes} />
      </div>     
    </div>
  )

}

const cardIMage = {
  position: "absolute",
  left: "6.68%",
  right: "6.68%",
  top: "4.03%",
  bottom: "45.3%",
  width:"302px",
  height: "302px",
  borderRadius: "15px",
  boxSizing: "border-box",
  cursor: "pointer",
  backgroundColor: "red" 
}
const eyes = {
  position: "absolute",
  aligneItems: "center",
}


