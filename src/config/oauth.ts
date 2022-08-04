import axios from 'axios';
import FormData from "form-data";

const BNET_OAUTH_URL = 'https://us.battle.net/oauth/token';

export const  getBNetOAuthToken = async (clientID: string, clientSecret: string): Promise<any> => {

    const formData = new FormData();
    formData.append('grant_type', 'client_credentials');

    const config = {
        auth: {
            username: clientID,
            password: clientSecret
        }
    }

    return axios.post(BNET_OAUTH_URL, formData, config)
    
}