type Payload = {
  user: Object;
};

type reducerAction = {
  type: string;
  payload: Payload;
};

export const initialState = {
  user: {},
};

export const reducer = (state = initialState, action: reducerAction) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
      };

    default:
      return {
        ...state,
      };
  }
};
