import { Button } from "antd";
import './ProfilePage.scss';
import { useNavigate } from "react-router-dom";
import { ConfirmationPopup } from "../ux/ConfirmationPopup";
import { useState } from "react";
import { useAuthContext } from "../../components/AuthContext";
import { UserData } from "../../components/types";

export default function ProfilePage() {const navigate = useNavigate();
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    const {userData, setUserData} = useAuthContext();

    const handleEditProfile = () => {
        userData?.role === 'client' ? navigate('/profile/edit-profile/') 
            : navigate('/carwashes/profile/edit-profile/');
    }

    const handleEditPassword = () => {
        userData?.role === 'client' ? navigate('/profile/edit-password/') 
            : navigate('/carwashes/profile/edit-password/');
    }

    const handleCheckOrderHistory = () => {
        navigate('/profile/history/');
    }

    const handleExit = () => {
        setConfirmationVisible(false);
        setUserData({} as UserData);
        navigate('/');
    }

    const handleExitCancel = () => {
        setConfirmationVisible(false);
    }

    const showConfirmationPopup = () => {
        setConfirmationVisible(true);
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
                    <Button className="profile-page-button" onClick={handleEditProfile}>Изменить данные</Button>
                    <Button className="profile-page-button" onClick={handleEditPassword}>Изменить пароль</Button>
                    { userData?.role === 'client' ?
                        <Button className="profile-page-button" onClick={handleCheckOrderHistory}>История записей</Button> 
                        : <></>}
                    <Button className="profile-page-button" style={{backgroundColor: 'red', color: 'white'}} onClick={showConfirmationPopup}>Выйти</Button>
                </div>
                
                <ConfirmationPopup 
                    title="Вы уверены, что хотите выйти из аккаунта?"
                    handleOk={handleExit}
                    handleCancel={handleExitCancel}
                    visible={confirmationVisible}
                    okText="Да, выйти из аккаунта"
                    isAdditionalTextHidden = {true}
                    cancelText="Отмена"/>
            </div>
        </div>
    );
};