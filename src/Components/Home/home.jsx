import './home.css'
import AboutUs from '../../image/Ellipse 1.png'
import project from '../../image/Ellipse 1(1).png'
import { Link } from 'react-router-dom';
// import background from '../../image/back.png'
function Home() {
    return (
        <div className={'text'}>
            <div className='name'>
                {/* <img src={background}/> */}
                <h1>СОНИИР</h1>
                <h2>Самарский филиал ФГБУ НИИ Радио</h2>
            </div>
            <div className='ellipse'>
                <Link to = "/aboutUs">
                <img className='aboutUs' src={AboutUs}/>
                <p>О НАС</p>
                </Link>
                <Link to = "/cards">
                    <div className='novigation'>
                        <img className='project' src={project}/>
                        <p>ПРОДУКЦИЯ</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Home;