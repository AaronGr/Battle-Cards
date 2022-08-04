import axios from 'axios';
import express from 'express';;
import { app } from '../index';

export const cardsRouter = express.Router();

const hearthstoneCardAPIUrl ='https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=classic-cards&class=neutral&sort=manaCost:asc';

cardsRouter.get('', async (req, res) => {
    const config = {
        headers: {
            Authorization: `Bearer ${app.locals.oauthToken}`
        }   
    }

    const hsAPIResponse = await axios.get(hearthstoneCardAPIUrl, config);
    res.json(hsAPIResponse.data);
});