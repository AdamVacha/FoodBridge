<script>
    function showMenu() {
        alert("you click show");
        // const navLinks = document.getElementById("navLinks");
        // navLinks.style.right = "0";
    }

    function hideMenu() {
        alert("you clicked hide");
        // const navLinks = document.getElementById("navLinks");
        // navLinks.style.right = "-200px";
    }
</script>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FoodBridge</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
    </head>
  <body>
    
      <section class="header">
      <nav>
        <a href="index.html" class="logo-container">
          <img src='images/logo.png' alt="FoodBridge Logo" class="logo">
        </a>
        <div class="nav-links" id="navLinks">

                <!-- having trouble with script for showMenu and hideMenu icons for small device screen view-->
            <ion-icon name="close-outline" on:click={hideMenu}></ion-icon>
            <ul> 
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">DONATE/REGISTER</a></li>
                <li><a href="">LOGIN</a></li>
                <li><a href="">SHELTER FINDER</a></li>
            </ul>
        </div>
            <ion-icon name="menu-outline" on:click={showMenu}></ion-icon> 
      </nav>

    <div class="text-box">
        <h1>Welcome to FoodBridge</h1>
        <p>Where Nutrition Meets Compassion<p>
        <p>We are a community-driven platform dedicated to helping bridge the gap <br>
             between food donors and shelters.</p>
         <!-- <p> add to about us: Our mission is to ensure no one goes hungry. With FoodBridge, you can make a meaningful impact on your community by donating surplus food and supporting local shelters.</p> -->
        <a href="" class="get-started">Get Started</a>
    </div>
      </section> 


      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  </body>
</html>

<style>
 *{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
 }
 .header{
  min-height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  background-image: url('images/homepage.jpeg');
 }

 /* Create a pseudo-element for the overlay */
 .header::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(120, 88, 51, 0.705); 
 }


 .logo-container {
    position: relative;
    z-index: 1;
 }

 .logo {
    width: 150px;
 }

nav{
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;
}
.nav-links{
    flex: 1;
    text-align: right;
}
.nav-links ul li{
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
}
.nav-links ul li a{
    color: white;
    text-decoration: none;
    font-size: 15px;
}
.nav-links ul li::after{
    content: '';
    width: 0%;
    height: 2px;
    background: #fec528;
    display: block;
    margin: auto;
    transition: 0.5s;
}
.nav-links ul li:hover::after{
    width: 100%;
}

.text-box{
    width: 90%;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.text-box h1{
    font-size: 62px;
}
.text-box p{
    margin: 10px 0 40px;
    font-size: 15px;
    color: white;
}
.get-started{
    display: inline-block;
    text-decoration: none;
    font-weight:600;
    color: white;
    border: 1px solid white;
    padding: 12px 34px;
    font-size: 15px;
    background:rgba(250, 176, 92, 0.887);
    position: relative;
    cursor: pointer;
    border-radius: 10px;
}
.get-started:hover{
    border: 1px solid #fec528;
    background: #fec528;
    color: #000000;
    transition: 1s;
    
}
ion-icon{
    display: none;
}


@media(max-width: 700px){
    .text-box h1{
    font-size: 20px;
    }
    .nav-links ul li{
        display: block;
    }
    .nav-links{
        position: absolute;
        background:#ff9e3c;
        height: 100vh;
        width: 200px;
        top: 0;
        right: -200px;
        text-align: left;
        z-index: 2;

    }
    ion-icon{
        display: block;
        color: white;
        margin: 10px;
        font-size: 22px;
        cursor: pointer;
    }
    .nav-links ul{
        padding: 30px;

    }

}
</style>
