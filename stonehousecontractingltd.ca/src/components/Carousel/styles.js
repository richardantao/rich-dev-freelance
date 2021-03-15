import styled from "styled-components";

export const Button = styled.button`
	background-color: transparent;
	color: green;
`;

export const CarouselContainer = styled.div`
	display: flex;
	margin: 0 0 20px 20px;
	transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
	transform: ${props => {
		if (!props.sliding) return "translateX(calc(-80% - 20px))";
		else if (props.direction === "prev")
			return "translateX(calc(2 * (-80% - 20px)))";
		else return "translateX(0%)";
	}};
`;

export const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
`;

export const CarouselSlot = styled.div`
	flex: 1 0 80%;
	flex-basis: 80%;
	margin-right: 20px;
	order: ${props => props.order};
`;