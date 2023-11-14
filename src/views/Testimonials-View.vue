<template >
    <div class="testimonial">
    <div class="row ">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="col-4 mt-4  mb-4">
        <div class="projects">
          <div class="testy">
            <div class="card mx-auto" style="width: 18rem">
              <img
                :src="testimonial.img"
                id="img2"
                class="card-img-top"
                :alt="testimonial.name"
              />
              <div class="card-body">
                <h5 class="card-title fs-3 text-white">{{ testimonial.name }}</h5>
                <p class="card-text fs-5">
                  {{ testimonial.testimonial }}
                </p>
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
        testimonials() {
            return this.$store.state.testimonials;
        },
    },
    mounted() {
        this.$store.dispatch("fetchTestimonials")
    }    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
.testimonial {
    min-height: 100vh;
    background-color: #008080;
}

.card-text {
    font-family: 'Abel', sans-serif;   
}
    
.card {
  min-height: 50rem !important;
  background-color: black;
  border: 3px solid white;
  border-radius: 25px;
  color: #008080;
}

.card:hover {
  background-color: #008080;
  color: black;
  transition: 0.5s ease-in;
}
img {
  border-radius: 21px;
}
</style>
