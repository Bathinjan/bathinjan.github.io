import logo from "../images/Bath.png"

export default function Navbar() {
  return (
    <div className="nav--container">
        <nav>
            <div className="nav--logo">
                <a href="https://bathinjan.github.io/home"><img src={logo}></img></a>
            </div>
            <p className="nav--name">Bathinjan</p>
            <p>Fullstack Developer - Los Angeles, CA</p>
            <div className="nav--links">
                <ul>
                    <li><a href="#" className="nav--link">Projects</a></li>
                    {/* <li><a href="#" className="nav--link">Art Portfolio</a></li> */}
                    <li><a href="#" className="nav--link">Skills</a></li>
                    <li><a href="#" className="nav--link">Work History</a></li>
                    <li><a href="#" className="nav--link">About Me</a></li>
                    <li><a href="#" className="nav--link">Contact</a></li>
                </ul>
            </div>
        </nav>
        <hr />
    </div>
  )
}
