import { got } from 'got';
export function findBooks(): Promise<any[]> {
  return got.get(`${process.env['API_URL']}/books`).json();
}
