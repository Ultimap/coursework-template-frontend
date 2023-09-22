import "./cards.css"
import {Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import prod from "../../image/Card.png"
const Cards = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetch('http://192.168.0.107:8000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
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
                <Link to = "/item">
                    <img key ={item.img} class ="product_img" src={`/tovar_image/${item.img}`}/>
                    <img class ="product_img" src ={prod}/>
                    <p class = "product_name">АФУ специального назначения </p>
                    <Link key={ item.id} to ={`/item/${item.id}`}><p key={item.product_name} class = "product_name">{item.product_name}</p></Link>
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
                            <Link key={card.id} to ={`/item/${card.id}`}><p key={card.product_name} class = "product_name">{card.product_name}</p></Link>
                            <div class="product_menu">
                                <Link key={card.id} to={`/item/${card.id}`}><p key={card.cost}>{card.cost}</p></Link>
                            </div>
                        </li>
                    ))
                }
            </ul> */}