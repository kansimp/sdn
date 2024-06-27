// src/api/loginApi.js
import axios from 'axios';

const getAllWatch = async () => {
    try {
        const response = await axios.get('http://localhost:5000/watches');
        if (response?.data) {
            return response?.data;
        }
    } catch (error) {
        throw error.response?.data || { message: 'Unknown error' };
    }
};

export default getAllWatch;
