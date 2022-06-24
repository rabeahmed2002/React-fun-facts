import reactLogo from "../src/images/react-logo.png"

export default function Navbar() {
    return(
        <nav>
            <img src={reactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React - Project 1</h4>
        </nav>  
    )
}