import { useCount } from '../context/Count'

export default function Mirror () {
    const {count} = useCount()

    return (
        <>
            <h2>O número está em <strong>{count}</strong></h2>
        </>
    )
}