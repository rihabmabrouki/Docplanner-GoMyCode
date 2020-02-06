import React from 'react'

 function Card(props) {
    return (
        <div className="main3">
            {/* {console.log(props.cards)} */}
            {
         props.cards.map((el,i) => ( 
        <div className="cart" style={{backgroundColor:el.back }}>
           <span>{el.title}</span>
           <h1>{el.desc}</h1>
            
           {!el.option ? null :(
               <select name="pays" id="pays">
                   {el.option.map((el , id)=>
                 <option >{el}</option>

                   )}
               </select>
           )}
           <img className="screen" src={el.image}/>
        </div>)
     )
         } 
        </div>
    );
}
export default Card ;