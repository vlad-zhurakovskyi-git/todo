export const register = async () => {
  const data = {
    "name": "Vlad Zhurakovskyi",
    "email": "vlad.zhurakovskyi@gmail.com",
    "password": "12345678",
    "age": 24
  };

  const res = await fetch('https://api-nodejs-todolist.herokuapp.com/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await res.json();
};

export const login = async () => {
  try {
    const data = {
      "email": "vlad.zhurakovskyi@gmail.com",
      "password": "12345678",
    };

    const res = await fetch('https://api-nodejs-todolist.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await res.json();
  } catch(error) {
    console.log(error)
  }
};

export const getLogged = async (token) => {
  try {
    const res = await fetch('https://api-nodejs-todolist.herokuapp.com/user/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    return await res.json();
  } catch(error) {
    console.log(error)
  }
};

export const getAllTasks = async (token) => {
  try {
    const res = await fetch('https://api-nodejs-todolist.herokuapp.com/task', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    return await res.json();
  } catch(error) {
    console.log(error)
  }
};
