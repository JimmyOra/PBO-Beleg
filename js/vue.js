

var vue = new Vue({
  el: "#allinput",
  data: {
    number: "",
    stakeholder: [],
    index: 0,
  },
  created: function () {
    $.getJSON('static/process.json', function (json) {
      vue.$data.stakeholder = json.process.stakeholder;
    });
  },
  filters: {
    firstname: function (value) {
      if (!value) return '';
      value = value.toString();
      var pos = value.lastIndexOf(" ");
      if (pos === -1)
        return value;
      return value.slice(0, pos);


    },
    lastname: function (value) {
      if (!value) return '';
      value = value.toString();
      var pos = value.lastIndexOf(" ");
      if (pos === -1)
        return "";
      return value.slice(pos);

    }
  },
  methods: {
    setid: function (index) {
      this.index = index;
    }
  }
});