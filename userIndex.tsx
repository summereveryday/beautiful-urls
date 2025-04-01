import React, { useState } from "react";
import {
  Button
} from "@mui/material";


const userIndex = () => {
    // other code
    
    const [urlButtonText, setUrlButtonText] = useState("Copy URL");

    const copyUrlToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            // let's add the ablity to breifly display "Copied!" before
            // reverting back to "Copy URL" after two seconds.
            setUrlButtonText("Copied!");
            setTimeout(() => {
                setUrlButtonText("Copy URL");
            }, 2000);
        });
  };

  return (
    <>
        {/* other stuff */}
        <Button
            variant="outlined"
            color="primary"
            onClick={copyUrlToClipboard}
        >
            {urlButtonText}
        </Button>
        {/* other stuff */}
    </>
  );
};

export default userIndex;
