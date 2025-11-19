import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function RecoverPassword() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-150 w-130 bg-gray-100 rounded-4xl shadow-2xl">
                <div className="w-full h-45 bg-green-500 rounded-t-4xl flex justify-center items-center">
                    <div className='flex flex-row gap-25'>
                        <FontAwesomeIcon icon={faUser} className='text-7xl text-white' />
                        <div>
                            <p className='text-4xl text-white'>Bem vindo!</p>
                            <span className='text-white'>Recupere sua Senha</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <p className='text-2xl'>Digite seu Usuario:</p>
                    <input type="text" id='username' placeholder='Usuario' className='bg-white text-[20px] p-1 rounded-md' required/>
                    <p className='mt-10 text-2xl'>Digite sua Senha:</p>
                    <input type="password" id='password' placeholder='Senha' className='bg-white text-[20px] p-1 rounded-md' />
                    <button className='mt-10 text-[18px] w-[110px] h-11 rounded-2xl duration-300 cursor-pointer border bg-[#eff5ff] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white hover:shadow-[0_0_0_5px_#3b83f65f]'>Login</button>
                    <span><Link to={'/RecoverPassword'} className='text-gray-400 text-[13px] hover:text-blue-400 mt-1'>Esqueceu sua Senha?</Link></span>
                </div>
            </div>
        </div>
    )
}

export default RecoverPassword