import axios from "axios";

const Request = axios.create({
    baseURL: "https://fakestoreapi.com/",
    validateStatus: false
})

export default Request;
