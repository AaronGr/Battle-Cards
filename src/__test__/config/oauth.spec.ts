import { getBNetOAuthToken } from "../../config/oauth";

import mockAxios from "../../__mocks__/axios";

const BNET_CLIENT_ID = "clientid"
const BNET_CLIENT_SECRET = "clientsecret"


describe('bnet oauth', () => {

    afterEach(() => {
        mockAxios.reset();
    })

    test('returns a non-empty string', async () => {

        const expectedOAuthToken = 'oauthtoken';
        const mockResponse: any = {
            data: {
                access_token: expectedOAuthToken
            }
        }
        
    
    });


    // test('catches errors', async() => {
    //     expect.assertions(1);
    //     try {
            
    //     }
    // });

});