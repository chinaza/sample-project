
    
    
    


/**
 * @param  {string} id
 * @returns {Promise<{studentId: string, name: string, isStudent: boolean}>}
 */
export async function getFromDB(id) {
  const result = await ValidationModel.findOne({studentId: id});
        return result;
      }
    

 