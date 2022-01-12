import { useState } from 'react'

export const Dropdown = ({ title, options, setPokemon }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelection = option => {
        setIsOpen(false)  
        setPokemon(option)          
    }

    return (
        <div className='c-dropdown'>
            <button onClick={() => setIsOpen(!isOpen)}>{title}</button>

            {isOpen && (
                <ul role='menu'>
                    {options.map(option => (
                        <li key={option} role='menuitem' onClick={() => handleSelection(option)}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}