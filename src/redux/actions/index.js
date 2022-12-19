import  {GET_USERS_REQUESTED, SET_USERS_REQUESTED} from './types';

export function getUsers() {
  return {
    type: GET_USERS_REQUESTED,
  }
}

export function postData(data) {
    return { 
      type: SET_USERS_REQUESTED,
      payload: data,
    }
  }