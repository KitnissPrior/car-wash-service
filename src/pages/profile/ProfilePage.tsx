import Header from "../headers/Header";
import './ProfilePage.scss'
import { Button} from "antd";

export default function ProfilePage() {
    return (
        <div>
            <Header/>
            <div className="profile-page">
                <h2 className="profile-page-title">Мои данные</h2>
                <div className="personal-info-list">
                    <div className="profile-page-list-item">
                        <h3>ФИО</h3>
                        <p>Иванов Иван Иванович</p>
                    </div>

                    <div className="profile-page-list-item">
                        <h3>Номер телефона</h3>
                        <p>+7 (777) 777-77-77</p>
                    </div>

                    <div className="profile-page-list-item">
                        <h3>Почта</h3>
                        <p>email@example.com</p>
                    </div>
                </div>

                <div className="buttons-section">
                    <Button className="profile-page-button">Изменить данные</Button>
                    <Button className="profile-page-button">Изменить пароль</Button>
                    <Button className="profile-page-button">История записей</Button>
                </div>
            </div>
        </div>
    );
};