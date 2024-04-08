import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from "./components/pages/client/HomePage";
import OwnerHomePage from './components/pages/owner/OwnerHomePage';
import PageNotFound from "./components/pages/page_not_found/PageNotFound";
import './App.scss';
import { HeaderOwner } from './components/pages/headers/HeaderOwner';
import { CarwashAdding } from './components/pages/owner/CarwashAdding';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ServiceAdding } from './components/pages/owner/ServiceAdding';

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
            <Route element={<ServiceAdding/>} path='/service-adding'/>
        </Route>
    )
);

export default function App() {

    return (
        <>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
        </>
    );
}
