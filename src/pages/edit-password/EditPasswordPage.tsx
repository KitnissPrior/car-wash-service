import Header from "../headers/Header";
import { Button } from "antd";

// Сделать функциональность изменения данных прочего
export default function EditPasswordPage() {

    return (
        <>
            <Header/>
            <div>
                <h2>Изменение пароля</h2>
                <div className="some-container">
                    {/* Прикрутить позже выгрузку данных с БД, чтобы они в input висели*/}
                    <input type='text' placeholder='Придумайте новый пароль'/>
                    <input type='text' placeholder='Повторите новый пароль'/>
                    <input type='text' placeholder='Введите старый пароль'/>
                </div>

                <div className="buttons-section">
                    <Button className="profile-page-button">Сохранить изменения</Button>
                    <Button className="profile-page-button">Не сохранять изменения</Button>
                </div>
            </div>
        </>
    );
};
