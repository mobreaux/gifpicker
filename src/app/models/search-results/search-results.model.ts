export interface GifResponse {
    data: Gif[];
}

export interface Gif {
    type: string;
    images: Image;
}

export interface Image {
    original: ImageUrl;
}

export interface ImageUrl {
    url:string;
}
  