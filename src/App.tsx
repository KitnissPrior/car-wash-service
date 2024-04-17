import { Form, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from "./components/pages/client/HomePage";
import OwnerHomePage from './components/pages/owner/HomePage';
import PageNotFound from "./components/pages/ux/PageNotFound";
import './App.scss';
import { HeaderOwner } from './components/pages/headers/HeaderOwner';
import { CarwashAdding } from './components/pages/owner/CarwashForm';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ServiceAdding } from './components/pages/owner/ServicesForm';
import { FormProvider } from './components/pages/owner/CarwashFormContext';
import { CarwashInfo } from './components/pages/owner/CarwashInfo';
import { ServiceAddingForm } from './components/pages/owner/ServiceAddingForm'

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
            <Route element={<ServiceAdding/>} path='/carwash-services'/>
            <Route element={<CarwashInfo/>} path='/carwash-about/:id'/>
            <Route element={<ServiceAddingForm/>} path='/service-adding'/>
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
