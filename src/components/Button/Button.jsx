

const Button = ({ children, className = '', ...props }) => {
    return (
        <>
            <button
                className={`px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-md transition ${className}`}
                {...props}
            >
                {children}
            </button>
        </>
    );
};

export default Button;