export const GET_MY_HEADACHES = "GET_MY_HEADACHES";
export const ADD_HEADACHE = "ADD_HEADACHE";
export const REMOVE_HEADACHE = "REMOVE_HEADACHE";

export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

function handleGetHeadaches(data) {
  return {
    type: GET_MY_HEADACHES,
    data
  };
}

function handleAddHeadache(data) {
  return {
    type: ADD_HEADACHE,
    data
  };
}

function handleRemoveHeadache(id) {
  return {
    type: REMOVE_HEADACHE,
    id
  };
}

export function getAllHeadaches() {
  return dispatch => {
    return fetch("http://localhost:3026/api/headaches")
      .then(res => res.json())
      .then(data => dispatch(handleGetHeadaches(data)))
      .catch(err => console.log("Something went wrong!", err));
  };
}

export function addHeadache() {
  return {};
}

export function removeHeadache() {
  return {};
}
