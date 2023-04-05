import React from "react";
import { useState } from "react";
import MainCardImage from "./MainCardImage";
import {SiEthereum} from "react-icons/all";
import {HiClock} from "react-icons/hi2";
import customer from "../img/Oval.png";


export default function Card() {
    
  function changeBackgroundover(e) {
    e.target.style.color = "#00FFF8";
  }
  function changeBackgroundleve(e){
    e.target.style.color = "white"
  }
  

  return (
    <div style={mainCardContainer}>  
      <MainCardImage />

      <p  onMouseOver={changeBackgroundover}
          onMouseLeave={changeBackgroundleve}
        style={styles.nameColorChanger}>
        equilibrium #3429
      </p>
      <p style={styles.aboutEquilibrium}>
        Our Equilibrium collection promotes balance and calm
      </p>
      <SiEthereum style={styles.pathIconUp}/>
      <p style={styles.pathIconDescription}>
        0.041 eth
      </p>
      <HiClock style={styles.clockIcon}/>
      <p style={styles.leftedTime}>
        3 days left
      </p>
      <div style={styles.lineBorder}></div>
      <img style={styles.customers} src={customer} alt="customer" />
      <p style={styles.creatorsFace}>
        Creation of
        <span onMouseOver={changeBackgroundover} onMouseLeave={changeBackgroundleve}
          style={styles.nameOfCreator}>
          Jules Wyvern
        </span>
      </p>      
    </div>
  )
}

const mainCardContainer = {
  position: "absolute",
  left: "0%",
  right: "0%",
  top: "0%",
  bottom: "0%",
  top: "152px",
  left: "545px",
  width: "350px",
  height: "596px",
  backgroundColor: "#15263F",
  borderRadius: "15px",
  boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.0952917)",
}

const styles = {
  nameColorChanger: {
    position: "absolute",
    left: "6.86%",
    right: "6.86%",
    top: "55.72%",
    bottom: "36.58%",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "28px",
    color: "#FFFFFF",
    textTransform: "capitalize",
    cursor: "pointer",
  },
  aboutEquilibrium: {
    position: "absolute",
    height: "52px",
    left: "6.86%",
    right: "6.86%",
    top: "calc(48% - 52px/2 + 122px)",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#8BACD9",
  },
  pathIconUp: {
    position: "absolute",
    height: "20px",
    left: "6%",
    right: "1.07%",
    top: "calc(80.5% - 20px/2)",
    fill: "#00FFF8"
  },
  pathIconDescription: {
    position: "absolute",
    height: "20px",
    left: "12%",
    right: "1.07%",
    top: "calc(78% - 20px/2)",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#00FFF8",
    textTransform: "uppercase",
  },
  clockIcon: {
    position: "absolute",
    width: "20px",
    height: "17px",
    right: "27.58%",
    top: "calc(81% - 20px/2)",
    fill: "#8BACD9",
  },
  leftedTime: {
    position: "absolute",
    height: "20px",
    left: "73.42%",
    right: "6.68%",
    top: "calc(78% - 20px/2)",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#8BACD9",
    width: "75px",
  },
  lineBorder: {
    width: "302px",
    height: "1px",
    position: "absolute",
    left: "6.86%",
    right: "6.86%",
    top: "86.24%",
    bottom: "13.59%",
    background: "#2E405A",
  },
  customers: {
    position: "absolute",
    left: "6.86%",
    right: "83.71%",
    top: "89%",
    bottom: "5.37%",
    background: "#2E405A",
    borderRadius: "15px",
  },
  creatorsFace: {
    position: "absolute",
    height: "20px",
    left: "20%",
    top: "87.5%",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#8BACD9",
  },
  nameOfCreator: {
    position: "absolute",
    color: "#FFFFFF",
    marginLeft: "10px",
    width: "100px",
    cursor: "pointer"
  }
}