import './HomePage.scss';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom"
import { useAuthContext } from '../../../components/AuthContext';
import { useEffect } from 'react';

export default function HomePage() {
    const navigate = useNavigate();
    const {userData} = useAuthContext();
    
    useEffect(() => {}, [userData]);

    const toBookingPage = () => {
        navigate('/home/booking-page');
    }

    return (
        <div className='homepage-content'>
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
            <Button className="homepage-button" onClick={toBookingPage}>Забронировать место</Button>
        </div>
    );
}