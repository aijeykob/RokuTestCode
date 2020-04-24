export const CHANGE_PAGE_TOGGLE = "CHANGE_PAGE_TOGGLE";
export const SET_ACCOUNTS = "SET_ACCOUNTS";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const WRITING_ACCOUNT_TITLE = "WRITING_ACCOUNT_TITLE";
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const SET_PREVIOUS_BTN = "SET_PREVIOUS_BTN";

export const changePageToggle = (status) => ({
    type: CHANGE_PAGE_TOGGLE, payload: status
});

export const setAccounts = (data) => ({
    type: SET_ACCOUNTS, payload: data
});
export const deleteAccount = (name) => ({
    type: DELETE_ACCOUNT, payload: name
});
export const writingAccountTitle = (text) => ({
    type: WRITING_ACCOUNT_TITLE, payload: text
});
export const addAccount = (account) => ({
    type: ADD_ACCOUNT, payload: account
});
export const setPreviousBtn = (btn) => ({
    type: SET_PREVIOUS_BTN, payload: btn
});
