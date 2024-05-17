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
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignUpPage />} path="/sign-up" />
            <Route element={<PageNotFound />} path="*" />
            {role === 'client'? (
                <>
                <Route path="/">
                    <Route index element={<HomePage />}/>
                    <Route element={<BookingPage />} path="/booking-page" />
                    <Route path="/profile">
                        <Route index element={<ProfilePage />}/>
                        <Route element={<EditProfilePage />} path="/profile/edit-profile" />
                        <Route element={<EditPasswordPage />} path="/profile/edit-password" />
                        <Route element={<OrderHistory />} path="/profile/history" />
                    </Route>
                </Route>
                </>
            ) : (
                <Route path="/carwashes">
                    <Route index element={<OwnerHomePage />}/>
                    <Route path="/carwashes/carwash-adding" element={<CarwashAdding />} />
                    <Route path="/carwashes/carwash-about/:id">
                        <Route index element={<CarwashInfo />} />
                        <Route path="/carwashes/carwash-about/:id/service-adding" element={<ServiceAddingForm />} />
                    </Route>
                    <Route path="/carwashes/profile">
                        <Route index element={<ProfilePage />}/>
                        <Route element={<EditProfilePage />} path="/carwashes/profile/edit-profile" />
                        <Route element={<EditPasswordPage />} path="/carwashes/profile/edit-password" />
                    </Route>
                </Route>
            )}

            
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
