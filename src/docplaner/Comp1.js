import React from "react";

function Comp1(props) {
  return (
    <div>
      <div className="logtitle">
      <img class="lead__logo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"/>
      <h1>Making the healthcare experience more human</h1>
      </div>
{console.log(props.y)}
      <div className="main2"
        style={{
          display: "flex",
          margin: "6% 8%",
          justifyContent: "space-between"
        }}
      > 
        {
         props.x.map((el,i) => (
            
           <p key={i}>{el}</p>
        ))}
      </div>
    </div>
  );
}
export default Comp1;
