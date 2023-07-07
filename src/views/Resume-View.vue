<template>
  <div class="skill">
    <div class="skills mx-auto">
      <h2 class="display-3 text-center">Skills:</h2>
      <div class="row">
        <div class="col-4 mt-2">
          <i
            class="fa-brands fa-html5 fa-beat-fade fa-3x"
            style="color: #000000"
          ></i>
        </div>
        <div class="col-8 my-auto">
          <div
            class="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style="width: 95%"
            >
              Expert
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 mt-2">
          <i
            class="fa-brands fa-css3-alt fa-beat-fade fa-3x"
            style="color: #000000"
          ></i>
        </div>
        <div class="col-8 my-auto">
          <div
            class="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style="width: 83%"
            >
              Advanced
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 mt-2">
          <i
            class="fa-brands fa-bootstrap fa-beat-fade fa-3x"
            style="color: #000000"
          ></i>
        </div>
        <div class="col-8 my-auto">
          <div
            class="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style="width: 85%"
            >
              Advanced
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 mt-2">
          <i
            class="fa-brands fa-square-js fa-beat-fade fa-3x"
            style="color: #000000"
          ></i>
        </div>
        <div class="col-8 my-auto">
          <div
            class="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style="width: 80%"
            >
              Advanced
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 mt-2">
          <i
            class="fa-brands fa-vuejs fa-beat-fade fa-3x"
            style="color: #000000"
          ></i>
        </div>
        <div class="col-8 my-auto">
          <div
            class="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style="width: 75%"
            >
              Intermediate
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 mt-2">
          <i
            class="fa-brands fa-github fa-beat-fade fa-3x"
            style="color: #000000"
          ></i>
        </div>
        <div class="col-8 my-auto">
          <div
            class="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style="width: 90%"
            >
              Expert
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="educations mt-3 d-flex justify-content-center align-items-center"
    >
      <h2 class="display-3 text-center text-white education">Education:</h2>
    </div>
    <ul class="timeline">
      <!-- Item 1 -->
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">Life Choices Academy</span>
            <span class="time-wrapper"
              ><span class="time">April 2023 - present</span></span
            >
          </div>
          <div class="desc text-white fs-5">
            Studying Full Stack Web Development.
          </div>
        </div>
      </li>

      <!-- Item 2 -->
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Groote Schuur High School</span>
            <span class="time-wrapper"
              ><span class="time">2017 - 2021</span></span
            >
          </div>
          <div class="desc text-white fs-5">
            Bachelors Pass.
          </div>
        </div>
      </li>

      <!-- Item 3 -->
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">John Graham Primary</span>
            <span class="time-wrapper"
              ><span class="time">2013 - 2016</span></span
            >
          </div>
          <div class="desc text-white fs-5">
            Completed Primary School with good grades.
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.skill {
  min-height: 100vh;
  background-color: #008080;
}
.progress-bar {
  background-color: black;
  border: 2px solid black;
  font-size: 15px;
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
  width: 1250px;
}
.timeline {
  position: relative;
  width: 660px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1em 0;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: " ";
  display: block;
  width: 6px;
  height: 100%;
  margin-left: -3px;
  background: rgb(80, 80, 80);
  background: -moz-linear-gradient(
    top,
    rgba(80, 80, 80, 0) 0%,
    rgb(80, 80, 80) 8%,
    rgb(80, 80, 80) 92%,
    rgba(80, 80, 80, 0) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(30, 87, 153, 1)),
    color-stop(100%, rgba(125, 185, 232, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(80, 80, 80, 0) 0%,
    rgb(80, 80, 80) 8%,
    rgb(80, 80, 80) 92%,
    rgba(80, 80, 80, 0) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(80, 80, 80, 0) 0%,
    rgb(80, 80, 80) 8%,
    rgb(80, 80, 80) 92%,
    rgba(80, 80, 80, 0) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(80, 80, 80, 0) 0%,
    rgb(80, 80, 80) 8%,
    rgb(80, 80, 80) 92%,
    rgba(80, 80, 80, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(80, 80, 80, 0) 0%,
    rgb(80, 80, 80) 8%,
    rgb(80, 80, 80) 92%,
    rgba(80, 80, 80, 0) 100%
  );

  z-index: 5;
}

.timeline li {
  padding: 1em 0;
}

.timeline li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.direction-l {
  position: relative;
  width: 300px;
  float: left;
  text-align: right;
}

.direction-r {
  position: relative;
  width: 300px;
  float: right;
}

.flag-wrapper {
  position: relative;
  display: inline-block;

  text-align: center;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(248, 248, 248);
  padding: 6px 10px;
  border-radius: 5px;

  font-weight: 600;
  text-align: left;
}

.direction-l .flag {
  -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-r .flag {
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-l .flag:before,
.direction-r .flag:before {
  position: absolute;
  top: 50%;
  right: -40px;
  content: " ";
  display: block;
  width: 12px;
  height: 12px;
  margin-top: -10px;
  background: #fff;
  border-radius: 10px;
  border: 4px solid rgb(255, 80, 80);
  z-index: 10;
}

.direction-r .flag:before {
  left: -40px;
}

.direction-l .flag:after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-left-color: rgb(248, 248, 248);
  border-width: 8px;
  pointer-events: none;
}

.direction-r .flag:after {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-right-color: rgb(248, 248, 248);
  border-width: 8px;
  pointer-events: none;
}

.time-wrapper {
  display: inline;

  line-height: 1em;
  font-size: 0.66666em;
  color: rgb(250, 80, 80);
  vertical-align: middle;
}

.direction-l .time-wrapper {
  float: left;
}

.direction-r .time-wrapper {
  float: right;
}

.time {
  display: inline-block;
  padding: 4px 6px;
  background: rgb(248, 248, 248);
}

.desc {
  margin: 1em 0.75em 0 0;

  font-size: 0.77777em;
  font-style: italic;
  line-height: 1.5em;
}

.direction-r .desc {
  margin: 1em 0 0 0.75em;
}
</style>
