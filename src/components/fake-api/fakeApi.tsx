import ky from 'ky';

// Фейковый api для прототипа, потому что у меня БД на запускается
export const fakeAPI = ky.create({
    prefixUrl: 'https://jsonplaceholder.typicode.com'
});