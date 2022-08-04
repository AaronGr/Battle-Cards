import 'dotenv/config';
import express from 'express';
import { getBNetOAuthToken } from './config/oauth';
import { cardsRouter } from './routes/cards';

export const app = express();
const PORT = process.env.PORT || 5000;

const BNET_CLIENT_ID: string | undefined = process.env.BNET_CLIENT_ID;
const BNET_CLIENT_SECRET: string | undefined = process.env.BNET_CLIENT_SECRET;


if (BNET_CLIENT_ID && BNET_CLIENT_SECRET) {
    getBNetOAuthToken(BNET_CLIENT_ID, BNET_CLIENT_SECRET)
        .then(res => {
            app.locals.oauthToken = res.data.access_token;
        })
        .catch(err => {
            console.log('Error: ' + err);
        })
} else {
    console.log("Client id or secret are missing!");
}

app.use('/cards', cardsRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});