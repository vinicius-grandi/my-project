import { useCount } from '../context/Count'

export default function Counter () {
    const {count, setCount} = useCount()

    return (
        <>
            <h2>O número está em <strong>{count}</strong></h2>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
        </>
    )
}