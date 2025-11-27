declare module "photoswipe" {
  export interface PhotoSwipeOptions {
    index?: number;
    bgOpacity?: number;
    loop?: boolean;
    pinchToClose?: boolean;
    closeOnVerticalDrag?: boolean;
    escKey?: boolean;
    arrowKeys?: boolean;
    [key: string]: any;
  }

  export class PhotoSwipe {
    options: PhotoSwipeOptions;
    currSlide: any;
    element: HTMLElement;
    on(event: string, callback: (...args: any[]) => void): void;
    off(event: string, callback: (...args: any[]) => void): void;
    once(event: string, callback: (...args: any[]) => void): void;
    init(): void;
    destroy(): void;
  }
}

declare module "photoswipe/lightbox" {
  import { PhotoSwipe } from "photoswipe";

  export interface PhotoSwipeLightboxOptions {
    gallery: string;
    children?: string;
    pswpModule: () => Promise<typeof import("photoswipe")>;
    [key: string]: any;
  }

  export default class PhotoSwipeLightbox {
    pswp: PhotoSwipe | null;

    constructor(options: PhotoSwipeLightboxOptions);

    init(): void;
    destroy(): void;

    // event emitter API
    on(event: string, callback: (...args: any[]) => void): void;
    off(event: string, callback: (...args: any[]) => void): void;
    once(event: string, callback: (...args: any[]) => void): void;
  }
}
