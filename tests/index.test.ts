// import request from 'supertest';
import request from 'supertest'
import app from "../src/api/server"

test('Server responds 200 on public route', async () => {
    const response = await request(app.callback()).get('/public');
    expect(response.status).toBe(200);
});

describe("sign up and log in", async () => {

    let user: any;
    test('/signup route', async () => {
        const response = await request(app.callback()).get('/signup');
    })

    //TODO WRITE TESTS for login / signup/ / join room/ create room/ create exercise / join room that has exercises in it, etc

})