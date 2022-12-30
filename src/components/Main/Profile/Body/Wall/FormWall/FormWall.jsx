import React from 'react';
import classes from './FormWall.module.css';
import {addPostCreateAction, updatePostCreateAction} from "../../../../../../redux/profile-reducer";

const FormWall = (props) => {

	const textArea = React.createRef();

	const addPost = () => {
		const action = addPostCreateAction();
		props.dispatch(action);
	}

	const postChange = () => {
		const textPost = textArea.current.value;
		const action = updatePostCreateAction(textPost);
		props.dispatch(action);
	}

	return (
		<form className={classes.form} >
			<div className={classes.textarea_block}>
				<textarea className={classes.textarea}
						  ref={textArea}
						  onChange={postChange}
						  name="post" rows="3"
						  placeholder='Enter new post...'
						  value={props.newPostText}/>
				<input className={classes.button_reset} type="reset" value="x" />
			</div>
			<div className={classes.button_row}>
				<input className={`${classes.button} ${classes.button_submit}`}
					   onClick={addPost}
					   type="button"
					   value="Submit"  />
			</div>
		</form>
	)
}

export default FormWall;