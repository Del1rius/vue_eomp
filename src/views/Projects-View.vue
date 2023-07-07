<template>
  <div class="project">
    <div class="row ">
      <div v-for="project in projects" :key="project.id" class="col-4 mb-4">
        <div class="projects">
          <div>
            <div class="card mx-auto" style="width: 18rem">
              <img
                :src="project.img"
                id="img2"
                class="card-img-top"
                :alt="project.name"
              />
              <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <p class="card-text">
                  {{ project.desc }}
                </p>
                <a :href="project.github" target="blank" class="btn fs-5"
                  >GitHub</a
                >
                <a
                  :href="project.netlify"
                  target="blank"
                  class="btn mx-3 fs-5"
                  id="btn"
                  >Live</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },

  mounted() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>
<style scoped>
.project {
  min-height: 100vh;
  background-color: #008080;
}
.btn {
  color: white;
  background-color: #008080;
}
.btn:hover {
  background-color: black;
  color: white;
}
.row {
  --bs-gutter-x: 0;
}
.card {
  background-color: black;
  color: white;
  border: 3px solid white;
  border-radius: 25px;
  min-height: 50vh !important;
}
img {
  border-radius: 25px;
}
</style>
