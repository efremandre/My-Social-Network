const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initState = {
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

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newPost = {
                id: 5,
                message: state.newMessageText,
            };

            state.messages.push(newPost);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreate = () => ({type: SEND_MESSAGE});
export const updateNewMessageCreate = (text) => ({type: UPDATE_NEW_MESSAGE, text: text});

export default messageReducer;