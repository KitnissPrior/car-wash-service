import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ServiceAddingForm } from './pages/owner/ServiceAddingForm'
import { FormProvider } from './pages/owner/CarwashFormContext';
import { ServiceAdding } from './pages/owner/ServicesForm';
import { HeaderOwner } from './pages/headers/HeaderOwner';
import { CarwashAdding } from './pages/owner/CarwashForm';
import { CarwashInfo } from './pages/owner/CarwashInfo';
import ProfilePage from "./pages/profile/ProfilePage";
import OwnerHomePage from './pages/owner/HomePage';
import PageNotFound from "./pages/ux/PageNotFound";
import HomePage from "./pages/client/HomePage";
import './App.scss';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            //после первой неудачной попытки сделать запрос появится сообщение об ошибке, и других запросов не будет
            retry: false
        }
    },
    queryCache: new QueryCache({
        onError: () => {
            //window.location.replace('/404');
        }
    })
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<HeaderOwner/>}></Route>
            <Route element={<HomePage/>} path='/'/>
            <Route element={<PageNotFound/>} path='*'/>
            <Route element={<OwnerHomePage/>} path='/owner'/>
            <Route element={<CarwashAdding/>} path='/carwash-adding'/>
            <Route element={<ServiceAdding/>} path='/carwash-services'/>
            <Route element={<CarwashInfo/>} path='/carwash-about/:id'/>
            <Route element={<ServiceAddingForm/>} path='/service-adding'/>
            <Route element={<ProfilePage/>} path={'/profile'}/>
        </Route>
    )
);

export default function App() {
    return (
        <>
            <FormProvider>
                  <QueryClientProvider client={queryClient}>
                      <RouterProvider router={router}/>
                  </QueryClientProvider>
            </FormProvider>
        </>
    );
}
