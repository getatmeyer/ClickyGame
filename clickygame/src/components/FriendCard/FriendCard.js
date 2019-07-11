import React from "react";
import "./FriendCard.css"

const FriendCard = props => (
    <div className= "card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
 </div>
 </div>
);
export default FriendCard;