import DS from 'ember-data';

export default DS.Model.extend({
  photo: DS.attr('string'),
  description: DS.attr('string'),
  name: DS.attr('string')
});
