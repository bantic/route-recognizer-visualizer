import Ember from 'ember';
let { RouteRecognizerNew } = window;
let { Normalizer: { normalizePath: _normalize } } = RouteRecognizerNew;

export function normalizePath([pathStr]) {
  let normalized;
  try {
    normalized = _normalize(pathStr);
  } catch(e) {
    console.log('error normalizing:',e);
  }

  return normalized;
}

export default Ember.Helper.helper(normalizePath);
