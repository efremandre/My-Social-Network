const ADD_POST = 'ADD-POST';
const UPDATE_ADD_POST = 'UPDATE-ADD-POST';
const RESET_TEXT = 'RESET-TEXT';

const initState = {
    posts: [
        {id: 1, name: 'Alicia Vagner', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', message: 'Hello! My first great post!', likes: 1, dislikes: 0,},
        {id: 2, name: 'Tom E', avatar: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', message: 'Fuck You!', likes: 1, dislikes: 10,},
        {id: 3, name: 'Dima', avatar: 'https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg', message: 'Hmm... Interesting', likes: 3, dislikes: 0,},
        {id: 4, name: 'Julia Kotik', avatar: 'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png', message: 'Hi! )))', likes: 10, dislikes: 0,},
    ],
    newPostText: '',
}

const profileReducer = (state = initState, action) => {
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