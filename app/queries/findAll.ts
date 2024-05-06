import queryDatabase from "./queryPromise";

const findAll = async () => {
    const selectCharacters = 'SELECT * FROM `people`';
    const allCharacters = await queryDatabase(selectCharacters);

    return allCharacters;

}
export default findAll;