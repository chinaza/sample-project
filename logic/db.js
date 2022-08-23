import ValidationModel from '../models/validations';

/**
 * @param  {{studentId: string, name: string, isStudent: boolean}} student
 * @returns {Promise<void>}
 */
export async function saveToDB(student) {
  // WRITE YOUR CODE HERE
}

/**
 * @param  {string} id
 * @returns {Promise<{studentId: string, name: string, isStudent: boolean}>}
 */
export async function getFromDB(id) {
  // WRITE YOUR CODE HERE
}
export async function saveToDB(student) {
  export async function getFromDB(id) {
    const result = await ValidationModel.findOne({studentId: id});
    return result;
  }
}


