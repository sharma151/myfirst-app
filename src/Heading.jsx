import React from "react";
 function Heading(){
    
 

 const date = new Date(2022,1, 1, 19);
 const currentTime = date.getHours();
 let customStyle = {
   color: "",
 };
 let greeting;
 if (currentTime <= 12) {
   greeting = "GoodMorning";
   customStyle.color = "red";
 } else if (currentTime < 18) {
   greeting = "GoodAfternoon";
   customStyle.color = "green";
 } else {
   greeting = "GoodNight";
   customStyle.color = "blue";
 }
 return<h1 style={customStyle}>{greeting}</h1>
}

  export default Heading;