

var vue = new Vue({
  el: "#allinput",
  data: {
    number: "",
    stakeholder: [],
    index: 0,
  },
  created: function () {
    $.getJSON('static/process2.json', function (json) {
      vue.$data.stakeholder = json;
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
    },
    saveFile: function() {
      const data = JSON.stringify(this.stakeholder)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = "process2.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
  },
  onFileChange(e) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createImage(files[0]);
  },
  createImage(file) {
    var image = new Image();
    var reader = new FileReader();
    var vm = this;

    reader.onload = (e) => {
      vm.stakeholder[vm.index].id = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  }
});