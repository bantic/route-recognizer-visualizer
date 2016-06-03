# Route-recognizer-visualizer

A visualizer showing how recognition of routes will change in route-recognizer.

Shows side-by-side differences between how a given URL will be recognized in the
current version of RR and latest RR.

See [Route-Recognizer PR #91](https://github.com/tildeio/route-recognizer/pull/91).


### Notes

Deploy via `npm run deploy`.

To update the "new" version of route-recognizer:

  * In the RR repo directory:
  *  Modify the global name of RR to RouteRecognizerNew ([this line](https://github.com/tildeio/route-recognizer/blob/master/lib/route-recognizer.umd.js#L9))
  * `ember build`
  * `cp dist/route-recognizer.js* this/repo/vendor/route-recognizer/new/`
  * (this repo) Update index.hbs to point to the the commit of RR that you built
