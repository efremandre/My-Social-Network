const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_ADD_POST = 'UPDATE-ADD-POST';
const UPDATE_ADD_MESSAGE = 'UPDATE-ADD-MESSAGE';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, name: 'Alicia Vagner', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', message: 'Hello! My first great post!', likes: 1, dislikes: 0,},
                {id: 2, name: 'Tom E', avatar: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', message: 'Fuck You!', likes: 1, dislikes: 10,},
                {id: 3, name: 'Dima', avatar: 'https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg', message: 'Hmm... Interesting', likes: 3, dislikes: 0,},
                {id: 4, name: 'Julia Kotik', avatar: 'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png', message: 'Hi! )))', likes: 10, dislikes: 0,},
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dymich', avatar: 'https://kartinkin.net/uploads/posts/2022-02/thumbs/1645485890_21-kartinkin-net-p-top-kartinki-na-avu-24.jpg',},
                {id: 2, name: 'Andrey', avatar: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg',},
                {id: 3, name: 'Sveta', avatar: 'https://demotivation.ru/wp-content/uploads/2021/10/3-32.jpg',},
                {id: 4, name: 'Valera', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7ktobmis68f6L18AowLqKzIAFN-16Je2q5v2fyaeW7e3M9EHZkPDxg9qPIYjpSWW4wE&usqp=CAU',},
                {id: 5, name: 'Anna', avatar: 'https://img.freepik.com/premium-vector/avatars-with-different-emotions-girl-with-pink-curlers-and-yellow-patches-fashion-avatar-in-flat-vector-art_427567-1535.jpg',},
                {id: 6, name: 'Max', avatar: 'https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg',},
            ],
            messages: [
                {id: 1, message: 'Hi',},
                {id: 2, message: 'Hello!',},
                {id: 3, message: 'How are you?',},
                {id: 4, message: 'I fine! Thank you!',},
            ],
            newMessageText: '',
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer; // патерн наблюдатель - observer
    },
    dispatch(action) { // { type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                name: 'New User',
                avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                message: this._state.profilePage.newPostText,
                likes: 0,
                dislikes: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_ADD_POST) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 4,
                message: this._state.messagesPage.newMessageText,
            };

            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_ADD_MESSAGE) {
            this._state.messagesPage.newMessageText = action.text;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostCreateAction = () => ({type: ADD_POST});
export const updatePostCreateAction = (text) => ({type: UPDATE_ADD_POST, text: text});
export const addMessageCreateAction = () => ({type: ADD_MESSAGE});
export const updateMessageCreateAction = (text) => ({type: UPDATE_ADD_MESSAGE, text: text});

export default store;
window.store = store;