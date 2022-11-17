import React from 'react';
import classes from './Post.module.css';

const Post = () => {
	return (
		<div className={classes.post}>
			<div className={classes.post_row}>
				<div className={classes.photo}>
					<img src="https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg" />
				</div>

				<div className={classes.text}>
					<h4>UserName</h4>
					<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem quidem, voluptatem aspernatur vitae rem necessitatibus explicabo nihil quas officiis expedita voluptatum, hic at! Tempora nulla esse natus quam nisi.</p>
				</div>
			</div>
			<div className={classes.button}>
				<span class={classes.like}></span>
				<span class={classes.dislike}></span>
			</div>
		</div>
	)
}

export default Post;