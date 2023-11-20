import React from "react";

const SpeciesDetails = ({ speciename, classification, language }) => {
    return (
        <>
            <p> 
                <strong> Specie Name: </strong>
                {speciename}
            </p>
            <p>
                <strong> Classification:</strong>
                {classification}
            </p>
            <p>
                <strong>Language:</strong>
                {language}
            </p>
        </>
    );
  };
  
  export default SpeciesDetails;