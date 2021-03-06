/* eslint-disable @next/next/no-img-element */
import {AiFillGithub,AiFillLinkedin,AiFillYoutube,} from 'react-icons/ai'
import { GoLocation  } from 'react-icons/go'
import { GiTie  } from 'react-icons/gi'
import { useTheme } from 'next-themes'
const Sidebar = () => {
    const {theme,setTheme} = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light"?"dark":"light");
    };
    return (
        <div>
            {/* https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg */}
            <img src="/poto.jpeg"alt="user avatar"className="w-32 h-32 mx-auto rounded-full"
             />
            <h3 className="my-4 text-2xl tracking-wider text-3xlfont-medium font-Lobster TextTyping">
                <span className='text-green'>Andika </span>
                bagus pambudi
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
                Front-end Mobile || Web 
            </p>
            <a className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200" href="" download="name">
                <GiTie className="w-6 h-6"/> Download Resume
            </a>
            {/* //sosial icon */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="https://www.youtube.com/">
                    <AiFillYoutube className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href='https://www.linkedin.com/in/andika-dika-3b26711ab/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://github.com/Dhika090">
                    <AiFillGithub className="w-6 h-6 cursor-pointer"/>
                </a>
            </div>
            
            {/* Contacts */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" 
             style={{marginLeft: '-1rem',marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation /> 
                    <span>Jakarta, Indonesia</span>
                </div>
                <p className='my-2'>Nyes6953@gmail.com</p>
                <p className='my-2'>+62895383110825</p>
            </div>

            
                {/* <button onClick={changeTheme}
                 className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-400'>
                    Toggle Theme
                </button> */}
                <div className="flex items-center justify-center space-x-2"
                style={{marginLeft: '-1rem',marginRight:'-1rem'}}>
                    <span className="text-sm text-gray-800 ">Dark</span>
                    <div>
                        <input type="checkbox" name="" id="toggle" className="hidden" />
                        <label htmlFor="toggle">
                            <div onClick={changeTheme} className="flex items-center h-5 p-1 bg-gray-300 rounded-full w-9">
                                <div className="w-4 h-4 duration-300 ease-in-out transform bg-white rounded-full shadow-md toggle-dot" ></div>
                            </div>
                        </label>
                    </div>
                    <span className="text-sm text-gray-400">Light</span>
                   
                </div>
                {/* Email button */}
                
                <button  className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-400 focus:outline-none'  onClick={() =>window.open('mailto:nyes6953@gmail.com')}>Email me
                </button>
               
        </div>
    )
}
export default Sidebar