<template >
    <div
    v-for="project in projects"
    :key="project.id"
    :project="project"
    class="col-6 col-md-4 mb-5 col-12 col-md-4 mx-auto d-flex justify-content-center"
  >
    <div>
      <div class="col-4">
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
                {{ projects.desc }}
              </p>
              <a :href="project.github" target="blank" class="btn btn-black text-white"
                >GitHub</a
              >
              <a
                :href="project.netlify"
                target="blank"
                class="btn btn-black text-white mx-3"
                id="btn"
                >Live</a
              >
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
        projects () {
            return this.$store.state.projects
        }
    },

    mounted() {
        this.$store.dispatch("fetchProjects")
    }
}
</script>
<style scoped>
    .projects {
        background-color: #008080;
        min-height: 100vh;
    }
    .i-frame {
        border: 3px solid white;
        width: 100%;
        height: 70vh;
    }
</style>