import './Navbar.css'
import logo2 from '../../Assets/logo2.jpeg.png'
import giga from'../../Assets/giga.jpeg'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Navbar = ({setsidebar, setinputValue}) =>{

    // console.log(setsidebar)

    const [inputText, setinputTexdt] = useState('') ;


    const clcickTosearch = () =>{

        setinputValue(inputText) ;
        setinputTexdt('')
        
    }

    return(
         <nav className='flex-div'>
            <div className="nav-left flex-div">
                <div className='menu-icon' onClick={()=>setsidebar(prev=>prev===false?true:false)}>
                    <span className="material-symbols-outlined">menu</span>
                </div>
              <Link to={'/'}><img className='logo' src = {logo2} alt="youtubelogo" /></Link>
            </div>

            
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                            <input type="text" placeholder='Search' value={inputText}  onChange={(e)=>setinputTexdt(e.target.value)}/>

                <div className='search-icon'>
                    <span class="material-symbols-outlined" onClick={clcickTosearch}>search</span>
                </div>
                </div>

                  <div className='mic-icon'>
                    <span class="material-symbols-outlined">mic</span>
                </div>
            </div>


            <div className="nav-right flex-div">

                <div className="notification-icon">
                    <span class="material-symbols-outlined">notifications</span>
                </div>

                <img className= 'user-profile' src={giga} alt="" />


            </div>
    </nav>
    
)
}

export default Navbar ;