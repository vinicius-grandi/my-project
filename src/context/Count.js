import { createContext, useContext, useState } from 'react';

const CountContext = createContext();

export default function CountProvider({ children }) {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider 
        value={{
            count,
            setCount,
        }}>{children}</CountContext.Provider>
    );
}

export function useCount() {
    const context = useContext(CountContext);
    if (context === undefined) throw new Error('lol')
    const { count, setCount } = context;
    console.log(count)
    console.log(setCount)
    return { count, setCount };
}