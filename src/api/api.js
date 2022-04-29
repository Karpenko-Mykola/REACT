import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "1b6d9c6f-8c5c-4ef3-a196-1f011b76e50b"
    }
})

export const UsersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`/users?count=${pageSize}&page=${currentPage}`)
    },
    getProfile(id) {
        return instance.get('./profile/' + id)
    },
    getStatus(id) {
        return instance.get('/profile/status/' + id)
    }
}

export const LoginAPI = {
    me() {
        return instance.get('/auth/me').then((response) => response.data)
    },
    login(loginObj) {
        return instance.post('/auth/login', loginObj)
    },
    logout() {
        return instance.delete('/auth/login')
    },
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
    }
}

export const FollowApi = {
    follow(id) {
        return instance.post('/follow/' + id)
    },
    unfollow(id) {
        return instance.delete('/follow/' + id)
    },
}

export const ProfileAPI = {
    setAva(data) {
        const formData = new FormData();
        formData.append("image", data)
        return instance.put('/profile/photo', formData, {"Content-Type": "multipart/form-data"})
            .then(response => response.data)
    },
    setStatus(newStatus) {
        return instance.put('/profile/status', {status: newStatus}).then(response => response.data)
    },
    setProfile(obj) {
        return instance.put('/profile' , obj)
    }
}

