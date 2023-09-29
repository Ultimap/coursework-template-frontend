import "./cards.css"
import {Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import mark from '../../image/mark.png'


const Cards = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetch('http://127.0.0.1:8000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    const handleDelete = async (itemId) => {
        try {
            const jwt = localStorage.getItem('jwt');
            const response = await fetch(`http://127.0.0.1:8000/items/${itemId}/delete`, {
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
    return (
        <>
        <div className = "Card_Product">
        <div className='Heading'>
            <h1>Наша продукция</h1>
        </div>
            <ul>
                {
                items.map(item => (
                <li>
                <img className="mark" src={mark} onClick={() => handleDelete(item.id)} />
                <Link key = {item.id} to ={`/item/${item.id}`}>
                    <img key ={item.img} className ="product_img tilt-effect" src={`http://127.0.0.1:8000/img/${item.img}`}/>
                    <Link key={item.id}><p key={item.name} className = "product_name">{item.name}</p></Link>
                </Link>  
                </li>
                    ))
                }
            </ul>
        </div> 
        </>
     );
}
export default Cards;