import React from 'react'

const Button = ({
    variant = "filled",
    type = 'primary',
    children,
    className = '',
    ...props
}) => {
    const buttonStyles = {
        filled:{
            primary: "bg-blue-600 text-white hover:bg-blue-700 rounded-md",
            secondary: "bg-gray-300 text-blue-800 hover:bg-gray-400 rounded-md",
            success: "bg-green-600 text-white hover:bg-green-700 rounded-md",
            danger: "bg-pink-500 text-white hover:bg-pink-700 rounded-md",
            warning: "bg-yellow-500 text-white hover:bg-yellow-600 rounded-md",
            info: "bg-cyan-500 text-white hover:bg-cyan-600 rounded-md",
            light: "bg-gray-200 text-black hover:bg-gray-300 rounded-md",
            dark: "bg-black text-white hover:bg-gray-900 rounded-md"
        },
        outline:{
            primary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-100 rounded-md',
            secondary: 'border-2 border-gray-200 text-blue-800 hover:bg-gray-100 rounded-md',
            success: 'border-2 border-green-600 text-green-600 hover:bg-green-100 rounded-md',
            danger: 'border-2 border-pink-500 text-pink-500 hover:bg-red-100 rounded-md',
            warning: 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-100 rounded-md',
            info: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-100 rounded-md',
            light: 'border-2 border-gray-300 text-gray-300 hover:bg-gray-100 rounded-md',
            dark: 'border-2 border-black text-black hover:bg-gray-900 rounded-md'
        },
        rounded:{
            primary: 'bg-blue-600 text-white rounded-full hover:bg-blue-700',
            secondary: 'bg-gray-300 text-blue-800 rounded-full hover:bg-blue-400',
            success: 'bg-green-600 text-white rounded-full hover:bg-green-700',
            danger: 'bg-pink-500 text-white rounded-full hover:bg-pink-600',
            warning: 'bg-yellow-500 text-white rounded-full hover:bg-yellow-600',
            info: 'bg-cyan-500 text-white rounded-full hover:bg-cyan-600',
            light: 'bg-gray-200 text-black rounded-full hover:bg-gray-400',
            dark: 'bg-black text-white rounded-full hover:bg-gray-900'
        }
    };
  return (
    <button className={`font-medium transition-all duration-200 px-10 py-3
        ${buttonStyles[variant]?.[type] || ''} 
        ${className || ""}`}
        {...props}
      >
        {children}
      </button>
      
  );
};

export default Button;