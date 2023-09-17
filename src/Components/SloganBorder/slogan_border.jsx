import './slogan_border.css'
import {Link} from "react-router-dom";
import Sphere from './../../image/a098b156db2afba05854bc44692cde3d.gif'
function SloganBorder() {
    return (
        <div className={'slogan-border'}>
            <div className={'slogan-border-text'}>
                <p>Мы 100%</p>
                <span>Сделаем вам проект за&nbsp;<p>короткое время</p></span>
                <p className={'slogan'}>Ваш диплом или курсовая работа будут сделаны надежно и быстро</p>
                <Link className={'slogan-feedback'} to={"#"}>Получить консультацию</Link>
                <p>А вдруг не успеешь?</p>
            </div>
            <div>
                <img className={'sphere'} src={Sphere} alt={'sphere'}/>
            </div>
        </div>
    );
}
export default SloganBorder;