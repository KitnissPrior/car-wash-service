import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from "./components/pages/home_page/HomePage";
import OwnerHomePage from './components/pages/owner/OwnerHomePage';
import PageNotFound from "./components/pages/page_not_found/PageNotFound";
import './App.scss';
import axios from 'axios';
import { useState } from 'react';
import { HeaderOwner } from './components/header/HeaderOwner';
import { CarwashAdding } from './components/pages/owner/CarwashAdding';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'

// export const api = 'https://jsonplaceholder.typicode.com/';  // Фейковый api для прототипа

function GetAllItems() {
//     return axios.get(api + 'todos')
//         .then(response => {
//             return response.data;
//         })
//         .catch(error => {
//             console.error(error);
//             throw error;
//         });
}
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        //после первой неудачной попытки сделать запрос появится сообщение об ошибке, и других запросов не будет
        retry: false 
      }
    },
    queryCache: new QueryCache({
      onError: (error) => {
        window.location.replace('/404');
      }
    })
  })

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<HeaderOwner/>}></Route>
            <Route element={<HomePage/>} path='/'/>
            <Route element={<PageNotFound/>} path='*'/>
            <Route element={<OwnerHomePage/>} path='/owner'/>
            <Route element={<CarwashAdding/>} path='/carwash-adding'/>
        </Route>
    )
);

export default function App() {

    // axios.interceptors.response.use(
    //     config => {
    //         return config;
    //     },
    //     error => {
    //         if (error.response.status === 404) {
    //             window.location.replace('/404');
    //             return Promise.reject(error.response);
    //         }
    //     }
    // );

    return (
        <>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
        </>
    );
}
