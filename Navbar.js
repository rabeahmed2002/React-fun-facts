import reactLogo from "../src/images/react-logo.png"

export default function Navbar(props) {
    return(
        <nav className={props.darkmode ? "" : "light"}>
            <img src={reactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React - Project 1</h4>
            <p>Light</p>
            <div 
                className="toggler-slider"
                onClick={props.handleChange}
            ></div>
            <p>Dark</p>
        </nav>  
    )
}
