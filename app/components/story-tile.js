import Ember from 'ember';

export default Ember.Component.extend({
  inAdmin: false,
  didRender(){
    $('.ui.accordion').accordion();
  },
  actions:{
    deleteStory(story){
      console.log("Success");
      this.sendAction("deleteStory", story);
    },
    updateStory(story, params){
      this.sendAction("updateStory", story, params)
    }
  }
});
