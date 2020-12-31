const getRandomInt = (min:number, max:number) =>
  Math.floor(min + Math.random() * Math.floor(max));

const generateDate = () => {
  const year = getRandomInt(2010, 10);
  const month = getRandomInt(1, 11);
  const day = getRandomInt(1, 27);

  const date = new Date(year, month, day);
  return date;
};

const generateDebt = (id:number, userId:number) => ({
  id,
  createdAt: generateDate(),
  dueDate: generateDate(),
  date: getRandomInt(1, 10) > 3 ? generateDate() : null,
  value: getRandomInt(0, 5000),
  userId,
});

const generateUser = (id:number) => {
  const debtsCount = getRandomInt(1, 5);
  const user = {
    id,
    createdAt: generateDate(),
  };

  const userDebts = Array(debtsCount)
    .fill(0)
    .map((e, i) => generateDebt(i, id));

  return { user, userDebts };
};

const generateData = () => {
  const usersCount = getRandomInt(10, 20);
  let debts = [];
  let users = Array(usersCount)
    .fill(0)
    .map((u, i) => {
      const { user, userDebts } = generateUser(i);
      debts.push(...userDebts);
      return user;
    });

  return {
    users,
    debts,
  };
};

export default generateData;
