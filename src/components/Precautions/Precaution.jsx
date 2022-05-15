import React from "react";
// import PrecautionsList from "./PrecautionList";

function Precaution(props){
    return(
        <div className="pm">
            <div className = "precaution">
                <p>{props.content}</p>
            </div>
        </div>
        
    );

}

export default Precaution;