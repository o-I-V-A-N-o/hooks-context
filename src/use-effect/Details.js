import { useState, useEffect } from 'react';

function Details(props) {
  
  console.log(props.detail.id);

  return (
    <div>
      <h1>Details</h1>
      <ul>
        <li>
          <img src={props.detail.avatar} key={props.detail.id}/>
        </li>
        <li>
          {props.detail.name}
        </li>
        <li>
          City: {props.detail.details.city}
        </li>
        <li>
          Company: {props.detail.details.company}
        </li>
        <li>
          Position: {props.detail.details.position}
        </li>
      </ul>
    </div>
  );
}
//
export default Details;
