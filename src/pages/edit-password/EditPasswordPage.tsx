import { Button, Input } from "antd";
import '../edit-profile/EditProfilePage.scss';
import { useNavigate } from "react-router-dom";

// Сделать функциональность изменения данных прочего
export default function EditPasswordPage() {
    const navigate = useNavigate();

    const toProfile = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="edit-container">
                <h2 className="profile-page-title">Изменение пароля</h2>
                <div className="edit-inputs">
                    {/* Прикрутить позже выгрузку данных с БД, чтобы они в input висели*/}
                    <Input type='text' className="edit-input" placeholder='Введите старый пароль'/>
                    <Input type='text' className="edit-input" placeholder='Придумайте новый пароль'/>
                    <Input type='text' className="edit-input" placeholder='Повторите новый пароль'/>
                </div>

                <div className="buttons-section">
                    <Button className="profile-page-button">Сохранить изменения</Button>
                    <Button className="profile-page-button" onClick={toProfile}>Не сохранять изменения</Button>
                </div>
            </div>
        </>
    );
};
