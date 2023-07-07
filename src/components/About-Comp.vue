<template>
  <div class="container-fluid about">
    <h2 class="display-3 text-center text-white">ABOUT ME!</h2>
    <div class="row">
      <div class="col-6 mb-4 my-auto mx-auto p-2 animate__animated animate__backInLeft animate__delay-1s">
        <img
          src="https://i.postimg.cc/cJjtQ3Kv/C12-Timothy-Barry-1.jpg"
          alt="timothy"
          class="me "
        />
      </div>
      <div class="col-6 mx-auto mb-4 mt-2 p-2 animate__animated animate__backInRight animate__delay-1s d-flex justify-content-center align-items-center">
            <div class="card p-2">
                <h3 class="display-6 text-center me-2">Personal Information:</h3>
                <ul class="list-unstyled fs-4 text-center">
                    <li>Name: Timothy Barry</li>
                    <li>Date of Birth: 28/11/2002</li>
                    <li>Gender: Male</li>
                    <li>Location: Cape Town</li>
                    <!-- <li>CellPhone Number: (+27)666 420 6969</li> -->
                    <li>Email Address: timothy.aidan.barry@gmail.com</li>
                    <li>Willing to Relocate: Yes</li>
                    <a href="https://github.com/Del1rius" target="_blank" class="text-decoration-none">My Github</a> &
                    <a href="https://www.linkedin.com/in/timothy-barry-82344b262/" target="_blank" class="text-decoration-none">My Linkedin</a>
                </ul>
            </div>
        </div>
      </div>
    <div class="row">
        <div class="col-6 mx-auto mb-4 mt-4 p-2 animate__animated animate__backInLeft animate__delay-1s d-flex justify-content-center align-items-center">
            <div class="card p-2">
                <h3 class="display-6 text-center me-2">Hobbies:</h3>
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
                I am an aspiring web developer. I wish to learn as many new things as
                I possibly can. I am a very quick learner. If I find a topic I enjoy
                or like I do as much possible research on it to educate myself.
                </p>
            </div>
        </div>
    </div>
    <div class="skills mt-2 mx-auto">
    <h2 class="display-3 text-center">Skills:</h2>
    <div class="row">
        <div class="col-4 mt-2"><i class="fa-brands fa-html5 fa-beat-fade fa-3x" style="color: #000000;"></i></div>
        <div class="col-8 my-auto"><div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated fs-5" style="width: 95%"></div>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="col-4 mt-2"><i class="fa-brands fa-css3-alt fa-beat-fade fa-3x" style="color: #000000;"></i></div>
        <div class="col-8 my-auto"><div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated fs-5" style="width: 83%"></div>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="col-4 mt-2"><i class="fa-brands fa-bootstrap fa-beat-fade fa-3x" style="color: #000000;"></i></div>
        <div class="col-8 my-auto"><div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated fs-5" style="width: 85%"></div>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="col-4 mt-2"><i class="fa-brands fa-square-js fa-beat-fade fa-3x" style="color: #000000;"></i></div>
        <div class="col-8 my-auto"><div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated fs-5" style="width: 80%"></div>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="col-4 mt-2"><i class="fa-brands fa-vuejs fa-beat-fade fa-3x" style="color: #000000;"></i></div>
        <div class="col-8 my-auto"><div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated fs-5" style="width: 75%"></div>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="col-4 mt-2"><i class="fa-brands fa-github fa-beat-fade fa-3x" style="color: #000000;"></i></div>
        <div class="col-8 my-auto"><div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated fs-5" style="width: 90%"></div>
        </div>
    </div>
    </div>
  </div>
  <div class="educations mt-3">
    <h2 class="display-3 text-center text-white education">Education:</h2>
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
  width: 500px;
  border: 3px solid white;
  border-radius: 25px;
  max-height: 385px !important;
}
.card {
    background-color: #008080;
    min-height: 375px !important;
    border: 3px solid white;
    border-radius: 25px;
    width: 500px;
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
.progress-bar {
    background-color: black;
    border: 2px solid black;
}
.progress {
    width: 80%;
}
.skills {
    margin: 0;
    border: 3px solid white;
    border-radius: 25px;
    width: 1250px;
    color: white;
}

.skills:hover {
    background-color: white;
    transition: 0.5s ease-in;
    color: #008080;
    border: 3px solid black;
}
.education {
    border: 4px solid white;
    border-radius: 25px;
    padding: 20px;
}
a {
    text-decoration: none;
    border: 2px solid black;
    border-radius: 25px;
    color: black;
    padding: 5px;
    background-color: white;
}
</style>
