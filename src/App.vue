<template>
  <header>
    <div class="navbar">
      <div class="logo"><a href="#">web dev </a></div>
      <ul class="links">
        <li><a href="hero">home</a></li>
        <li><a href="about">about</a></li>
        <li><a href="services">services</a></li>
        <li><a href="contact">contact</a></li>
      </ul>
      <a href="#" class="action_btn">Get Started</a>
      <div class="toggle_btn w-[80px] h-[30px]" :onclick="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    <div class="dropdown_menu" v-if="isActive">
      <li><a href="hero">home</a></li>
        <li><a href="about">about</a></li>
        <li><a href="services">services</a></li>
        <li><a href="contact">contact</a></li>
        <li><a href="#" class="action_btn">Get Started</a></li>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      isActive: false
    }
  },

  methods: {
    toggleMenu() {
    this.isActive = !this.isActive
}
    }
  }



</script>

<style>

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #000;
    font-size: 1rem;
  }
  a:hover{
    color: orangered;
  }

  header{
    position: relative;
    padding: 0 2rem;
  }
  .navbar{
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar .logo a{
    font-size: 1.5rem;
    font-weight: bold;
  }

  .navbar .links{
    display: flex;
    gap: 2rem;
  }

  .navbar .toggle_btn{
    color: #000;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
  }

  .action_btn{
    background-color: orangered;
    color: #000;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
  }

  .action_btn:hover{
    scale: 1.05;
    color: red;
  }

  .action_btn{
    scale: 0.95;
  }

  /* dropdown */
  .dropdown_menu{
    display: none;
    position: absolute;
    right: 2rem;
    top: 60px;
    height: 0;
    width: 300px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s;
    
  }

  .dropdown_menu{
    height: 240px;

  }

  .dropdown_menu li{
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropdown_menu .action_btn{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  /* media */
  @media(max-width: 992px){
    .navbar .links, .navbar .action_btn{
      display: none;
    }
    .navbar .toggle_btn{
      display: block;
    }
    .dropdown_menu{
      display: block;
    }
  }

  @media(min-width: 425px){
    .navbar .toggle_btn{
      margin-left: 240px;
    }
    .navbar .logo{
      min-width: 100px;
    }
  }

  @media(min-width: 375px){
    .navbar .toggle_btn{
      margin-left: 200px;
    }
    .navbar .logo{
      min-width: 100px;
    }
  }

  @media(min-width: 320px){
    .navbar .toggle_btn{
      margin-left: 140px;
    }
    .navbar .logo{
      min-width: 100px;
    }
     
    .navbar .dropdown_menu{
      display: flex;
      margin-left: -80px;
    }

  }

  


</style>