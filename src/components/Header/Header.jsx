import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className="container">
				<div className={classes.logotype}>
					<img className={classes.logo} src="/logo.png" alt="" />
					<p className={classes.logo_text}>My SN</p>
				</div>
			</div>
		</header>
	)
}

export default Header;