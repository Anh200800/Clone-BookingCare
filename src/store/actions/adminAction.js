import actionTypes from "./actionTypes";
import { getAllCodeService, createNewUserService } from "../../services/userService";


// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
      try {
        dispatch({
          type: actionTypes.FETCH_GENDER_START
        })
        let res = await getAllCodeService("GENDER");
        if (res && res.errCode === 0) {
         dispatch (fetchGenderSuccess(res.data));
        } else {
         dispatch (fetchGenderfailed());
        }
      } catch (e) {
        dispatch (fetchGenderfailed());
        console.log(e);
      }
    };
 };

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderfailed = () => ({
  type: actionTypes.FETCH_GENDER_FAIDED,
});
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData
});
export const fetchPositionfailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILDED,
});
export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fetchRolefailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILDED,
});
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if(res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data))
      } else {
        dispatch(fetchPositionfailed())
      }
    } catch(e) {
      dispatch(fetchPositionfailed())
      console.log('fetchPositionFailed error', e)
    }
  }
}

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRolefailed());
      }
    } catch (e) {
      dispatch(fetchRolefailed());
      console.log("fetchPositionFailed error", e);
    }
  };
};

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.errCode === 0) {
        dispatch(saveUserSuccess());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      dispatch(saveUserFailed());
      console.log("saveUserFailed error", e);
    }
  };
};


