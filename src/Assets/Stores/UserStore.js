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

  updateUser = async (id, model) => {
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
      method: "PUT",
      headers,
      body: model
    }
    const request = new Request(`https://uglyrage.com/api/User/${id}`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }

    this.getUsersAsync();
    return response.status;
  }

  postUser = async (model) => {
    console.log(model)
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
      method: "POST",
      headers,
      body: model
    }
    const request = new Request(`https://uglyrage.com/api/User/`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }

    this.getUsersAsync();
    return response.status;
  }

  deleteUser = async (id) => {
    const res = await fetch(`https://uglyrage.com/api/User/${id}`, {
      method: "DELETE",
      mode: "cors",
    });

    if (res.status !== 204) {
      console.log(res);
    }
    this.getUsersAsync();
  };
}

export const us = new UserStore();
