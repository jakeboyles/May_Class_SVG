 var waypoint = new Waypoint({
  element: document.getElementById('clickMe'),
  handler: function(direction) {
      if(direction=='up')
      {
            var background = document.getElementById('f4_feature_box');
            background.style.animationName = "blowupbox";
      }
  },
  offset: 200 
})
