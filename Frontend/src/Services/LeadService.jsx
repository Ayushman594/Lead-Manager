import axios from 'axios';

const API_URL = 'http://localhost:8080/api/leads';

class LeadService {

    getAllLeads() {
        return axios.get(API_URL);
    }

    getLeadById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    addLead(lead) {
        return axios.post(API_URL, lead);
    }

    updateLead(id, lead) {
        return axios.put(`${API_URL}/${id}`, lead);
    }

    deleteLead(id) {
        return axios.delete(`${API_URL}/${id}`);
    }

    searchLeads(name) {
        return axios.get(`${API_URL}/search?name=${encodeURIComponent(name)}`);
    }

    filterLeads(status) {
        return axios.get(`${API_URL}/filter?status=${status}`);
    }
}

export default new LeadService();
