import axios from "axios";
//login
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("http://localhost:9000/api/login", {
    email: userEmail,
    password: userPassword,
  });
};

//display all users
const getAllUsers = (inputId) => {
  return axios.get(`http://localhost:9000/api/get-all-users?id=${inputId}`);
};

// create new user
const createNewUserService = (data) => {
  return axios.post(`http://localhost:9000/api/create-new-user`, data);
};

//delete user
const deleteUserService = (userId) => {
  return axios.delete(`http://localhost:9000/api/delete-user`, {
    data: {
      id: userId,
    },
  });
};

//edit user
const editUserService = (inputData) => {
  return axios.put(`http://localhost:9000/api/edit-user`, inputData);
};

//getAllCode
const getAllCodeService = (inputType) => {
  return axios.get(`http://localhost:9000/api/get-all-code?type=${inputType}`);
};

//get doctor
const getTopDoctorHomeService = (limit) => {
  return axios.get(`http://localhost:9000/api/top-doctor-home?limit=${limit}`);
};
//load doctor 
const getAllDoctors = (limit) => {
    return axios.get(`http://localhost:8082/api/get-all-doctors`)
}

export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeService,
  getTopDoctorHomeService,
  getAllDoctors,
};
