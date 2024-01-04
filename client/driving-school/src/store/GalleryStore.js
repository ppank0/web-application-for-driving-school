import { makeAutoObservable } from 'mobx';

export default class GalleryStore {
  constructor() {
    this._images = [ ];
    this._page = 1;
    this._totalCount =0;
    this._limit = 8;
    makeAutoObservable(this);
  }
  setImages(images) {
    this._images = images;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }
  setLimit(limit) {
    this._limit = limit;
  }

  get images(){
    return this._images
  }
  get page(){
    return this._page
  }
  get totalCount(){
    return this._totalCount
  }
  get limit(){
    return this._limit
  }
  
}
