import axiosClient from "../APIClient/AxiosClient";
const loginAPI = {
    logIn : (params) => {
        return axiosClient.post("/auth", params);
    },
}
export default loginAPI;