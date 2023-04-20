const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// Import funkcji z pliku API
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./api.js');

describe('API tests', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should fetch a list of users', async () => {
    const expectedUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];

    // Mokowanie odpowiedzi z API
    mock.onGet('/users').reply(200, expectedUsers);

    // Wywołanie funkcji i asercje
    const users = await getUsers();
    expect(users).toEqual(expectedUsers);
  });

  it('should fetch user data', async () => {
    const userId = 1;
    const expectedUser = { id: userId, name: 'John' };

    // Mokowanie odpowiedzi z API
    mock.onGet(`/users/${userId}`).reply(200, expectedUser);

    // Wywołanie funkcji i asercje
    const user = await getUser(userId);
    expect(user).toEqual(expectedUser);
  });

  it('should create a new user', async () => {
    const userData = { name: 'Jane' };
    const expectedUser = { id: 1, ...userData };

    // Mokowanie odpowiedzi z API
    mock.onPost('/users').reply(200, expectedUser);

    // Wywołanie funkcji i asercje
    const createdUser = await createUser(userData.name);
    expect(createdUser).toEqual(expectedUser);
  });

  it('should update user data', async () => {
    const userId = 1;
    const updatedUserData = { name: 'Jane' };
    const expectedUser = { id: userId, ...updatedUserData };

    // Mokowanie odpowiedzi z API
    mock.onPut(`/users/${userId}`, updatedUserData).reply(200, expectedUser);

    // Wywołanie funkcji i asercje
    const updatedUser = await updateUser(userId, updatedUserData.name);
    expect(updatedUser).toEqual(expectedUser);
  });

  it('should delete a user', async () => {
    const userId = 1;

    // Mokowanie odpowiedzi z API
    mock.onDelete(`/users/${userId}`).reply(200, true);

    // Wywołanie funkcji i asercje
    const result = await deleteUser(userId);
    expect(result).toEqual(true);
  });
});
