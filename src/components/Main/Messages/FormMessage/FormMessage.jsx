import React from 'react';
import classes from './FormMessage.module.css';
import {sendMessageCreate, updateNewMessageCreate} from "../../../../redux/message-reducer";

const FormMessage = (props) => {

	const textAreaMessage = React.createRef();

	const addMessage = () => {
		const action = sendMessageCreate();
		props.dispatch(action);
	}

	const changeMessageText = () => {
		const textMessage = textAreaMessage.current.value;
		const action = updateNewMessageCreate(textMessage);
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