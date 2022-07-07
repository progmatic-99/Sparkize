type Payload = {
  user: Object;
};

export type reducerAction = {
  type: string;
  payload: Payload;
};

export const initialState = {
  state: {},
};

export const reducer = (state = initialState, action: reducerAction) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        state: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        state: {},
      };

    default:
      return {
        ...state,
      };
  }
};
