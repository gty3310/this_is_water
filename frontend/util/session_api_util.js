export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user,
    contentType: false,
    processData: false
  });
};


export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user,
    contentType: false,
    processData: false
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};


export const demoLogin = () => {
  return $.ajax({
    method: "POST",
    url: 'api/session',
    data: {
      user: {
        email: 'andrewdong@uchicago.edu',
        password: 'password'
      }
    }
  });
};
