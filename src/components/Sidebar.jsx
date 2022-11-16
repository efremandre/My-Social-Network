import React from 'react';
import classes from './Sidebar.module.css';


const Sidebar = () => {
	return (
		<div className={classes.sidebar}>
			<nav className={classes.nav}>
				<ul className={classes.nav_list}>
					<li className={classes.item}><a className={classes.link} href="#">Profile</a></li>
					<li className={classes.item}><a className={classes.link} href="#">Messages</a></li>
					<li className={classes.item}><a className={classes.link} href="#">News</a></li>
					<li className={classes.item}><a className={classes.link} href="#">Music</a></li>
				</ul>
			</nav>
			<div className={classes.setting}>
				<a className={`${classes.setting_link} ${classes.active}`} href="#">Setting</a>
			</div>
		</div>
	)
}

// добавить второй класс можно с помощью шаблонной строки и конкатенации

export default Sidebar;