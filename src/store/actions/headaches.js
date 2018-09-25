import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
  GET_MY_HEADACHES,
  ADD_HEADACHE,
  REMOVE_HEADACHE
} from "../actionCreators";

export const loadHeadaches = myHeadaches => ({
  type: GET_MY_HEADACHES,
  myHeadaches
});

export const remove = id => ({
  type: REMOVE_HEADACHE,
  id
});

export const addHeadache = headache => ({
  type: ADD_HEADACHE,
  headache
});

export const removeHeadache = (user_id, headache_id) => {
  return dispatch => {
    return apiCall("delete", "/api/users/${user_id}/headaches/${headache_id}")
      .then(() => dispatch(remove(headache_id)))
      .catch(err => {
        addError(err.message);
      });
  };
};

export const fetchHeadaches = id => {
  console.log("fetchHeadaches called");
  return dispatch => {
    return apiCall("get", `/api/users/${id}/headaches`)
      .then(res => {
        console.log("fetchHeadaches / res", res);
        dispatch(loadHeadaches(res));
      })
      .catch(err => {
        console.log("fetchHeadaches / catch called / err", err);
        dispatch(addError(err.message));
      });
  };
};

export const postNewHeadache = headache => (dispatch, getState) => {
  console.log("postNewHeadache called");
  let { currentUser } = getState();
  const id = currentUser.user.id;
  console.log("headaches.js/postNewHeadache() - headache", headache);
  console.log(
    "headaches.js/postNewHeadache() - currentUser",
    currentUser,
    "headache",
    headache
  );
  return apiCall("post", `/api/users/${id}/headaches`, { ...headache })
    .then(res => {
      // dispatch(loadCoins(res));
      console.log("actions/Headache.js/postNewHeadache - res", res);
      dispatch(addHeadache(res));
    })
    .catch(err => dispatch(addError(err.message)));
};
