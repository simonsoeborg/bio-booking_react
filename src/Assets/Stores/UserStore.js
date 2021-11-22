const initialState = {
  user: null,
  users: [],
};

class UserStore {
  constructor() {
    this.user = initialState;
  }

  setUsers(users) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}

const userStore = new UserStore({});
export default userStore;
