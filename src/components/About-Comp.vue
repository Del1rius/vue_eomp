<template>
  <div class="container-fluid about">
    <h2 class="display-3 text-center text-white">ABOUT ME!</h2>
    <div class="row">
      <div class="col-6 mb-4 my-auto mx-auto p-2 animate__animated animate__backInLeft animate__delay-1s">
        <img
          src="https://i.ibb.co/6svs9fQ/C12-Timothy-Barry-1.jpg"
          alt="timothy"
          class="me"
        />
      </div>
      <div class="col-6 mx-auto mb-4 mt-2 p-2 animate__animated animate__backInRight animate__delay-1s d-flex justify-content-center align-items-center">
            <div class="card p-2">
                <h3 class="display-6 text-center me-2">Personal Information:</h3>
                <ul class="list-unstyled fs-4 text-center">
                    <li>Name: Timothy Barry</li>
                    <li>Date of Birth: 28/11/2002</li>
                    <li>Gender: Male</li>
                    <li>Location: Lansdowne, Cape Town</li>
                    <li>Cellphone Number: 0818093412</li>
                    <li>Email: timothy.aidan.barry@gmail.com</li>
                    <a href="https://github.com/Del1rius" target="_blank" class="text-decoration-none">My Github</a> &
                    <a href="https://www.linkedin.com/in/timothy-barry-82344b262/" target="_blank" class="text-decoration-none">My Linkedin</a>
                </ul>
            </div>
        </div>
      </div>
    <div class="row">
        <div class="col-6 mx-auto mb-4 mt-4 p-2 animate__animated animate__backInLeft animate__delay-1s d-flex justify-content-center align-items-center">
            <div class="card p-2">
                <h3 class="display-6 text-center me-2">Bio:</h3>
                <div class="card-body">
                <p class="fs-3 text-center me-2">
                I am an aspiring web developer. I wish to learn as many new things as
                I possibly can. I am a very quick learner. If I find a topic I enjoy
                or like I do as much possible research on it to educate myself.
                </p>
                </div>
            </div>
        </div>
        <div class="col-6 mx-auto mt-2 p-2 animate__animated animate__backInRight animate__delay-1s d-flex justify-content-center align-items-center">
            <div class="card p-2">
                <h3 class="display-6 text-center me-2">Hobbies:</h3>
                <p class="fs-3 text-center me-2 ">
                Coding 🤖 <br>
                Gaming 🎮 <br>
                Watches ⌚ <br>
                Cars 🏎️ <br>
                Football ⚽ <br>
                Anime 👽 <br>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
p {
  font-family: 'Abel', sans-serif !important;
}

li {
  font-family: 'Abel', sans-serif !important;
}
  
.about {
  background-color: #008080;
  min-height: 100vh;
}

.me {
  max-width: 100%;
  border: 3px solid white;
  border-radius: 25px;
  max-height: 400px !important;
}
.card {
    background-color: #008080;
    min-height: 400px !important;
    border: 3px solid white;
    border-radius: 25px;
    width: 375px;
    color: white;
}
.card:hover {
    background-color:#FFFFFF;
    transition: 0.5s ease-in;
    border: 3px solid black;
    color: #008080 !important;
}

h2 {
    margin-bottom: 0;
}
a {
    text-decoration: none;
    border: 2px solid black;
    border-radius: 25px;
    color: black;
    padding: 5px;
    background-color: white;
}

a:hover {
    background-color: #008080;
    color: white;
    transition: 0.3s ease-in;
}
</style>
