import axios from "./axios";
class HomeService {
    sendForm(form: any) {

        // return axios.get("/home")
        return axios.post('consultations', form)
    }
}
export default new HomeService();