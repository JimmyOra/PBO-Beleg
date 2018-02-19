var vue= new Vue({
    el: "#platinput",
    data: {
      plattform: "",
      url: "https://www.facebook.com/",
      stakeholder: []
    },
    created: function(){
      $.getJSON('static/process.json',function(json){
        this.stakeholder = json.process.stakeholder;
        console.log(this.stakeholder);
      });
    },
  });

  var telvue= new Vue({
    el: "#telinput",
    data: {
     number:""
    },
  });