const request = require('supertest');
const express = require('express');
const { getName } = require('../controllers/apiController');

const app = express();
app.get('/api/name', getName);

describe('GET /api/name', () => {
  it('should return Havells', async () => {
    const response = await request(app).get('/api/name');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Havells');
  });
});
