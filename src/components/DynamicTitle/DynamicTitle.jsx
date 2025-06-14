import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {

        const titles = {
            "/": "Home | Foodking",
            "/home": "Home | Foodking",
            "*": "Not Available | Foodking",

        };



        document.title = titles[location.pathname] || "Foodking";
    }, [location]);

    return null;
};

export default DynamicTitle;