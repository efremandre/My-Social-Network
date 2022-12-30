const ADD_POST = 'ADD-POST';
const UPDATE_ADD_POST = 'UPDATE-ADD-POST';
const RESET_TEXT = 'RESET-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                name: 'New User',
                avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                message: state.newPostText,
                likes: 0,
                dislikes: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_ADD_POST:
            state.newPostText = action.text;
            return state;
        case RESET_TEXT:
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}

export const addPostCreateAction = () => ({type: ADD_POST});
export const updatePostCreateAction = (text) => ({type: UPDATE_ADD_POST, text: text});
export const resetText = (text) => ({type: RESET_TEXT, text: text});

export default profileReducer;