import * as axios from "axios";
import react from "react";

const instance =axios.create({
   withCredentials:true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"39849dea-9af7-478a-a724-c06cfc5aa200"
    }
});
export const userAPI= {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            })
    },
    unfollowAPI (userID){
        return instance.delete(`follow/${userID}`).then(response => {
            return response.data;
        });
    },
    followAPI (userID){
        return instance.post(`follow/${userID}`).then(response => {
            return response.data;
        });
    },
    getProfile(userID){
        return profileAPI.getProfile(userID);
        }
};

export const profileAPI={
  getProfile(userID){
      return instance.get(`profile/` + userID).then(response => {
          return response.data;
      })
  },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID);
    },
UpdateStatus(status) {
        return instance.put(`profile/status/`, {status:status});
    }
};

export const authAPI={
  getAuth(){
      return instance.get(`auth/me`).then(response => {
          return response.data;
      })
  },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`, {email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)

    },
};