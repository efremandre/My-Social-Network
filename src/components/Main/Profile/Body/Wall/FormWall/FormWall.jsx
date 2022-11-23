import React from 'react';
import classes from './FormWall.module.css';

const FormWall = () => {
	return (
		<form className={classes.form} action="post">
			<div className={classes.textarea_block}>
				<textarea className={classes.textarea} name="post" rows="3" placeholder='Enter new post...'></textarea>
				<input className={classes.button_reset} type="reset" value="x" />
			</div>
			<div className={classes.button_row}>
				<input className={`${classes.button} ${classes.button_submit}`} type="button" value="Submit" />
			</div>
		</form>
	)
}

export default FormWall;