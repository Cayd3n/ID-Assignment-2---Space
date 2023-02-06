$(document).ready(function(){
  function initialize()
  {
    for (var i = 0; i < localStorage.length; i++)
    {
      let user = localStorage.getItem(localStorage.key(i))
      let data = JSON.parse(user)
      if(data.login == true)
      {
        document.getElementById("booking").setAttribute("href", "page2.html")
        break
      }

      else if(data.login != true)
      {
        continue
      }
    }
  }

  for (var i = 0; i < localStorage.length; i++)
    {
      let user = localStorage.getItem(localStorage.key(i))
      let data = JSON.parse(user)
      if(data.login != true)
      {
        $(".btn2").click(function(){
          alert("Log in to access booking page")
        })
        
        break;
      }

      if(data.login == true)
      {
        continue
      }
    }

  initialize()
  for (let i = 1; i < 6; i++)  //loading user data
  {
    let username = "Worker" + i.toString()
    let user = {
      username: username,
      password: "Password" + i.toString(),
      login: false,
      date: null,
      time: null,
      room: null
    }

    let json = JSON.stringify(user)
    localStorage.setItem(username, json);
  }
  

  //load effect
  $(".navigation").addClass("slideInFromLeft")
  
  //navigation toggle
  $(".navtoggle").click(function(){
    $(".navbar").toggleClass("navhide");
    $(".navtoggle").toggleClass("togglehide");
    $(".interact").toggleClass("togglehide");
  })
  //sign in form toggle
  $(".signin").click(function(){
    $(".signincontainer").toggleClass("formshow");
    $(".signarrow").toggleClass("rotate");
  })
  //toggle slideshow
  $(".interact").click(function(){
    $(".slant").toggleClass("transform");
    $(".home_container").toggleClass("transform");
    setTimeout(function(){
      $(".slantcopy").toggleClass("transform");
    }, 150)

    $(".slideshow-container").toggleClass("show");

    if (document.querySelector(".interact").getAttribute("class").endsWith("changed")){
      
      $(".navbar").removeClass("nav-slideshow")
      $(".interact").removeClass("nav-slideshow")
      $(".navtoggle").removeClass("nav-slideshow")
      $(".interact").html("<button>Click here to enter slideshow</button>")
      $(".interact").removeClass("changed")
    }
    else{
      $(".navbar").addClass("nav-slideshow")
      $(".interact").addClass("nav-slideshow")
      $(".navtoggle").addClass("nav-slideshow")
      $(".interact").html("<button>Click here to leave slideshow</button>")
      $(".interact").addClass("changed")
      };
    }
  )
  $(".signinsubmit").click(function(){
    event.preventDefault()

    let username = $("#enter_name").val()
    let password = $("#password").val()
    
    let user = localStorage.getItem(username)
    var data = JSON.parse(user)

    if (user == null)
    {
      $(".u-rejection-message").addClass("msgshow")
        setTimeout(function(){
          $(".u-rejection-message").removeClass("msgshow")
        },1000)
    }

    else if(username == data.username && password == data.password)
    {
      let loginuser = {
        username: data.username,
        password: data.password,
        login: true,
        date: null,
        time: null,
        room: null
      }

      let json = JSON.stringify(loginuser)

      localStorage.setItem(data.username, json)
      $(".signinform").trigger("reset");

        $(".update-message").addClass("msgshow")
        setTimeout(function(){
          $(".update-message").removeClass("msgshow")
        },1000)

      document.getElementById("booking").setAttribute("href", "page2.html")
      alert = function(){};
    }
    
    else
    {
      $(".p-rejection-message").addClass("msgshow")
        setTimeout(function(){
          $(".p-rejection-message").removeClass("msgshow")
        },1000)
    }
  })

})
        
      

      
      
    
    
  

