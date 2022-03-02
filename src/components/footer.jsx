import react from "react";

const currentYear = new Date().getFullYear()

function Footer(){
    return <footer>
        <div>
        <p>Copyright © Apple {currentYear} </p>
    </div>
    </footer>
}

export default Footer