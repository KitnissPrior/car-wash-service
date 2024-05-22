import { Button, Input, Form } from "antd";
import './EditProfilePage.scss';
import { useNavigate } from "react-router-dom";
import { Person, RegisterFormProps } from "../../components/types";
import { usePersonAddMutation } from "../../components/api/userApi";
import { useAuthContext } from "../../components/AuthContext";

// Сделать функциональность изменения данных прочего
export default function EditProfilePage() {
    const navigate = useNavigate();
    const {userData, setUserData} = useAuthContext();

    const {mutateAsync: save} = usePersonAddMutation()


    const toProfile = () => {
        navigate(-1);
    }

    const handleSubmit = async (person: Person) => {
        await save(person);
        navigate(-1);
        const newUserData = {
            ...userData,
            ...person
        }
        setUserData(newUserData);
    };


    return (
    <>
        <div className="edit-container">
            <h2 className="profile-page-title">Изменение данных</h2>
            <Form
                onFinish={handleSubmit}>
                <div className="edit-inputs">
                    <Form.Item name="lastName"
                        rules={[{ required: true,  message: "Введите фамилию" }]}>
                        <Input className="edit-input" placeholder="Фамилия*"
                            defaultValue={userData?.lastName}/>
                    </Form.Item>
                    <Form.Item name="firstName"
                        rules={[{ required: true,  message: "Введите имя" }]}>
                        <Input className="edit-input" placeholder="Имя"
                            defaultValue={userData?.firstName}/>
                    </Form.Item>
                    <Form.Item name="fathersName">
                        <Input className="edit-input" placeholder="Отчество"
                            defaultValue={userData?.fathersName}/>
                    </Form.Item>
                    <Form.Item name="phoneNumber"
                        rules={[{ required: true,  message: "Это поле является обязательным" }, 
                        {min: 10, message: "Номер должен содержать 10 цифр"}]}>
                        <Input className="edit-input" placeholder="Номер телефона*" 
                            defaultValue={userData?.phoneNumber}/>
                    </Form.Item>
                    <Form.Item name="email">
                        <Input className="edit-input" placeholder="Почта"
                            defaultValue={userData?.email}/>
                    </Form.Item>
                </div>
                <div className="buttons-section">
                    <Form.Item>
                        <Button className="profile-page-button" htmlType="submit">Сохранить изменения</Button>
                    </Form.Item>
                    <Button className="profile-page-button" onClick={toProfile}>Не сохранять изменения</Button>
                </div>
            </Form>
        </div>
    </>
    );
};
