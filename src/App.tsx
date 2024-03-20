import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from "./components/header/Header";
import HomePage from "./components/pages/home_page/HomePage";
import PageNotFound from "./components/pages/page_not_found/PageNotFound";
import { useState } from 'react';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Header/>}>
            <Route element={<HomePage/>} path='/'/>
            <Route element={<PageNotFound/>} path='*'/>
        </Route>
    )
);

export default function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}
