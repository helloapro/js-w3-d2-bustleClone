import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

    saveStory() {
      var params = {
        author: this.get('author'),
        headline: this.get('headline'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNewStory', false);
      this.sendAction('saveStory', params);
    }
  }
});
