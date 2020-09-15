import React from 'react';
import store from '../Store';
import Features from './Features';

export default function Main(props){
  return(
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {Object.keys(store).map((featureName, idx) => (
        <Features 
          feature={store[featureName]}
          key={featureName}
          name={featureName}
          idx={idx}
          checked={props.selected[featureName].name}
          updateFeature={props.updateFeature}
        />
      
      ))}
    </form>
  )
}