
import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";


const Header = ()=>{

    const [menu, setMenu] = useState(false); 
    
    const handleMenuClick = (e) =>{ 
        e.preventDefault(); 
        setMenu(!menu)

    }
    const navigate = useNavigate()

    const handleSignOut = (e) =>{ 
        e.preventDefault(); 
        localStorage.removeItem('accessToken')
        navigate('/')
    }

    return (
        <>
           <header className="bg-[#086558]"> 
             <div className="container">
                <div className="flex flex-row justify-between py-[1.4rem] items-center">
                <div className="logo">
                   <img src="./assets/img/logodb.png" alt ="logo" className="w-[10rem]"/>
                </div>
                <div className={`${menu  ? 'bg-[#FDFDF8] absolute top-[4.7rem] h-auto left-0': 'hidden'}`}> 
                   <nav className='flex flex-col gap-[1rem] shadow-[1rem] rounded-sm p-[2rem]'> 
                    <Link to='/dashboard' className='font-[Lato] text-[.9rem] text-[#31312C]'>Home</Link>
                    <Link to='/farm' className='font-[Lato] text-[.9rem] text-[#31312C]'>Farm</Link>
                    <Link to='/rd' className='font-[Lato] text-[.9rem] text-[#31312C]'>Weather Forecast</Link>
                    <Link to='/' className='font-[Lato] text-[.9rem] text-[#31312C]'>Soil Condition</Link>
                    <Link to='/' className='font-[Lato] text-[.9rem] text-[#31312C]'>Recommendation</Link>
                    <Link to='/' className='font-[Lato] text-[.9rem] text-[#31312C]'>Statistics</Link>
                    <button className='font-[Lato] text-[.9rem] text-[#31312C]' onClick={handleSignOut}> Sign Out</button>
                   </nav>

                </div>
                <div>
                <IoMenuSharp size={30} className="text-white cursor-pointer"
                onClick={handleMenuClick} />
                </div>
                </div>
                
                
                
             </div>
            </header> 
        
        </>
    )
}


export default Header