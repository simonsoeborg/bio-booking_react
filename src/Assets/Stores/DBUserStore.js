import dbUserService from "../Services/DBUserService";

const initialState = {
  user: null,
  users: [],
};

class DBUserStore {
  constructor() {
    this.user = initialState;
  }

  setUsers(users) {
    this.users = users;
  }

  getUsers() {
    if (this.user.users.length === 0) {
      this.setUsers = dbUserService.getUsers();
    }
    return this.users;
  }

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}

const dbUserStore = new DBUserStore({});
export default dbUserStore;
