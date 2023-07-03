<template >
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/testimonials">Testimonials</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
div {
    padding: 30px;
    background-color: black;
}

a {
    background-color: #008080;
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 25px;
    padding: 20px;
    margin: 20px;
    border: 2px solid white;
    border-radius: 10px;
}

a:hover {
    background-color: black;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
}
    
</style>