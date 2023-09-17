import {Link} from "react-router-dom";
import './header.css'
function Header()
{
    return (
        <header>
            <nav>
                <div>
                    <Link to={'#'} className={'main-link'}>ГЛАВНАЯ</Link>
                    <ul>
                        <li>
                            <Link to={'#'}> НАС</Link>
                        </li>
                        <li>
                            <Link to={'#'}>КОНТАКТЫ</Link>
                        </li>
                        <li>
                            <Link to={'#'}>ПОРТФОЛИО</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link className={'feedback'} to={'#'}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</Link>
                </div>
            </nav>

        </header>
    )
}

export default Header;