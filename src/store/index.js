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
    async fetchProjects(context){
      try {
        let { projects } = await (
          await fetch("https://del1rius.github.io/Data/projects.json")
        ).json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    }
}
})
