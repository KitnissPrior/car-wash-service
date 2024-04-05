import { AutoCenter } from "antd-mobile"

export default function PageNotFound() {
    return (
        <div style={{padding: '200px'}}>
            <AutoCenter>
                <h1>Ошибка 404</h1>
                <h2>Страница не найдена</h2>
                <p>Выпейте чаю</p>
            </AutoCenter>
        </div>
    )
}