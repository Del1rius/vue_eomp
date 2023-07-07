<template >
    <div class="testimonial">
    <div class="row ">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="col-4 mt-4  mb-4">
        <div class="projects">
          <div>
            <div class="card mx-auto" style="width: 18rem">
              <img
                :src="testimonial.img"
                id="img2"
                class="card-img-top"
                :alt="testimonial.name"
              />
              <div class="card-body">
                <h5 class="card-title">{{ testimonial.name }}</h5>
                <p class="card-text">
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
.testimonial {
    min-height: 100vh;
    background-color: #008080;
}   
</style>