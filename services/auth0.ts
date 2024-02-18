import axios from 'axios';

const BASE_URL = 'https://sieh-test.us.auth0.com';

export const getAuth0ManagementApiToken = async () => {
  try {
    
    const response = await axios.post(`${BASE_URL}/oauth/token`, {
      headers: {
        // Authorization: `Bearer ${token}`,
        ContentType: 'application/json',
      },
        client_id: process.env.AUTH0_MANAGEMENT_API_CLIENT_ID,
        client_secret: process.env.AUTH0_MANAGEMENT_API_CLIENT_SECRET,
        audience: `${BASE_URL}/api/v2/`,
        grant_type: 'client_credentials',
    }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const getAuth0User = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const getAuth0UserRoles = async (token: string, id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v2/users/${id}/roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};