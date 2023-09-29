import './item.css'
import {Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import itemIMG from "../../image/изображение 4(1).png"
const Item = () => {
    const {id} = useParams(); 
    const [item, setItem] = useState([]);
    const [orderStatus, setOrderStatus] = useState(null);
    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    const jwt = localStorage.getItem('jwt')
    const handleOrderClick = () => {
        fetch("http://127.0.0.1:8000/auth/add_basket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
          body: JSON.stringify({
            item: item.id,
           
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setOrderStatus("Товар успешно добавлен в корзину.");
            } else {
              setOrderStatus("Произошла ошибка при добавлении товара в корзину.");
            }
          })
          .catch((error) => {
            console.error("Ошибка при отправке заказа:", error);
            setOrderStatus("Произошла ошибка при добавлении товара в корзину.");
          });
      };

    
    return ( 
        <>
            <div className='item'>
                <h1 >{item.name}</h1>
                <img key={item.img} src ={`http://127.0.0.1:8000/img/${item.img}`}></img>
            </div>
            <div className='Discription'>
                <div className='Description'>
                    <h1>Описание:</h1>
                    <p key = {item.description}> {item.description}</p>
                </div>
            </div>
                <div className='Characteristics'>
                    <h1>Характеристики</h1>
                    <p> {item.characteristics}</p>
                    
                    
                </div>
            <div className='CAC'>
                <p key={item.category}>Категория: {item.category}</p>
                <p key={item.cost}>Цена: {item.cost}</p>
                <p key={item.quantity}>Количество: {item.quantity}</p>
            </div>
            <div className="baton">
            <button type="button" onClick={handleOrderClick}>
                ЗАКАЗАТЬ
            </button>
            {orderStatus && <p>{orderStatus}</p>}
            </div>
        </>
     );
}
export default Item;
