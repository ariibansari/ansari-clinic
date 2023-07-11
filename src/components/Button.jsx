import React from 'react'
import '../styles/Button.css'

const Button = ({ text, style, type, onClick, className, value, icon, iconPlacement = 'before-text', gap, variant = "light", size="md" }) => {
    return (
        <button
            style={{ ...style, gap: gap }}
            className={`button ${type} ${className} ${iconPlacement} ${variant} ${size}`}
            onClick={onClick}
            value={value}
        >
            {iconPlacement === 'before-text' && icon}
            {type !== 'icon' && text}
            {iconPlacement === 'after-text' && icon}
        </button>
    )
}

export default Button