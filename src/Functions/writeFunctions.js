import axiosInstance from "../helpers/AxiosConfig";

export const buyTicket = async (data)=>{
   const response = await axiosInstance.post('/', data);
    return response
}

export const createEvent = async (data)=>{
    const response = await axiosInstance.post('/events', data);
    return response
}

export const cancelEvent = async (data)=>{
    const response = await axiosInstance.post('/', data);
    return response
}

export const rescheduleEvent = async (data)=>{
    const response = await axiosInstance.post('/', data);
    return response
}

