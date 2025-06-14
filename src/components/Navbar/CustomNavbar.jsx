
import { Link } from 'react-router-dom';
import bgImage from '../../assets/hero-bg-3.jpg';
const CustomNavbar = () => {
    return (
        <div
            className="navbar shadow-sm bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bgImage})`,

            }}
        >
           
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Link</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            

        </div>
    );
};

export default CustomNavbar;