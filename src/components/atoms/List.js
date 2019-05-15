import React from 'react';

function List (props) {
    return (
        <ul className={props.type}>
          {props.items.map((item, index) => <li key={'list-' + item + `-${index}`}>{item}</li>)}
         </ul> 
      ); 
}

export default List;
