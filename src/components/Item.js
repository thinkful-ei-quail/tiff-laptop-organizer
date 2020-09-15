import React from 'react';
import USCurrencyFormat from '../currencyFormat';


export default function Item(props){
  return (
    <div className="summary__option" key={props.featureHash}>
      <div className="summary__option__label">{props.name} </div>
      <div className="summary__option__value">{props.option}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.cost)}
      </div>
    </div>
  );
}