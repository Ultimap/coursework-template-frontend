import './item.css'
import {Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import itemIMG from "../../image/изображение 4(1).png"
const Item = () => {
    const {id} = useParams(); 
    const [item, setItem] = useState([]);
    useEffect(() =>{
        fetch(`http://192.168.0.107:8000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    return ( 
        <>
            <div className='item'>
                <h1 >{item.name}</h1>
                <img key={item.img} src ={`http://192.168.0.107:8000/img/${item.img}`}></img>
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
            <div className='baton'>
                <h1>ЗАКАЗАТЬ</h1>
            </div>
        </>
     );
}
export default Item;
