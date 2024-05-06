import queryDatabase from "./queryPromise";

const insertValue = async () => {
    const people = ['Mario', 'Luigi', 'Peach', 'Daisy', 'Wario', 'Waluigi', 'Yoshi', 'Donkey Kong']

    const sqlInsert = 'INSERT INTO `people`(`name`) VALUES (?)';

    var person = people[Math.floor(Math.random()* people.length)];
    await queryDatabase(sqlInsert, person);

}
export default insertValue;
