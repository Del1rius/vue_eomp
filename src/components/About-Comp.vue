<template>
  <div class="container-fluid about">
    <h2 class="display-3 text-center text-white">ABOUT ME!</h2>
    
      <div class="my-auto mx-auto p-2">
        <img
          src="https://i.postimg.cc/8z64GRXv/C12-Timothy-Barry-1.jpg"
          alt="timothy"
          class="me"
        />
      </div>
    <div class="row">
        <div class="col-4 mx-auto mt-2 p-2 animate__animated animate__backInLeft animate__delay-1s">
            <div class="borders p-2">
                <h3 class="display-6 text-center text-white me-2">Bio:</h3>
                <p class="fs-3 text-white text-center me-2">
                I am an aspiring web developer. I wish to learn as many new things as
                I possibly can. I am a very quick learner. If I find a topic I enjoy
                or like I do as much possible research on it to educate myself.
                </p>
            </div>
        </div>
        <div class="col-4 mx-auto mt-2 p-2 animate__animated animate__backInRight animate__delay-1s">
            <div class="borders p-2">
                <h3 class="display-6 text-center text-white me-2">Personal Information:</h3>
                <ul class="list-unstyled fs-4 text-center text-white">
                    <li>Name: Timothy Barry</li>
                    <li>Date of Birth: 28/11/2002</li>
                    <li>Gender: Male</li>
                    <li>Location: Cape Town</li>
                    <!-- <li>CellPhone Number: (+27)666 420 6969</li> -->
                    <li>Email Address: timothy.aidan.barry@gmail.com</li>
                    <li>Willing to Relocate: Yes</li>
                    <a href="https://github.com/Del1rius" target="_blank" class="text-decoration-none text-info">My Github</a> &
                    <a href="https://www.linkedin.com/in/timothy-barry-82344b262/" target="_blank" class="text-decoration-none text-info">My Linkedin</a>
                </ul>
            </div>
        </div>
    </div>
    <div class="skills mt-2">
    <h2 class="display-3 text-center text-white ">Skills:</h2>
    <div class="row">
        <div class="col-2"><i class="fa-brands fa-html5 fa-beat-fade fa-3x" style="color: #000000;"></i></div>
        <div class="col-10 my-auto"><div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated fs-5" style="width: 100%">100%</div>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="col-2"><i class="fa-brands fa-css3-alt fa-beat-fade fa-3x" style="color: #000000;"></i></div>
        <div class="col-10 my-auto"><div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated fs-5" style="width: 100%">100%</div>
        </div>
    </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.about {
  background-color: #008080;
  min-height: 100vh;
}

.me {
  width: 400px;
  border: 3px solid white;
  border-radius: 25px;
}
.borders {
    min-height: 375px !important;
    border: 3px solid white;
    border-radius: 25px;
    width: 500px;
}
h2 {
    margin-bottom: 0;
}
.progress-bar {
    background-color: black;
}
.progress {
    width: 95%;
}
.skills {
    margin: 0;
    border: 3px solid white;
    border-radius: 25px;
}
</style>
