import React from 'react';
import classes from './FormMessage.module.css';

const FormMessage = (props) => {

	const textAreaMessage = React.createRef();

	const addMessage = () => {
		props.dispatch({type: 'ADD-MESSAGE'});
	}

	const changeMessageText = () => {
		let textMessage = textAreaMessage.current.value;
		const action = {type: 'UPDATE-ADD-MESSAGE', text: textMessage};
		props.dispatch(action);
	}

	return (
		<form>
			<div className={classes.textarea_block}>
				<textarea className={classes.textarea}
						  ref={textAreaMessage}
						  onChange={changeMessageText}
						  name="post" rows="3"
						  placeholder='Enter new message...'
						  value={props.newMessageText}/>
			</div>
			<div className={classes.button_row}>
				<input className={`${classes.button} ${classes.button_reset}`} type="reset" value="Reset" />
				<input className={`${classes.button} ${classes.button_submit}`} type="button" value="Submit" onClick={addMessage} />
			</div>
		</form>
	)
}

export default FormMessage;