import random from './randomizer';

const getFormattedDate = (date) => {
  const year = `${date.getFullYear()}`.slice(2, 4);
  const month = date.getMonth() + 1;
  const day = date.getDay() + 1;
  return `${day}.${month}.${year}`;
};

const uniqUsers = (arr) => {
  const ids = {};
  let count = 0;
  arr.forEach((d) => {
    if (!ids[d.userId]) {
      ids[d.userId] = true;
      count += 1;
    }
  });
  return count;
};

export type User = {
  id: number;
  createdAt: Date;
};

export type Debt = {
  id: Number;
  createdAt: Date;
  dueDate: Date; // срок оплаты
  date: Date | null;
  value: Number;
  userId: Number;
};

class Services {
  users = [];
  debts = [];

  getChartData = () =>
    this.debts
      .filter((d) => d.date)
      .sort((a, b) => a.date.valueOf() - b.date.valueOf())
      .map((e) => ({ ...e, date: getFormattedDate(e.date) }));

  getRevenue = () => this.getChartData().reduce((acc, e) => acc + e.value, 0);

  getCountOfDebtUser = () => uniqUsers(this.debts.filter((d) => !d.date));

  getDebtorsTotal = () =>
    this.debts.filter((d) => !d.date).reduce((total, e) => total + e.value, 0);

  getUsersCount = () => this.users.length;

  updateData = () => {
    const { debts, users } = random();
    this.debts = debts;
    this.users = users;
  };

  getData(): any {
    this.updateData();

    return {
      chart: this.getChartData(),
      revenue: this.getRevenue(),
      debtorsCount: this.getCountOfDebtUser(),
      debtorsTotal: this.getDebtorsTotal(),
      usersCount: this.getUsersCount(),
    };
  }
}

const service = new Services();

export default service;
