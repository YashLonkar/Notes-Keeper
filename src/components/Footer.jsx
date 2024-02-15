import React from "react";

function Footer() {


    const CurrentYear= new Date().getFullYear();
    return(
        <footer>
            <p> Copyright @{CurrentYear}</p>
        </footer>
    );
}

export default Footer;