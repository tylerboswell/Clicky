import React from "react";
import "./PicCard.css";

const PicCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPic(props.character)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.character} src={props.image} />
            </a>
        </div>
    </div>
);

export default PicCard;