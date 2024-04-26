import ky from 'ky';

export const api = ky.create({
    //prefixUrl: 'http://localhost:3000/', //это для json-сервера
    prefixUrl: '/', //это для базы данных
 });