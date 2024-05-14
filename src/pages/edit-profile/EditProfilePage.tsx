import { Button, Input } from "antd";
import './EditProfilePage.scss';
import { useNavigate } from "react-router-dom";

// Сделать функциональность изменения данных прочего
export default function EditProfilePage() {
    const navigate = useNavigate();

    const toProfile = () => {
        navigate(-1);
    }

    return (
    <>
        <div className="edit-container">
            <h2 className="profile-page-title">Изменение данных</h2>
            <div className="edit-inputs">
                {/* Прикрутить позже выгрузку данных с БД, чтобы они в input висели*/}
                <Input type='text' className="edit-input" placeholder='ФИО' defaultValue='Иванов Иван Иванович'/>
                <Input type='text' className="edit-input" placeholder='Номер телефона' defaultValue='+7 (777) 777-77-77'/>
                <Input type='text' className="edit-input" placeholder='Почта' defaultValue='email@example.com'/>
            </div>

            <div className="buttons-section">
                <Button className="profile-page-button">Сохранить изменения</Button>
                <Button className="profile-page-button" onClick={toProfile}>Не сохранять изменения</Button>
            </div>
        </div>
    </>
    );
};
