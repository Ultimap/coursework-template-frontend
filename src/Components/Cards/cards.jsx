import "./cards.css"
import {Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import mark from '../../image/mark.png'


const Cards = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetch('http://192.168.0.107:8000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    const handleDelete = async (itemId) => {
        try {
            const jwt = localStorage.getItem('jwt');
            const response = await fetch(`http://192.168.0.107:8000/items/${itemId}/delete`, {
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
        <div class = "Card_Product">
        <div className='Heading'>
            <h1>Наша продукция</h1>
        </div>
            <ul>
                {
                items.map(item => (
                <li>
                <img className="mark" src={mark} onClick={() => handleDelete(item.id)} />
                <Link key = {item.id} to ={`/item/${item.id}`}>
                    <img key ={item.img} class ="product_img tilt-effect" src={`http://192.168.0.107:8000/img/${item.img}`}/>
                    <Link key={item.id}><p key={item.name} class = "product_name">{item.name}</p></Link>
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



                    {/* <div className="product_menu">
                        <Link key={item.id} to={`/item/${card.id}`}><p key={item.cost}>{item.cost}</p></Link>
                    </div> */}

                    
            {/* <ul>
                {  
                    cards.map(card => (
                        <li>
                            <img key ={card.img} class ="product_img" src={`/tovar_image/${card.img}`}/>
                            
                            <div class="product_menu">
                                <Link key={card.id} to={`/item/${card.id}`}><p key={card.cost}>{card.cost}</p></Link>
                            </div>
                        </li>
                    ))
                }
            </ul> */}