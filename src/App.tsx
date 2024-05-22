import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import EditPasswordPage from "./pages/edit-password/EditPasswordPage";
import { ServiceForm } from './pages/owner/service-form/ServiceForm';
import EditProfilePage from "./pages/edit-profile/EditProfilePage";
import BookingPage from './pages/client/booking-page/BookingPage';
import { FormProvider } from './pages/owner/carwash-form/CarwashFormContext';
import OrderHistory from "./pages/client/order-history/OrderHistory";
import { CarwashForm } from './pages/owner/carwash-form/CarwashForm';
import { CarwashInfo } from './pages/owner/carwash-info/CarwashInfo';
import ProfilePage from "./pages/profile/ProfilePage";
import LoginPage from "./pages/login/LoginPage";
import OwnerHomePage from './pages/owner/home-page/HomePage';
import PageNotFound from "./pages/ux/PageNotFound";
import HomePage from "./pages/client/home-page/HomePage";
import './App.scss';
import SignUpPage from "./pages/sign-up/SignUpPage";
import { PageHost } from "./pages/PageHost";
import CalendarAndScheduler from "./pages/test/calendar-and-scheduler/CalendarAndScheduler";
import { AuthProvider, useAuthContext } from './components/AuthContext';
import { useEffect } from 'react';

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
export default function App() {
    const { userData } = useAuthContext();
    console.log(userData.role)

    return (
        <AuthProvider>
            <FormProvider>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<PageHost />}>
                                <Route index element={<LoginPage />} />
                                <Route path="/sign-up" element={<SignUpPage />} />
                                <Route path="*" element={<PageNotFound />} />
                                {userData && userData.role == 'client'? (
                                    <>
                                        <Route path="/home">
                                            <Route index element={<HomePage />} />
                                            <Route path="/home/booking-page" element={<BookingPage />} />
                                            <Route path="/home/profile">
                                                <Route index element={<ProfilePage />} />
                                                <Route path="/home/profile/edit-profile" element={<EditProfilePage />} />
                                                <Route path="/home/profile/edit-password" element={<EditPasswordPage />} />
                                                <Route path="/home/profile/history" element={<OrderHistory />} />
                                            </Route>
                                        </Route>
                                    </>
                                ) : (
                                    <Route path="/carwashes">
                                        <Route index element={<OwnerHomePage />} />
                                        <Route path="/carwashes/carwash-adding" element={<CarwashForm />} />
                                        <Route path="/carwashes/carwash-about/:carwashId">
                                            <Route index element={<CarwashInfo />} />
                                            <Route path="/carwashes/carwash-about/:carwashId/service-adding" element={<ServiceForm />} />
                                        </Route>
                                        <Route path="/carwashes/profile">
                                            <Route index element={<ProfilePage />} />
                                            <Route path="/carwashes/profile/edit-profile" element={<EditProfilePage />} />
                                            <Route path="/carwashes/profile/edit-password" element={<EditPasswordPage />} />
                                        </Route>
                                    </Route>
                                )}
                                <Route path="/test-01" element={<CalendarAndScheduler />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </QueryClientProvider>
            </FormProvider>
        </AuthProvider>
    );
}
