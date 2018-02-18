import axios from 'axios';

const backEndUrl = 'http://localhost:3010';

export function getAllAgreements() {
    return axios.get(`${backEndUrl}/get-all-agreements`)
                .then(response => response.data)
                .catch(error => console.log('error occurred ', error));
}

export function saveAgreement(values) {
    const payload = {
        name: values.name,
        startDate: values.startDate.format('DD-MM-YYYY'),
        endDate: values.endDate.format('DD-MM-YYYY'),
        value: values.value,
        status: values.status
    }       

    return axios.post(`${backEndUrl}/save-agreement`, payload)
                .then(response => response.data)
                .catch(error => console.log(error));
}

export function deleteAgreement(name) {
    return axios.delete(`${backEndUrl}/delete-agreement/${name}`)
                .then(response => response.data)
                .catch(error => console.log(error));
}