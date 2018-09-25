import {
  GET_MY_HEADACHES,
  ADD_HEADACHE,
  REMOVE_HEADACHE
} from "../store/actionCreators";

const initialState = {
  myHeadaches: [
    {
      _id: "1",
      "user._id": "1",
      date: "09/01/2018",
      painLevel: 7,
      comment: "Ouch!"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_HEADACHES:
      return { ...state, myHeadaches: action.myHeadaches };
    default:
      return state;
  }
};
