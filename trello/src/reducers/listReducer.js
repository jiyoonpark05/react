
import {CONSTANTS} from "../actions";

let listID = 2;
let cardID = 6;

const initialState = [
    {
        title : "last Episode",
        id : `list-${0}`,
        cards : [
            {
                id : `card-${0}`,
                text : "we created a static list and a static card"
            },
            {
                id : `card-${1}`,
                text : "메모메모메모메모메모메모"
            }
        ]
    },
    {
        title : "This Episode",
        id : `list-${1}`,
        cards : [
            {
                id : `list-${2}`,
                text : "리액트 어려워"
            },
            {
                id : `list-${3}`,
                text : "디렉토리 헷갈령..."
            },
            {
                id :`list-${4}`,
                text : "지난번에 만든 바닐라js랑 같이 엮어서 google앱 만들면 좋을듯"
            }
        ]
    }
];

const listReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST :
            const newList = {
                title : action.payload,
                cards : [],
                id : `list-${listID}`
          }
          listID += 1
          return [...state,newList];

        case CONSTANTS.ADD_CARD :
            const newCard = {
                text : action.payload.text,
                id : `card-${cardID}`
            }
            cardID += 1;

            const newState = state.map(list =>{
                if (list.id === action.payload.listID) {
                   return {
                       ...list,
                       cards: [...list.cards, newCard]
                   }
                } else {
                    return list;
                }
             });

            return newState;

        default :
            return state;
    }
};

export default listReducer;
