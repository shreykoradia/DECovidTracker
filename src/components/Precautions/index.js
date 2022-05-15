import React from "react";
// import Header from "./Header";
import Precaution from "./Precaution";
import PrecautionsList from "./PrecautionList";

function Index() {
  return (
    <div>
     <h2>Precautions</h2>
      {PrecautionsList.map((item) =>
        <Precaution 
          key = {item.key}
          content = {item.content}
        />
      )};
    </div>
  );
}

export default Index;
