import { useNavigate } from "react-router-dom"
import '../style.css'
const First = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-first">
                <h3 className="title">Home Page</h3>
                <button onClick={() => navigate('/about')} >Peminjam</button>
                <button onClick={() => navigate('/book')} >Buku</button>
            </div>
        </>
    )
}
export default First