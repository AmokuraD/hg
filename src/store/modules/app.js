import { getSampleData } from "@/apis/sample";
// @ts-check
const state = {
  sample: "",
};

const mutations = {
  /**
   * @param { state } state
   * @param { string } sample
   * @return { void }
   */
  setSample: (state, sample) => {
    state.sample = sample;
  },
};

const actions = {
  getSample: ({ commit }) => {
    return new Promise((resolve, reject) => {
      getSampleData().then((res) => {
        const { data } = res;
        if (data && data.length > 0) {
          commit("setSample", data);
          resolve(data);
        } else {
          reject();
        }
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
