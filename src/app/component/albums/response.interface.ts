import { Album } from './album.interface';

export interface Response {
  href: string,
  items: [Album],
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number
}
