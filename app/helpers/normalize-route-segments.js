import Ember from 'ember';
let { RouteRecognizerNew } = window;
let { Normalizer: { normalizeSegment } } = RouteRecognizerNew;

export function normalizeRouteSegments([routeStr]) {
  if (!routeStr) { return []; }

  let normalized = [];
  let error = false;
  let parts = routeStr.split('/');
  parts.forEach(part => {
    if (part.length) {
      try {
        normalized.push(normalizeSegment(part));
      } catch(e) {
        console.log('error normalizing segment',part,e);
        error = true;
      }
    }
  });

  if (error) {
    return [];
  }

  return normalized;
}

export default Ember.Helper.helper(normalizeRouteSegments);
