import { firebaseDb } from '../config/firebase';

const FirebaseRequest = () => ({
  getBooks: () => {
    const result = firebaseDb.ref('/books').once('value');
    return result;
  },

  getUserBooks: () => {
    const result = firebaseDb.ref('/user').once('value');
    return result;
  },

  // postBooks: ({ books }) => {
  //   const { headers } = config();

  //   return instance({
  //     method: 'POST',
  //     headers,
  //     data: books,
  //   });
  // },

  // updateBook: ({ books }) => {
  //   const { headers } = config();

  //   return instance({
  //     method: 'PUT',
  //     headers,
  //     data: books,
  //   });
  // },
});

export default FirebaseRequest();
