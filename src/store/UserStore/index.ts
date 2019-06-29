import { observable, computed } from "mobx";

export interface Disease {
  name: string
}

export interface IUserStore {
  name: string
  birthday: Date
  disease: Disease[]
}

class UserStore implements IUserStore {
  @observable name = "";
  @observable birthday = new Date();
  @observable disease = [];

  @computed
  get getUser() {
    return this;
  }
}

export default new UserStore();
