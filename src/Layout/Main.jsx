
import { Outlet, useLocation } from 'react-router-dom';

import DynamicTitle from '../components/DynamicTitle/DynamicTitle';
import Footer from '../components/Footer/Footer';
import CustomNavbar from '../components/Navbar/CustomNavbar';


const Main = () => {
    const location = useLocation();
    const hideHeaderFooter = ["/404", "*"];
    const shouldHideHeaderFooter = hideHeaderFooter.includes(location.pathname);
    return (
        <div>
            <DynamicTitle />
            {!shouldHideHeaderFooter && <CustomNavbar />}
            <Outlet />
            {!shouldHideHeaderFooter && <Footer />}

        </div>
    );
};

export default Main;