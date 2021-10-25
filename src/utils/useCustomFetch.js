import { useState, useEffect } from 'react';
import axios from 'axios';
import {api} from './../utils/url'
axios.defaults.baseURL = api;
const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const useAxios = ({ url, method, body = null}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
                setError('');
            })
            .catch((err) => {
                // setError(err);
                setError(err.response && err.response.data.message ? err.response.data.message : err.message);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body]);

    return { response, error, loading };
};

export default useAxios;







