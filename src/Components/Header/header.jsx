import {Link} from "react-router-dom";
import './header.css'
function Header()
{
    return (
        <header>
            <nav>
                <div>
                    <Link to={'/home'} className={'main-link'}>ГЛАВНАЯ</Link>
                    <ul>
                        <li>
                            <Link to={'/aboutUs'}> О НАС</Link>
                        </li>
                        <li>
                            <Link to={'/sign_up'}>ВОЙТИ</Link>
                        </li>
                        <li>
                            <Link to={'/cards'}>ПРОДУКЦИЯ</Link>
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