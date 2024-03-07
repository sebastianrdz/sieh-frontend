import axios from 'axios';

export const getAllProjects = async () => {
  try {
    const res = await axios.get('/api/project'); // Replace 'my-route' with your actual API route
    console.log(res.data);
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};