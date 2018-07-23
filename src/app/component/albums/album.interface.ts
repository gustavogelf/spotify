export interface Album {
  album_type: string,
  artists: any,
  available_markets: [string],
  external_urls: object,
  href: string,
  id: string,
  images: [{
    height: number,
    url: string,
    width: number,
  }],
  release_date: string,
  release_date_precision: string,
  type: string,
  uri: string,
  name: string
}
