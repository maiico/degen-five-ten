import React from "react";
import "./PlayAgain.css"
import { useNavigate } from "react-router-dom";

function PlayAgain() {

    const navigate = useNavigate();

    return (
        <div className="play-again">
            <div className="play-again-wrapper" onClick={() => {navigate("/")}}>
                <h1 className="play-again-header">Play Again</h1>
            </div>
        </div>
    );
}

export default PlayAgain;