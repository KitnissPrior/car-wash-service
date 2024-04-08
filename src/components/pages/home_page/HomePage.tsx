import carLogo from '/src/images/car_logo.png'
import { useLoaderData } from 'react-router-dom';
import CardList from "../../cards/CardList";
import './HomePage.scss';
import Header from "../../header/Header";

export default function HomePage() {
    const data = useLoaderData() as [];
    console.log(data);

    return (
        <div className='homepage-content'>
            <Header></Header>
            <div className="main-wrapper">
                <div className="upper-main">
                    <span className="upper-main-text">
                        <h1>
                            Бронируйте места на любой <br /> удобной вам автомойке!
                        </h1>
                    </span>
                </div>
                <img className='main-image' alt="Машина" src='./src/images/car2.png'/>
            </div>
        </div>
    );
}