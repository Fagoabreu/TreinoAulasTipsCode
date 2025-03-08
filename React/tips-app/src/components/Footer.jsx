import React from "react";

const ano = new Date().getFullYear();
function Footer() {
    return (
        <footer>
            <p>Copyright Fabio Abreu @{ano}</p>
        </footer>
    )
}

export default Footer;