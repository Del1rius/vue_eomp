<!-- <template >
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/testimonials">Testimonials</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav {
    padding: 10px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-content: center;

}

a {
    background-color: #008080;
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 25px;
    padding: 10px;
    margin: 10px;
    border: 2px solid white;
    border-radius: 10px;
}

a:hover {
    background-color: black;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
}
a.router-link-active {
    background-color: black;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
}
</style> -->
<template>
  <nav class="navbar navbar-expand-lg fixed-top p-0">
    <div class="container-fluid bg-transparent p-2 m-3">
      <!-- <a class="navbar-brand" href="/">
        <img src="https://i.postimg.cc/HjDqs5xg/logo2-removebg-preview.png`" alt="logo">
    </a> -->
    <input type="checkbox" id="active" />
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/testimonials">Testimonials</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    </div>
    </nav>
</template>
<script>
export default {
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap');
li {
    font-family: 'Bitter', serif;
}
img {
    width: 100px;
}
.navbar, .container-fluid {
  background-color: transparent !important;
}
.wrapper {
  position: fixed;
  top: 0;
  /*left: -100%;*/
  right: -100%;
  height: 100%;
  width: 100%;
  background: #008080;
  opacity: 90%;
  transition: all 0.6s ease-in-out;
}
#active:checked ~ .wrapper {
  /*left: 0;*/
  right: 0;
}
.menu-btn {
  position: absolute;
  z-index: 2;
  right: 20px;
  /*left: 20px; */
  top: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: #008080;
}
.menu-btn span,
.menu-btn:before,
.menu-btn:after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 30%;
  width: 40%;
  border-bottom: 2px solid #000;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-btn:before {
  transform: translateY(-8px);
}
.menu-btn:after {
  transform: translateY(8px);
}
.close {
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: background 0.6s;
}
/* closing animation */
#active:checked + .menu-btn span {
  transform: scaleX(0);
}
#active:checked + .menu-btn:before {
  transform: rotate(45deg);
  border-color: #fff;
}
#active:checked + .menu-btn:after {
  transform: rotate(-45deg);
  border-color: #fff;
}
.wrapper ul {
  position: absolute;
  font-family: 'Poppins', sans-serif;
  color: rgb(255, 255, 255);
  top: 50%;
  left: 50%;
  height: 90%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}
.wrapper ul li {
  height: 10%;
  margin: 15px 0;
  color: rgb(255, 255, 255);
}
.wrapper ul li a {
  text-decoration: none;
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.5);
  font-size: 30px;
  font-weight: 500;
  padding: 5px 30px;
  color: rgb(255, 255, 255);
  border-radius: 50px;
  position: absolute;
  line-height: 50px;
  margin: 5px 30px;
  transition: all 0.3s ease;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.wrapper ul li a:after {
  position: absolute;
  content: "";
  color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 50px;
  transform: scaleY(0);
  z-index: -1;
  transition: transform 0.3s ease;
}
.wrapper ul li a:hover:after {
  transform: scaleY(1);
}
.wrapper ul li a:hover {
  color: rgb(255, 255, 255);
}
input[type="checkbox"] {
  display: none;
}
#active:checked ~ .wrapper ul li a {
  opacity: 1;
}
.wrapper ul li a {
  transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateX(100px);
}
#active:checked ~ .wrapper ul li a {
  transform: none;
  transition-timing-function: ease, cubic-bezier(0.1, 1.3, 0.3, 1);
  transition-delay: 0.6s;
  transform: translateX(-100px);
}
 a:hover {
  color: black !important;
}
a-active {
  color: black !important;
}
@media (max-width: 600px) {
  .wrapper ul {
    left: 40%;
  }
}
</style>
