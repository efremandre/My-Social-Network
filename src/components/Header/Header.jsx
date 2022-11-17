import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className="container">
				<div className={classes.logotype}>
					<img className={classes.logo} src="https://sun9-59.userapi.com/impg/sMJ1CkzakaZj7-Tj4k5hLgoLLsQft9QKEKOilQ/aplm6Ot4JYo.jpg?size=200x285&quality=96&sign=4a75eaaf68f2342ed9958ebafef9775f&c_uniq_tag=YLQnC1uRw2Dv7SdlcjBO_ZzvBhptBqpj4qqbqJiGEgI&type=album" alt="Cat" />
					<p className={classes.logo_text}>MySN</p>
				</div>
			</div>
		</header>
	)
}

export default Header;