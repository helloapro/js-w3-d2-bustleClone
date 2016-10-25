import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("story");
  },

  actions:{
    saveStory(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
    },
    deleteStory(story){
      story.destroyRecord();
    },
    updateStory(story, params){
      console.log(story);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          story.set(key,params[key]);
        }
      });
      story.save();
    }
  }
});
