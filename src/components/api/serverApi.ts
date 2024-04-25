import ky from 'ky';

export const api = ky.create({
    prefixUrl: 'http://localhost:5000/', //это для json-сервера
    //prefixUrl: '/', //это для базы данных
 });