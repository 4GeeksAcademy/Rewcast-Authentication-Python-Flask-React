const signup = (email, password) => {
    return fetch("https://automatic-garbanzo-ww4j66rrp7pcggw5-3001.app.github.dev/api/signup/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    });
  };

  const login = (email, password) => {
    return fetch("https://automatic-garbanzo-ww4j66rrp7pcggw5-3001.app.github.dev/api/login/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    })
    .then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.access_token) {
            localStorage.setItem("user", JSON.stringify(data));
          }
          return data;
        });
      } else {
        throw new Error('Network response was not ok');
      }
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
  };

  export default authService;