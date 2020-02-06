import React from 'react';

function Navbar(props){
      return (
     <div className="menu">
        <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" width="250" height="80" />
     <ul className="list">
    
       {props.navbmenu.map((el ,id) => (
         
           <li key={id} className="dropdown" >{el.item}
            {!el.sousMenu ? null : (
              <ul className="dropbtn" key={id} >
                {el.sousMenu.map((tt,id)=>(
                  <li className="dropdown-content" key={id} >{tt}</li>
                ))}

              </ul>
            )}
            
          </li>
         
       )
        ) } 
    </ul> 
      </div>
 
      );
      }
export default Navbar;

