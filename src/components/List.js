import React from 'react';

function List (props) {
    return (
        <ul className={props.type}>
          {props.items.map(item => <li>{item}</li>)}
         </ul> 
      ); 
}

export default List;
