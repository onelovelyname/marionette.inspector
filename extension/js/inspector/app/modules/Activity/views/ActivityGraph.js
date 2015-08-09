define(['backbone', 'marionette', 'text!templates/devTools/activity/graph.html'
  ], function(Backbone, Marionette, tpl) {

  var ActivityGraph = Backbone.Marionette.ItemView.extend({
    
    template: tpl,

    tagName: "p",

    className: 'activity-graph',

    defaults: {
      activityCollection: undefined
    }

  });

  return ActivityGraph;

});
