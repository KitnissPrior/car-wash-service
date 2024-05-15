import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import EditPasswordPage from "./pages/edit-password/EditPasswordPage";
import { ServiceAddingForm } from './pages/owner/service-form/ServiceForm';
import EditProfilePage from "./pages/edit-profile/EditProfilePage";
import BookingPage from './pages/client/booking-page/BookingPage';
import { FormProvider } from './pages/owner/carwash-form/CarwashFormContext';
import OrderHistory from "./pages/client/order-history/OrderHistory";
import { CarwashAdding } from './pages/owner/carwash-form/CarwashForm';
import { CarwashInfo } from './pages/owner/carwash-info/CarwashInfo';
import ProfilePage from "./pages/profile/ProfilePage";
import LoginPage from "./pages/login/LoginPage";
import OwnerHomePage from './pages/owner/home-page/HomePage';
import PageNotFound from "./pages/ux/PageNotFound";
import HomePage from "./pages/client/home-page/HomePage";
import './App.scss';
import SignUpPage from "./pages/sign-up/SignUpPage";
import { PageHost } from "./pages/PageHost";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            //после первой неудачной попытки сделать запрос появится сообщение об ошибке, и других запросов не будет
            retry: false
        }
    },
    queryCache: new QueryCache({
        onError: () => {
            window.location.replace('/404');
        }
    })
});
localStorage.setItem('role', 'owner');
const role = localStorage.getItem('role');

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageHost />}>
            <Route index element={<LoginPage />} path="/login" />
            <Route element={<SignUpPage />} path="/sign-up" />
            {role === 'client'? (
                <>
                <Route element={<HomePage />} path="/">
                    <Route element={<OrderHistory />} path="/history" />
                    <Route element={<BookingPage />} path="/booking-page" />
                </Route>
                </>
            ) : (
                <Route path="/carwashes" element={<OwnerHomePage />}>
                <Route index element={<CarwashAdding />} />
                <Route path="carwash-adding" element={<CarwashAdding />} />
                <Route path="carwash-about/:id">
                    <Route index element={<CarwashInfo />} />
                    <Route path="service-adding" element={<ServiceAddingForm />} />
                </Route>
                </Route>
            )}

            <Route element={<ProfilePage />} path="/profile" />
            <Route element={<EditProfilePage />} path="/edit-profile" />
            <Route element={<EditPasswordPage />} path="/edit-password" />
            <Route element={<PageNotFound />} path="*" />
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
