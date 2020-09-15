import React from 'react';
import Item from './Item';
import Total from '../Total';

export default function Summary(props) {
      return (
        <section className="main__summary">
			<h2>Your cart</h2>
			{Object.keys(props.selected).map((feature, idx) => {
				const featureHash = feature + "-" + idx;
				const selectedOption = props.selected[feature];
				return (
					<Item
						key={featureHash}
						name={feature}
						cost={selectedOption.cost}
						option={selectedOption.name}
					/>
				);
			})}
			<Total total={props.total} selected={props.selected} />
		</section>
	);
}