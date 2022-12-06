import React from 'react';
import classes from './FormWall.module.css';

const FormWall = () => {

	const textArea = React.createRef();

	const addPost = () => {
		let textPost = textArea.current;
		alert(textPost.value);
		textPost.value = '';
	}

	return (
		<form className={classes.form} action="post">
			<div className={classes.textarea_block}>
				<textarea className={classes.textarea} name="post" rows="3" placeholder='Enter new post...' ref={textArea} ></textarea>
				<input className={classes.button_reset} type="reset" value="x" />
			</div>
			<div className={classes.button_row}>
				<input className={`${classes.button} ${classes.button_submit}`} type="button" value="Submit" onClick={addPost} />
			</div>
		</form>
	)
}

export default FormWall;