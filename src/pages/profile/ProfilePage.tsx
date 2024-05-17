import { Button } from "antd";
import './ProfilePage.scss';
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {const navigate = useNavigate();
    const editProfilePage = () => {
        navigate('/edit-profile/');
    }

    const editPassword = () => {
        navigate('/edit-password/');
    }

    const checkOrderHistory = () => {
        navigate('/history/');
    }

    return (
        <div>
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
                    <Button className="profile-page-button" onClick={editProfilePage}>Изменить данные</Button>
                    <Button className="profile-page-button" onClick={editPassword}>Изменить пароль</Button>
                    <Button className="profile-page-button" onClick={checkOrderHistory}>История записей</Button>
                </div>
            </div>
        </div>
    );
};