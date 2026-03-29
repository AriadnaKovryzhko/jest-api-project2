
const request = require('supertest');
const app = require('../../src/app');
const service = require('../../src/services/userService');

beforeEach(() => service._reset());

test('GET /users returns empty array', async () => {
  const res = await request(app).get('/users');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual([]);
});

test('POST /users creates user', async () => {
  const res = await request(app)
    .post('/users')
    .send({ name: 'Alex' });

  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe('Alex');
});
