import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import './header.css'
function Header()
{
    const [user, setUser] = useState([]);
    const jwt = localStorage.getItem('jwt');
    useEffect(() => {
        fetch('http://127.0.0.1:8000/auth/me', {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setUser(data); 
            })
            .catch((error) => {
                console.error('Error:', error);
                // Обработка ошибки здесь, например, установка значения по умолчанию для пользователя
            });
          }, [jwt]);
            const [items, setItems] = useState([]);
            useEffect(() => {
              fetch('http://127.0.0.1:8000/auth/me_basket', {
                  headers: {
                      Authorization: `Bearer ${jwt}`,
                  },
              })
                    .then(res => res.json())
                    .then(data => setItems(data))
            }, []);  
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
                {user.role_id === 1 && <p><Link className={'feedback'} to={'/add_item'}>Создать товар</Link></p>}
                </div>
            </nav>
        </header>
    )
}

export default Header;