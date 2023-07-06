import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
  },
  mutations: {
    setProjects: (state, value) => {
      state.projects = value;
    }
  },
  actions: {
    async fetchProjects (context) {
      try {
        let res = await fetch(" https://del1rius.github.io/Data/projects.json");
        let {projects} = await res.json();
        if (projects) {
          context.commit("setProjects", projects)
        } else {
          context.commit("setProjects", projects)
        }
      } catch(e) {
        console.log(e)
      }
    }
}
})
