const state = {
  content: "测试一下的",
};

const mutations = {
  updateContent(state, payload) {
    state.content = payload;
  },
};

const getters = {
  getContent(state) {
    return state.content;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
