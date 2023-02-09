
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const sign_in_form = document.querySelector("#sign-in-form");
const sign_up_form = document.querySelector("#sign-up-form");
const AIRTABLE_API_KEY = "keyu7LiBINjrpnteQ";

const client = axios.create({
  baseURL: 'https://api.airtable.com/v0/apph0XZAsfdxR8gR5',
  headers: {
    'Authorization': `Bearer ${AIRTABLE_API_KEY}`
  }
});


// create variable for the button 


//make the function work when clicking on it  
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_in_form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("sign in form submitted");

  const inputs = e.target.elements;

  const email = inputs["email"].value;
  const password = inputs["password"].value;

  client.get('/users').then(response => {
    const users = response.data.records;

    const user = users.find(user => {
      return user.fields.email === email && user.fields.password === password;
    });

    if (user) {
      alert("Login successful");
      localStorage.setItem("user", user.id);
      // Redirect user to homepage
      document.location.href = "login.html";
    }
    else {
      alert("Login failed, please try again");
    }
  });
});

sign_up_form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("sign up form submitted");

  const inputs = e.target.elements;

  //get the your input values
  const username = inputs["username"].value;
  const email = inputs["email"].value;
  const password = inputs["password"].value;

  //store it into object 
  const newUser = {
      "fields": {
        "username":username,
        "email": email,
        "password": password
    }
  }

  const payload = {
    records: [
      newUser
    ]
  }

  //validation check whether is sign up successful or not 
  client.post('/users', payload).then(response => {
    console.log(response);
    alert("Sign up successful, Please login");
    container.classList.remove("sign-up-mode");
  }).catch(error => {
    console.log(error);
    alert("Sign up failed, please try again");
  })
})