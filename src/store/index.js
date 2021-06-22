import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setItem(state, todo) {
      state.todos.push(todo);
    },
    deleteItem(state, index) {
      state.todos.splice(index, 1);
    }
  },
  getters: {
    todos: state => state.todos,
  },
  actions: {
    setTodo({ commit }, todo) {
      commit('setItem', todo);
    },
    deleteTodo({commit}, index){
      console.log(index)
      commit('deleteItem', index);
    }
  },
})
