import carLogo from '/src/images/car_logo.png'
import { useLoaderData } from 'react-router-dom';
import CardList from "../../cards/CardList";
import './HomePage.scss';

export default function HomePage() {
    const data = useLoaderData() as [];
    console.log(data);

    return (
        <>
            <div className="main-wrapper">
                <div className="upper-main">
                    <span className="upper-main-text">
                        <h1>
                            <strong>Бронируйте места на любой удобной вам автомойке!</strong>
                        </h1>
                    </span>
                    <img alt="Машина" src={carLogo}/>
                </div>

                <div className="main-search">
                    <span className='search-text'>
                        <h2>Доступные автомойки</h2>
                    </span>
                    <div className="searcher">
                        <input className='searcher-input' placeholder='Поиск по автомойкам' type='text'/>
                        <button className='searcher-button' type='button'>Найти</button>
                    </div>
                </div>

            </div>

            <div className="main-stations">
                <CardList data={data}/>
            </div>

        </>
    );
}