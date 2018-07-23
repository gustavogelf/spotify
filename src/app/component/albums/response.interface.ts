import { Album } from './album.interface';

export interface Response {
  href: string,
  items: [Album],
  limit: number,
  next: string,
  images: [{
    height: number,
    url: string,
    width: number,
  }],
  offset: number,
  previous: string,
  total: number
}
