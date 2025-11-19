import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-150 w-130 bg-gray-100 rounded-4xl">
                <div className="w-full h-45 bg-blue-500 rounded-t-4xl flex justify-center items-center">
                    <div className='rounded-[50%]'>
                        <FontAwesomeIcon icon={faUser} className='border-2 text-5xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login