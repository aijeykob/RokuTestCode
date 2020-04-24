import {
    ADD_ACCOUNT,
    CHANGE_PAGE_TOGGLE,
    DELETE_ACCOUNT,
    SET_ACCOUNTS,
    SET_PREVIOUS_BTN,
    WRITING_ACCOUNT_TITLE
} from '../actions/index';

const initState = {
    pageToggle: false,
    accounts: [],
    accountTitle: '',
    previousBtn: 'second-page__btn-add'
};

export const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case CHANGE_PAGE_TOGGLE:
            return {
                ...state,
                pageToggle: payload
            };
        case SET_ACCOUNTS:
            return {
                ...state,
                accounts: payload
            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: [...state.accounts.filter(item => item.title !== payload)]
            };
        case WRITING_ACCOUNT_TITLE:
            return {
                ...state,
                accountTitle: payload
            };
        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: [...state.accounts, payload]
            };
        case SET_PREVIOUS_BTN:
            return {
                ...state,
                previousBtn: payload
            };
        default:
            return state
    }
};