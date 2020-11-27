import { getSampleData } from "@/apis/sample";
// @ts-check
const state = {
  sample: "",
  /** @type { import("vue-router").RouteConfig[] } */
  routes: [],
};

const SET_SAMPLE = "SET_SAMPLE";
const SET_ROUTES = "SET_ROUTES";
const mutationTypes = {
  SET_SAMPLE,
  SET_ROUTES,
};

/** @type {import("vuex/types").MutationTree<typeof state>} */
const mutations = {
  [SET_SAMPLE]: (state, sample) => {
    state.sample = sample;
  },
  [SET_ROUTES]: (state, routes) => {
    state.routes = routes;
  },
};
/** @type {import("vuex/types").ActionTree<typeof state>} */
const actions = {
  getSample: ({ commit }) => {
    return new Promise((resolve, reject) => {
      getSampleData().then((res) => {
        const { data } = res;
        if (data && data.length > 0) {
          commit(SET_ROUTES, data);
          resolve(data);
        } else {
          reject();
        }
      });
    });
  },
};

/** @type {import("vuex/types").GetterTree<typeof state>} */
const getters = {
  sample: (state) => state.sample,
  routes: (state) => state.routes,
};

export default {
  namespaced: true,
  state,
  mutations,
  mutationTypes,
  actions,
  getters,
};
