import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() { }

    /**
     * The function get local storage with key value
     */
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    /**
     * The function set local storage with key and value
     */
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * The function remove item in local storage with key value
     */
    removeItemLocalStorage(key) {
        localStorage.removeItem(key);
    }
}