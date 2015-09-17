import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("projects",{path:'/'});
  this.route("add");
  this.route("edit",{path:'project/edit/:id'});
  this.route("dashboard");
});

export default Router;
