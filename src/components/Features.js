import React from 'react';
import Option from './Option';
import slugify from 'slugify';

export default function Features(props) {
  const featureHash = props.name + '-' + props.idx;
  const options = props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));
      return (
        <Option
          key={itemHash}
          id={itemHash}
          name={item.name}
          checked={item.name === props.checked}
          onChange={() => props.updateFeature(props.name, item)}
          cost={item.cost}
        />
      )
  });

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{props.name}</h3>
      </legend>
      {options}
    </fieldset>
  );
  }
