import UserStore, { IUserStore } from "./UserStore";

class RootStores {
  userStore: IUserStore;

  constructor() {
    this.userStore = UserStore;
  }
}

export default new RootStores();
