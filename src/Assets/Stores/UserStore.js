import { configure, makeAutoObservable } from "mobx";

configure({ enforceActions: true });

class UserStore {
  users = [];
  user = null;

  constructor() {
    makeAutoObservable(this);
    this.getUsersAsync();
  }

  get Users() {
    return this.users;
  }

  get User() {
    return this.user;
  }

  getUsersAsync = async () => {
    const response = await fetch(`https://uglyrage.com/api/User/`);
    const data = await response.json();
    this.users = data;
  };

  getUserById = async (id) => {
    const response = await fetch(`https://uglyrage.com/api/User/${id}`);
    const data = await response.json();
    this.user = data;
  };
}

export const us = new UserStore();
