import React from 'react';
import Feature from './Feature';

export default class Features extends React.Component {
  render () {
    Object.keys(this.props.features).map((feature, idx) => {
        return <Feature 
                 features={this.props.features}
                 feature ={feature}
                 idx={idx}
                 state={this.props.state}
                 updateFeature={this.props.updateFeature}
                />
        }); 
      return ( 
        <features />
      )
  }
}