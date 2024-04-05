import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from "./components/header/Header";
import HomePage from "./components/pages/home_page/HomePage";
import OwnerLK from './components/pages/owner_lk/OwnerLK';
import PageNotFound from "./components/pages/page_not_found/PageNotFound";
import './App.scss';
import axios from 'axios';
import { useState } from 'react';
import { HeaderOwner } from './components/header/HeaderOwner';
import { CarwashAdding } from './components/pages/owner_lk/CarwashAdding';

export const api = 'https://jsonplaceholder.typicode.com/';  // Фейковый api для прототипа

function GetAllItems() {
    return axios.get(api + 'todos')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<Header/>} loader={GetAllItems}></Route>
            <Route element={<HeaderOwner/>} loader={GetAllItems}></Route>
            <Route element={<HomePage/>} path='/' loader={GetAllItems}/>
            <Route element={<PageNotFound/>} path='*'/>
            <Route element={<OwnerLK/>} path='/owner'/>
            <Route element={<CarwashAdding/>} path='/carwash-adding'/>
        </Route>
    )
);

export default function App() {

    axios.interceptors.response.use(
        config => {
            return config;
        },
        error => {
            if (error.response.status === 404) {
                window.location.replace('/404');
                return Promise.reject(error.response);
            }
        }
    );

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}
