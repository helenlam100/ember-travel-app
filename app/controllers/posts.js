import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function(){
      console.log("click button");
      var name = this.get('newName');
      var description = this.get('newDescription');
      var photo = this.get('newPhoto');
      var post = this.store.createRecord('post', {name: name, description: description, photo: photo});

      post.save();
      this.set('newName', ' ');
      this.set('newTitle', ' ');
      this.set('message', "Successfully created a travel post.");
    },

    delete: function(post){
      console.log("delete");
      var _this = this;
      post.destroyRecord().then(function(){
        _this.set('message', "This post was deleted.");
      });
    }


  }
});
