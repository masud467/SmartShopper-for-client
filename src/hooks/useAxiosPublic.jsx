import axios from 'axios';

export const axiosPublic= axios.create({
    baseURL:'https://smart-shopper-for-server.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;