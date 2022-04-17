import actionTypes from "./actionTypes";
import { getAllCodeService } from "../../services/userService";


// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
      try {
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

export const fetchGenderSuccess = () => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
});
export const fetchGenderfailed = () => ({
  type: actionTypes.FETCH_GENDER_FAIDED,
});


