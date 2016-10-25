import Ember from 'ember';

export default Ember.Component.extend({
  editStory: false,
  actions:{
    editFormShow(){
      this.set('editStory', true);
    },

    updateStory(story){
      var params = {
        author: this.get('author'),
        headline: this.get('headline'),
        content: this.get('content'),
        image: this.get('image'),
      };

      this.set('editStory', false);
      this.sendAction('updateStory', story, params);
    }
  }

});
