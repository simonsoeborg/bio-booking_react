import { Component } from "react";
import api from "../api";
import dbUserStore from "../Stores/DBUserStore";

const userAPIUrl = api.userUrl;

class DBUserService extends Component {
  async componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    await api.api.get(userAPIUrl).then((response) => {
      dbUserStore.setUsers({ users: response.data });
    });
  }

  async getUserById(id) {
    await api.api.get(userAPIUrl + id).then((response) => {
      dbUserStore.setUser({ users: response.data });
    });
  }

  async updateUser(id, user) {
    await api.api.put(userAPIUrl + id, user).then((response) => {
      dbUserStore.setUser(user);
      console.log(`Updating: ${user}: ` + response.status);
    });
  }

  async postUser(user) {
    await api.api.post(userAPIUrl, user).then((response) => {
      dbUserStore.setUser(user);
      console.log(`Adding: ${user}: ` + response.status);
    });
  }
}

const dbUserService = new DBUserService({});
export default dbUserService;
