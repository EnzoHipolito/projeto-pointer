import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="bg-blue-500 w-full h-full">
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/registrar'}>Registrar</Link>
            </nav>
        </div>
    )
}
export default Header