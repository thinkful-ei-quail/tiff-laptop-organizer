import React from 'react';
import slugify from 'slugify';
import USCurrencyFormat from '../currencyFormat';

export default function Option(props) {
  return (
    <div key={props.itemHash} className="feature__item">
      <input
        type="radio"
        id={props.id}
        className="feature__option"
        name={slugify(props.name)}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className="feature__label">
        {props.name} ({USCurrencyFormat.format(props.cost)})
      </label>
    </div>
  )
}