import React from "react";

// const NameDisplay = React.memo(({ name }) => {
//   console.log("NameDisplay rendered");
//   return <h2>{name}</h2>;
// });

const NameDisplay = ({name}) => {
    console.log("NameDisplay rendered");
      return <h2>{name}</h2>;
}

export default NameDisplay;
