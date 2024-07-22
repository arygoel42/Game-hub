import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "437ab89d38c441a0857989313d34c088"
    }
}) 

