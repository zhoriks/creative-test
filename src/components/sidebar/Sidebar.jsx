import * as React from 'react'

import icon1 from "../../image/icon-1.svg"
import icon2 from "../../image/icon-2.svg"
import icon3 from "../../image/icon-3.svg"
import icon4 from "../../image/icon-4.svg"
import './sidebar.css';

function Sidebar() {
    return (
        <section className="sidebar"> 
            <ul className="sidebar__list">
                <li className="sidebar__list-elem"><img className="sidebar__list-elem-icon" src={icon1} alt="Mark" width="15px" height="15px"></img>Элемент меню</li>
                <li className="sidebar__list-elem"><img className="sidebar__list-elem-icon" src={icon2} alt="Cloud" width="15px" height="15px"></img>Элемент меню</li>
                <li className="sidebar__list-elem"><img className="sidebar__list-elem-icon" src={icon3} alt="Add" width="15px" height="15px"></img>Элемент меню</li>
                <li className="sidebar__list-elem"><img className="sidebar__list-elem-icon" src={icon4} alt="Search" width="15px" height="15px"></img>Элемент меню</li>
            </ul>
        </section>
    );
}

export default Sidebar;