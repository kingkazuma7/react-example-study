// 初期
export const initialState = {
  loading: false,
  post: {},
  error: false,
}

export const reducer = (state, action) => {
  switch (action.type) {

  case "START":
    return {
      loading: true,
      post: {},
      error: false,
    };
    
  case "SUCCESS":
    return {
      loading: false,
      post: action.payload, // useStateでいうsetPost(json); fetchデータが入る
      error: false,
    };
  
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: true,
      }

  default:
    return state;
  }
}
