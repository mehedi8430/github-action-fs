import request from 'supertest';
import app from '../app.js';

describe('GET /', function () {
    it('responds with text "Hello World!"', async function () {
        const chai = await import('chai');
        const expect = chai.expect;

        await request(app)
            .get('/')
            .expect(200)
            .then((res) => {
                expect(res.text).to.equal('Hello World!');
            });
    });
});