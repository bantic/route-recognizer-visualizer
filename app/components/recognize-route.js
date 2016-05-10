let { RouteRecognizer, RouteRecognizerNew } = window;
import Ember from 'ember';

export default Ember.Component.extend({
  error: null,
  routeStr: null,
  pathStr: null,
  matchedRoute: null,
  useNew: false,

  onInput: Ember.observer('routeStr', 'pathStr', function() {
    this.set('error', null);
    this.set('matchedRoute', null);

    let Recognizer = this.get('useNew') ? RouteRecognizerNew : RouteRecognizer;

    let {routeStr, pathStr} = this.getProperties('routeStr', 'pathStr');

    if (!routeStr || !pathStr) { return; }

    let rr = new Recognizer();
    try {
      rr.add([{ path: routeStr, handler: {} }]);
    } catch (e) {
      this.set('error', `Error adding route: ${e}`);
    }

    let matches;
    try {
      matches = rr.recognize(pathStr);
    } catch(e) {
      this.set('error', `Error recognizing path: ${e}`);
    }

    if (!!matches) {
      this.set('matchedRoute', {
        route: routeStr,
        params: matches[0].params,
        isDynamic: matches[0].isDynamic
      });
    }
  })
});
