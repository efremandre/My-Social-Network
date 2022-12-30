const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const messageReducer = (state, action) => {
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