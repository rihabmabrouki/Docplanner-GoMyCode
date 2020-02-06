import React from 'react'

 function Gallery(props) {
    return (
        <div className="main7">
              {props.gall.map((el,i) => (
          <div className="cards">
            <img className="Imags" src={el.image}/>
            <div className="xx">
            <span className="title">{el.title}</span>
            <button>{el.btn}</button>
            </div>
            
       
          </div>))}
        </div>
                );
}
export default Gallery;
 