import Ember from 'ember';

export function joinArray([arr]) {
  return arr.join(', ');
}

export default Ember.Helper.helper(joinArray);
