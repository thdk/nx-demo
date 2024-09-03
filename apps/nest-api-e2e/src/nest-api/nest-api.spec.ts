import axios from 'axios';

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});

describe('GET /api/books', () => {
  it('should return a list of books', async () => {
    const res = await axios.get(`/api/books`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual([
      { id: 1, title: 'The Great Gatsby' },
      { id: 2, title: 'The Catcher in the Rye' },
      { id: 3, title: 'To Kill a Mockingbird' },
      { id: 4, title: '1984' },
      { id: 5, title: 'The Lord of the Rings' },
      { id: 6, title: 'Pride and Prejudice' },
      { id: 7, title: 'The Book Thief' },
      { id: 8, title: 'Harry Potter' },
      { id: 9, title: 'The Hobbit' },
      { id: 10, title: 'The Chronicles of Narnia' },
    ]);
  });
});
