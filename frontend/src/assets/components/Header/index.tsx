import './style.css'
import logo from '../../img/logo.svg'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="dsmetalogo" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="#">@William Henrique</a>
                    </p>
            </div>
        </header>
    )
}

export default Header