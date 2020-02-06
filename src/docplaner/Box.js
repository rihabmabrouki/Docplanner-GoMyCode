import React from 'react'

 function Box (props) {
    return (
        <div className="main5">
          
                  <div className="tit">
                  <h1>The world's <br/> biggest healthcare platform</h1>
                  <span className="span">We work from 6 offices all over the world, bringing Docplanner <br/> Group to life in almost 20 countries.
                  </span>
                  <img className="img" src="https://www.docplanner.com/img/logo.png"/> 
                  </div>

      <div className ="boxx">
     {props.B.map((el,i) => (
          <div className="boox">
            <img src={el.image}/>
            <span className="title">{el.title}</span>
            <p>{el.description}</p>
       
          </div>)
      
     )}
     </div>
        </div>
     );
     }
                
export default Box ;