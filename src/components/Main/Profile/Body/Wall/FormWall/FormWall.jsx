import React from 'react';
import classes from './FormWall.module.css';

const FormWall = (props) => {

	const textArea = React.createRef();

	const addPost = () => {
		props.dispatch({type: 'ADD-POST'});
	}

	const postChange = () => {
		let textPost = textArea.current.value;
		props.dispatch({type: 'UPDATE-ADD-POST', text: textPost});
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