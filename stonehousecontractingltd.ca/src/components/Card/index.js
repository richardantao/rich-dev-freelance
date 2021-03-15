import React from "react";

import "./styles.scss";

const Card = ({
	children,
	src,
	alt
}) =>
	<div className="card">
		<div className="card-image-container">
			<img src={src} alt={alt} className="card-image" />
		</div>
		<div className="card-body">
			{children}
		</div>
	</div>;

export default Card;