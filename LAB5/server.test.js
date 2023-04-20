const request = require('supertest');
const { app, addToShoppingList, getShoppingList } = require('./server');

jest.mock('./server', () => {
  const originalModule = jest.requireActual('./server');
  const mockShoppingList = [];
  return {
    ...originalModule,
    getShoppingList: () => mockShoppingList,
    addToShoppingList: (item) => mockShoppingList.push(item),
  };
});

describe('POST /api/shopping-list', () => {
  it('should return 201 status code for valid data', async () => {
    const response = await request(app)
      .post('/api/shopping-list')
      .send({ item: 'milk' });
    expect(response.status).toBe(201);
  });

  it('should return 400 status code for missing data', async () => {
    const response = await request(app).post('/api/shopping-list');
    expect(response.status).toBe(400);
  });

  it('should add item to the list', async () => {
    const item = 'bread';
    await request(app).post('/api/shopping-list').send({ item });
    expect(getShoppingList()).toContain(item);
  });
});

describe('GET /api/shopping-list', () => {
  it('should return empty array for no items', async () => {
    const response = await request(app).get('/api/shopping-list');
    expect(response.body).toEqual([]);
  });

  it('should return array of items', async () => {
    addToShoppingList('milk');
    addToShoppingList('bread');
    const response = await request(app).get('/api/shopping-list');
    expect(response.body).toEqual(['milk', 'bread']);
  });

  it('should return 200 status code', async () => {
    const response = await request(app).get('/api/shopping-list');
    expect(response.status).toBe(200);
  });
});
