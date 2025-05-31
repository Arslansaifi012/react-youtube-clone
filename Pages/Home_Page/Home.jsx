
import './Home.css'

import Sidebar from '../../Compnents/sidebar/Sidebar'
import Feed from '../../Compnents/Feed/Feed'
import { useState } from 'react'

const Home = ({sidebars, inputValue}) =>{

    const [category, setcategory] = useState(0) ;
    

    return <>

    <Sidebar sidebars = {sidebars} category = {category}  setcategory = {setcategory}/>

    <div className={`container ${sidebars?"":"large-container"}`}>
        <Feed category = {category} inputValue = {inputValue} />
    </div>

    </>
}

export default Home;