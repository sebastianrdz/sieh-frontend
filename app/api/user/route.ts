// pages/api/user.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { getSession } from '@auth0/nextjs-auth0';
import { getAuth0ManagementApiToken, getAuth0UserRoles } from '@/services/auth0';

interface UserData {
  name: string;
  email: string;
  roles: string[];
  managementToken: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserData | any>) {
  try {
    // Fetch user data from the API upon login
    // const response = await axios.get<UserData>('YOUR_API_ENDPOINT_HERE');
      const session = await getSession();
      const token = await getAuth0ManagementApiToken();
      const userRoles = await getAuth0UserRoles(
        token.access_token,
        session?.user.sub
      );
      const mockUserData: UserData = {
        name: session?.user.name || "indefinido*",
        email: session?.user.email || "indefinido*",
        roles: userRoles.map((role: any) => role.name),
        managementToken: token.access_token,
      };

    // res.status(200).json(response.data);
    res.status(200).json(mockUserData);
  } catch (error: any) {
    console.error('Error fetching user data:', error);
    res.status(error.response?.status || 500).json({ error: error.message });
    
  }
}
