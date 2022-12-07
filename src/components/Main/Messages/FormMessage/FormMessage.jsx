import React from 'react';
import classes from './FormMessage.module.css';

const FormMessage = () => {

	const textAreaMessage = React.createRef();

	const addMessage = () => {
		let textMessage = textAreaMessage.current;
		alert(textMessage.value);
		textMessage.value = '';
	}

	return (
		<form>
			<div className={classes.textarea_block}>
				<textarea className={classes.textarea} name="post" rows="3" placeholder='Enter new message...' ref={textAreaMessage} ></textarea>
			</div>
			<div className={classes.button_row}>
				<input className={`${classes.button} ${classes.button_reset}`} type="reset" value="Reset" />
				<input className={`${classes.button} ${classes.button_submit}`} type="button" value="Submit" onClick={addMessage} />
			</div>
		</form>
	)
}

export default FormMessage;