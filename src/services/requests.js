const FirebaseRequest = ({ instance, config }) => ({
  getBooks: ({ data }) => {
    const { headers } = config();
    return instance({
      method: 'GET',
      headers: {
        ...headers,
      },
      data,
    });
  },

  postBooks: ({ books }) => {
    const { headers } = config();

    return instance({
      method: 'POST',
      headers,
      data: books,
    });
  },

  updateBook: ({ books }) => {
    const { headers } = config();

    return instance({
      method: 'PUT',
      headers,
      data: books,
    });
  },
});
