import { defaultFormData, useFormData } from "../carwash-form/CarwashFormContext";
import { Link } from 'react-router-dom';

export const CarwashAddButton = () => {
    const {setFormData} = useFormData();
    
    const handleCardAdd = () => {
        setFormData(defaultFormData);
    }

    return (
        <div className="adding-button" onClick={handleCardAdd}>
            <Link className="adding-button-link" to='/carwashes/carwash-adding'>
                <img src="/src/images/plus.png" className='adding-button-image' alt="Кнопка" />
                Добавить автомойку
             </Link>
        </div>
    );
}