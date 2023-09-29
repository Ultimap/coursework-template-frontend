import './profile.css'
import { useState, useEffect } from "react";
import {Link } from 'react-router-dom'
import mark from '../../image/mark.png'
const Profile = () => {
    const [orderedItems, setOrderedItems] = useState([]);
    const [user, setUser] = useState([]);
    const jwt = localStorage.getItem('jwt');
    const handleDelete = async (itemId) => {
        try {
            const jwt = localStorage.getItem('jwt');
            const response = await fetch(`http://127.0.0.1:8000/auth/me_basket/${itemId}/delete`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
    
            if (response.ok) {
                // Если удаление прошло успешно, обновите список объектов
                setItems(items.filter(item => item.id !== itemId));
            } else {
                console.error('Ошибка при удалении объекта');
            }
        } catch (error) {
            console.error('Сетевая ошибка:', error);
        }
    };

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
              setOrderedItems(data.orderedItems); 
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
        <>
          <div className = "Card_Product">
            <div className="username">
                <h1>Здравстувуй {user.username}!</h1>
                
                <h2>Ваши заказанные объеты:</h2>
                <ul>
                {
                items.map(item => (
                <li>
                    <img className="mark" src={mark} onClick={() => handleDelete(item.id)} />
                  <Link key = {item.id} to ={`/item/${item.id}`}>
                  <img key ={item.img} className ="product_img tilt-effect" src={`http://192.168.0.107:8000/img/${item.img}`}/>
                  <Link key={item.id}><p key={item.name} className = "product_name">{item.name}</p></Link>
                  </Link>  
                </li>
                    ))
                }
                </ul>
            </div>
          </div>     
        </>
     );
}
 
export default Profile;
