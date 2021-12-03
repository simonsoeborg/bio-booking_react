import { configure, makeAutoObservable } from "mobx";

configure({ enforceActions: true });

class UserStore {
  users = [];
  user = null;
  check = false;

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

  set User(newUser) {
    this.user = newUser;
  }

  verifyTokenUser = async (authUser) => {
    if (!this.users || this.users.length < 1) {
      await this.getUsersAsync();
    }

    let found = false;
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].email === authUser.email) {
        found = true;
      }
    }

    if (!found) {
      this.User = {
        given_Name: authUser.given_Name || authUser.name,
        family_Name: authUser.family_Name || null,
        email: authUser.email,
        email_Verified: authUser.email_verified,
        picture: authUser.picture || null,
        admin: false,
      };
      this.postUser(this.User);
    }
  };

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
      body: model,
    };
    const request = new Request(`https://uglyrage.com/api/User/${id}`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }

    this.getUsersAsync();
    return response.status;
  };

  postUser = async (model) => {
    var options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(model),
    };
    // const request = new Request(``, options);
    if (!this.check) {
      this.check = true;
      await fetch("https://uglyrage.com/api/User/", options);
    }

    this.getUsersAsync();
  };

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
