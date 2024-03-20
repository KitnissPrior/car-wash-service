import carLogo from '/src/images/car_logo.png'
import { useLoaderData } from 'react-router-dom';

export default function HomePage() {
    const data = useLoaderData() as [];

    return (
        <div className="main-wrapper">
            <div className="main">
                <span className="main-text">
                    <h1>Бронируйте места на любой удобной вам автомойке!</h1>
                </span>
                <img alt="Машина" src={carLogo}/>
            </div>

            <div className="content-wrapper">
                <div className="content">
                    <span className='search-text'>
                        <h2>Доступные автомойки</h2>
                    </span>
                    <div className="search-form">
                        <input className='search' placeholder='Поиск по автомойкам' type='text'/>
                        <button className='search-button' type='button'>Найти</button>
                    </div>

                </div>
            </div>


        </div>
    );
}