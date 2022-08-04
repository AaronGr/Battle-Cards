import express, { Response } from 'express';
import request from 'supertest';
import axios from 'axios';
import { cardsRouter } from '../../routes/cards';

const app = express();
app.use('/cards', cardsRouter);

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedData = { 
    cards: [ 
        {
            id: 1,
            name: 'test1',
            health: 1,
            attack: 1,
            mana: 1
        },
        {
            id: 2,
            name: 'test2',
            health: 2,
            attack: 2,
            mana: 2
        }
    ]
}

describe('cards route', () => {

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('should return a response', async () => {
        const res = await request(app).get('/cards');
        expect(res).toBeTruthy();
    });

    it('should call hearthstone api once', async () => {
        await request(app).get('/cards');
        expect(mockedAxios).toBeCalledTimes(1);
    });

    it('should return card data as json with status code 200', async () => {
        mockedAxios.get.mockResolvedValueOnce(mockedData);

        const res = await request(app).get('/cards');
        expect(res).toBe(mockedData);
        expect(res.statusCode).toBe(200);
    })

});

