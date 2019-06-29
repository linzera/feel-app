import { observable, computed } from "mobx";

export interface IUserStore {
  name: string;
}

class UserStore implements IUserStore {
  @observable name = "";

  @computed
  get getName() {
    return this.name;
  }
}

export default new UserStore();
