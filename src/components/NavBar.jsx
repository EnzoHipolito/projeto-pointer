import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="bg-blue-500 w-65 h-screen">
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/registrar'}>Registrar</Link>
            </nav>
        </div>
    )
}
export default NavBar