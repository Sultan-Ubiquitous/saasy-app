import React from 'react';


interface ButtonProps {
    onClick: () => void;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600" onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;