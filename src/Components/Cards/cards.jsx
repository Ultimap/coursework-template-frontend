import "./cards.css"
import {Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import prod from "../../image/Card.png"
const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('http://192.168.0.107:8000')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);
    return (
        <>
        <div class = "Card_Product">
        <div className='Heading'>
            <h1>Наша продукция</h1>
        </div>
            <ul>
                <li>
                <Link to = "/item">
                    <img class ="product_img" src ={prod}/>
                    <p class = "product_name">АФУ специального назначения </p>
                </Link>

                    <div className="product_menu">

                    </div>
                </li>
            </ul>

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
        </div> 
        </>
     );
}
export default Cards;