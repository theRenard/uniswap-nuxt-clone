import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = () => ({
  tokens: {},
  token_one: null,
  token_two: null,
});

export default {
  mutations,
  actions,
  getters,
  state,
};