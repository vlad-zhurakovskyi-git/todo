export const addTask = async (token, data) => {
  try {
    const res = await fetch('https://api-nodejs-todolist.herokuapp.com/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data)
    });

    return await res.json();
  } catch(error) {
    console.log(error)
  }
};
