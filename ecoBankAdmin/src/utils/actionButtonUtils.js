const updateUser = {
  title: 'Update user',
  action(id) {
    console.log('update: ' + id);
  },
};

const deleteUser = {
  title: 'Update user',
  action(id) {
    console.log('delete: ' + id);
  },
};

export { updateUser, deleteUser };
