import { observable } from 'mobx';
import moment from 'moment';

export default class NowDateStore {
  @observable nowDate = '';

  constructor() {
    setInterval(() => {
      this.refreshNowDate();
    }, 1000);
  }

  refreshNowDate() {
    this.nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
