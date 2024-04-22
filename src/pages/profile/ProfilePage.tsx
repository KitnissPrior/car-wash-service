import Header from "../headers/Header";

export default function ProfilePage() {
    return (
        <>
            <Header/>
            <h2>Мои данные</h2>
            <div className="personal-info-list">
                <div>
                    <h3>ФИО</h3>
                    <p>Иванов Иван Иванович</p>
                </div>

                <div>
                    <h3>Номер телефона</h3>
                    <p>+7 (777) 777-77-77</p>
                </div>

                <div>
                    <h3>Почта</h3>
                    <p>email@example.com</p>
                </div>
            </div>

            <div className="buttons-section">
                <button>Изменить данные</button>
                <button>Изменить пароль</button>
                <button>История записей</button>
            </div>
        </>
    );
};