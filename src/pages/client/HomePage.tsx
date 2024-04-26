import { useLoaderData } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import carLogo from '/src/images/car_logo.png'
import CardList from "../owner/CardList";
import Header from "../headers/Header";
import './HomePage.scss';
import { Button } from 'antd';

export default function HomePage() {
    const data = useLoaderData() as [];
    console.log(data);

    return (
        <div className='homepage-content'>
            <Header></Header>
            <img className='main-image1' alt="Машина" src='./src/images/car2.png'/>
            <div className="main-wrapper">
                    <span className="upper-main-text">
                        <h1>
                            Бронируйте места на любой удобной вам автомойке!
                        </h1>
                    </span>
                </div>
                <img className='main-image2' alt="Машина" src='./src/images/car_logo.png'/>
                <img className='main-image3' alt="Машина" src='./src/images/car3.png'/>
                <Button className="homepage-button">Забронировать место</Button>
        </div>
    );
}