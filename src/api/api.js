import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "62252dbb-eb7a-4baf-ac9c-85592ca23274",
    }
})

export const userAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
    },
    setAuthData() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    follow(followed, id) {
        if (followed) return instance.post(`follow/${id}`).then(response => response.data)
        else return instance.delete(`follow/${id}`).then(response => response.data)
    },
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
}