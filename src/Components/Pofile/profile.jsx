import './profile.css'
import { useState, useEffect } from "react";
const Profile = () => {
    const [user, setUser] = useState([]);
    const jwt = localStorage.getItem('jwt');
    useEffect(() => {
        fetch('http://192.168.0.107:8000/auth/me', {
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
          .then((data) => setUser(data))
          .catch((error) => {
            console.error('Error:', error);
            // Обработка ошибки здесь, например, установка значения по умолчанию для пользователя
          });
      }, [jwt]);
    return ( 
        <>
            <div className="username">
                <h1>Здравстувуй {user.username}!</h1>
                <h2>Ваши заказанные объеты:</h2>
            </div>      
        </>
     );
}
 
export default Profile;
