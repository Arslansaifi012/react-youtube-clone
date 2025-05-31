


import './Sidebar.css'

import stark1 from '../../Assets/stark1.jpeg'
import stark2 from '../../Assets/stark2.jpeg'
import stark3 from '../../Assets/stark3.jpeg'
import stark4 from '../../Assets/stark4.jpeg'





const Sidebar = ({sidebars, category, setcategory}) =>{


    return (
        <div className={`sidebars ${sidebars?"":"small-sidebar"}`}>
            <div className="sortcut-links">

                <div className={`side-links ${category===0?"active":""}`} onClick = {()=>setcategory(0)}>
                    <span class="material-symbols-outlined">home</span>
                    <p>Home</p>
                </div>

                      <div className={`side-links ${category===20?"active":""}`} onClick = {()=>setcategory(20)}>
                   <span class="material-symbols-outlined">stadia_controller</span>
                    <p>Gaming</p>
                </div>

                      <div className={`side-links ${category===2?"active":""}`} onClick = {()=>setcategory(2)}>
                  <span class="material-symbols-outlined">local_shipping</span>
                    <p>Automobiles</p>
                </div>

                      <div className={`side-links ${category===17?"active":""}`} onClick = {()=>setcategory(17)}>
                    <span class="material-symbols-outlined">sports_soccer</span>
                    <p>Sport</p>
                </div>

                      <div className={`side-links ${category===24?"active":""}`} onClick = {()=>setcategory(24)}>
                 <span class="material-symbols-outlined">tv</span>
                    <p>Entertainment</p>
                </div>

                      <div className={`side-links ${category===28?"active":""}`} onClick = {()=>setcategory(28)}>
                    <span class="material-symbols-outlined">switch_access_shortcut</span>
                    <p>Technology</p>
                </div>

                      <div className={`side-links ${category===10?"active":""}`} onClick = {()=>setcategory(10)}>
                    <span class="material-symbols-outlined">library_music</span>
                    <p>Music</p>
                </div>

                     <div className={`side-links ${category===22?"active":""}`} onClick = {()=>setcategory(22)}>
                    <span class="material-symbols-outlined">newsmode</span>
                    <p>Blog's</p>
                </div>

                      <div className={`side-links ${category===25?"active":""}`} onClick = {()=>setcategory(25)}>
                    <span class="material-symbols-outlined">language</span>
                    <p>New's</p>
                </div>

                <hr />
            </div>

            <div className="subcribed-list">
                <h3>Subcribed</h3>

                <div className="side-links" onClick = {()=>setcategory}>
                    <img src= {stark1} alt="" />
                    <p>Tony Stark</p>
                </div>

                  <div className="side-links" onClick = {()=>setcategory}>
                    <img src= {stark2} alt="" />
                    <p>Genius </p>
                </div>

                  <div className="side-links">
                    <img src= {stark3} alt="" />
                    <p>billionair</p>
                </div>

                  <div className="side-links">
                    <img src= {stark4} alt="" />
                    <p>philophist Stark</p>
                </div>


            </div>

        </div>
    )
}

export default Sidebar ;