import axios from './axios';
class HomeService {
	sendForm(data: any) {
		var form = new FormData();
		// return axios.get("/home")
		if (data.image) {
			form.append('image', data.image);
		}
		form.append('name', data.name);
		form.append('mobile', data.mobile);
		form.append('category', data.category);
		return axios.post('consultations', form);
	}
}
export default new HomeService();
