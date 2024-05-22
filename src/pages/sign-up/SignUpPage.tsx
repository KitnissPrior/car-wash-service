import { Input, Button, Form } from "antd";
import {useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Select } from 'antd';
import { useUserAddMutation, useRolesQuery, usePersonAddMutation } from "../../components/api/userApi";
const { Option } = Select;
import { User, RegisterFormProps } from "../../components/types";
import { useAuthContext } from "../../components/AuthContext";

export default function SignUpPage() {
    const navigate = useNavigate();
    const roles =  useRolesQuery().data;
    const [error, setError] = useState("");
    const [role, setRole] = useState("");
    const [formData, setFormData] = useState<RegisterFormProps | null>(null);

    const {userData, setUserData} = useAuthContext();

    const { mutateAsync: savePersonData } = usePersonAddMutation()

    const handleUserSuccessAdd = async (addedUser: User) => {
        const newUserData = {
            userId: addedUser?.userId,
            login: addedUser?.login,
            roleId: addedUser?.roleId,
            personId: addedUser?.personId,
            firstName: formData?.firstName,
            lastName: formData?.lastName,
            fathersName: formData?.fathersName,
            email: formData?.email,
            phoneNumber: formData?.phoneNumber,
            password: formData?.password,
            role: role
        }

        setUserData(newUserData);

        const newPerson = {
            personId: addedUser?.personId,
            firstName: formData?.firstName,
            lastName: formData?.lastName,
            fathersName: formData?.fathersName,
            email: formData?.email,
            phoneNumber: formData?.phoneNumber,
        }
        
        //localStorage.setItem('userName', formData?.firstName ?? '');
        //localStorage.setItem('role', role ?? '');
        
        await savePersonData(newPerson);
    }

    const { mutateAsync: saveUser } = useUserAddMutation(handleUserSuccessAdd);

    const onSubmit = async (values: RegisterFormProps) => {
        if (values.password !== values.confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        setFormData(values);

        const userRole = roles?.filter(r => r.roleName == role)[0];

        const newUser: User = {
            roleId: userRole?.roleId,
            login: values.email + ' ' + values.phoneNumber,
            password: values.password,
        };

        setError(""); // Сброс ошибки перед отправкой данных
        await saveUser(newUser);

        userRole?.roleName === 'client'? navigate("/home") : navigate("/carwashes/")
    };

    useEffect(() => {}, [role]);
    
    const handleRoleChange = (value : string) => {
        setRole(value);
      };

    return (
        <>
            <h2>Зарегистрироваться</h2>
            <Form
                title={"Зарегистрироваться"}
                onFinish={onSubmit}>
                <Form.Item name="phoneNumber"
                    rules={[{ required: true,  message: "Введите номер телефона" }, 
                    {min: 10, message: "Номер должен содержать 10 цифр"}]}>
                    <Input className="input" placeholder="Номер телефона*" />
                </Form.Item>
                <Form.Item name="email">
                    <Input className="input" placeholder="Почта"/>
                </Form.Item>
                <Form.Item name="lastName"
                    rules={[{ required: true,  message: "Введите фамилию" }]}>
                    <Input className="input" placeholder="Фамилия*"/>
                </Form.Item>
                <Form.Item name="firstName"
                    rules={[{ required: true,  message: "Введите имя" }]}>
                    <Input className="input" placeholder="Имя"/>
                </Form.Item>
                <Form.Item name="fathersName">
                    <Input className="input" placeholder="Отчество"/>
                </Form.Item>
                <Form.Item name="role"
                    rules={[{ required: true,  message: "Выберите роль" }]}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Выберите роль"
                        optionFilterProp="children"
                        onChange={handleRoleChange}
                        >
                        <Option value="client">Клиент</Option>
                        <Option value="owner">Владелец автомойки</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="password"
                    rules={[{ required: true, message: "Введите пароль" }]}>
                    <Input.Password className="input" placeholder="Пароль"/>
                </Form.Item>
                <Form.Item name="confirmPassword"
                    rules={[
                        { required: true, message: "Подтвердите пароль" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!getFieldValue("password")) {
                                    return Promise.resolve();
                                }
                                if (value && value!== getFieldValue("password")) {
                                    return Promise.reject(new Error("Пароли не совпадают"));
                                }
                                return Promise.resolve();
                            },
                        }),
                    ]}>
                    <Input.Password className="input" placeholder="Подтвердите пароль"/>
                </Form.Item>
                {error && <p>{error}</p>}
                <Form.Item>
                    <Button className="profile-page-button" htmlType="submit">Зарегистрироваться</Button>
                </Form.Item> 
            </Form>
                <NavLink to="/">Есть аккаунт? Войдите!</NavLink>
        </>
    );
};