import { useAuth0 } from '@auth0/auth0-react';
import ky from 'ky';

const GetToken: React.FC = () => {
    const { getAccessTokenSilently } = useAuth0();

    const fetchProtectedResource = async () => {
        try {
            const token = await getAccessTokenSilently();

            const response = await ky.get('https://jsonplaceholder.typicode.com', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.error('Ошибка при получении токена или выполнении запроса:', e);
        };
    };

    return (
        <div>
            <button onClick={fetchProtectedResource}>Получить защищенный ресурс</button>
        </div>
    );
}

export default GetToken;