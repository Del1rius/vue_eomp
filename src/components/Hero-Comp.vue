<template >
    <div class="homes">
        <h2 class="display-2 text-center text-white animate__animated animate__pulse animate__infinite">Timothy Barry</h2>
        <p class="text-center text-white fs-3 animate__animated animate__pulse animate__infinite">An Aspiring Web Developer</p>
        <a href="/about"><button type="button" class="fs-4 text-white p-1 animate__animated animate__pulse animate__infinite">More About Me</button></a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.homes {
  background-image: url("https://i.postimg.cc/wj6mGg24/test1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: #008080;
}
h2 {
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
p {

  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-55%, -55%);
    background-color: #008080;
    border: 2px solid white;
    border-radius: 10px;
    font-weight: bold;

}

button:hover {
    background-color: black;
    color: #008080 !important;
    font-weight: bold;
    transition: 0.3s ease-in;
}
</style>