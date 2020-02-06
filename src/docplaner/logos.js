import React from 'react'

 function Logos(props) {
    return (
        <div className="main4">
         <p> We are a global company with local culture </p> 
        <ul >
        {props.Log.map((el)=>
      <li className="Image"><svg xmlns={el.log}><path d={el.path}></path></svg></li>
        
        )}
        </ul>
        </div>
    );
}
export default Logos;
