import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

	const getActive = ({isActive}) => isActive ? classes.active : classes.link;

	const Sidebar = () => {
	return (
		<div className={classes.sidebar}>
			<nav className={classes.nav}>
				<ul className={classes.nav_list}>
					<li className={classes.item}>
						<NavLink
							to="/profile"
							className={getActive}>Profile</NavLink>
					</li>
					<li className={classes.item}>
						<NavLink
							to="/dialogs"
							className={getActive}>
							Messages</NavLink>
					</li>
					<li className={classes.item}>
						<NavLink
							to="/news"
							className={getActive}>News</NavLink>
					</li>
					<li className={classes.item}>
						<NavLink
							to="/music"
							className={getActive}>Music</NavLink>
					</li>
				</ul>
			</nav>
			<div className={classes.setting}>
				<NavLink
					to="/setting"
					className={getActive}>Setting</NavLink>
			</div>
		</div>
	)
}
// добавить второй класс можно с помощью шаблонной строки и конкатенации

export default Sidebar;