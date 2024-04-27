import Header from "../headers/Header";
import { Button } from "antd";

// Сделать функциональность изменения данных прочего
export default function EditProfilePage() {

    return (
      <>
          <Header/>
          <div>
              <h2>Изменение данных</h2>
              <div className="some-container">
                  {/* Прикрутить позже выгрузку данных с БД, чтобы они в input висели*/}
                  <input type='text' placeholder='ФИО' defaultValue='Адидасов Адидас Адидасович'/>
                  <input type='text' placeholder='Номер телефона' defaultValue='8 (800) 555-35-35'/>
                  <input type='text' placeholder='Почта' defaultValue='email@address.com'/>
              </div>

              <div className="buttons-section">
                  <Button className="profile-page-button">Сохранить изменения</Button>
                  <Button className="profile-page-button">Не сохранять изменения</Button>
              </div>
          </div>
      </>
    );
};
