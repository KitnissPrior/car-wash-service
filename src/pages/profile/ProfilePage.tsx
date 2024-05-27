import { Button } from "antd";
import './ProfilePage.scss';
import { useNavigate } from "react-router-dom";
import { ConfirmationPopup } from "../ux/ConfirmationPopup";
import { useState } from "react";
import { useAuthContext } from "../../components/AuthContext";
import { UserData } from "../../components/types";
import { usePersonDataQuery } from "../../components/api/userApi";

export default function ProfilePage() {const navigate = useNavigate();
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    const {userData, setUserData} = useAuthContext();
    const person = usePersonDataQuery(userData?.personId).data;

    const handleEditProfile = () => {
        console.log(userData?.role);
        userData?.role == 'client' ? navigate('/home/profile/edit-profile/') 
            : navigate('/carwashes/profile/edit-profile/');
    }

    const handleEditPassword = () => {
        console.log(userData?.role);
        userData?.role == 'client' ? navigate('/profile/edit-password/') 
            : navigate('/carwashes/profile/edit-password/');
    }

    const handleCheckOrderHistory = () => {
        navigate('/home/profile/history/');
    }

    const handleExit = () => {
        setConfirmationVisible(false);
        setUserData({} as UserData);
        localStorage.clear();
        navigate('/');
    }

    const handleExitCancel = () => {
        setConfirmationVisible(false);
    }

    const showConfirmationPopup = () => {
        setConfirmationVisible(true);
    }

    const name = person?.lastName + ' ' + person?.firstName  + (person?.fathersName ? ' ' + person?.fathersName : '');

    return (
        <div>
            <div className="profile-page">
                <h2 className="profile-page-title">Мои данные</h2>
                <div className="personal-info-list">
                    <div className="profile-page-list-item">
                        <h3>ФИО</h3>
                        <p>{name}</p>
                    </div>

                    <div className="profile-page-list-item">
                        <h3>Номер телефона</h3>
                        <p>{person?.phoneNumber}</p>
                    </div>

                    <div className="profile-page-list-item">
                        <h3>Почта</h3>
                        <p>{person?.email}</p>
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