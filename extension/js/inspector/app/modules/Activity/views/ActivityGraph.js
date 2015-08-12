define(['backbone', 'marionette', 'templates/devTools/activity/graph', 'text!templates/devTools/activity/graph.html'
  ], function(Backbone, Marionette, Graph, tpl) {

  var ActivityGraph = Backbone.Marionette.ItemView.extend({
    
    template: tpl,

    tagName: "div",

    className: 'activity-graph',

    defaults: {
      activityCollection: undefined
    },

    initialize: function() {
    },

    onShow: function() {
      var formattedData = Graph.formatData(this.options.activityCollection);
      console.log("formattedData: ", formattedData);
      Graph.displayGraph(formattedData.data, formattedData.startX, formattedData.endX);
    }

  });

  return ActivityGraph;

});
