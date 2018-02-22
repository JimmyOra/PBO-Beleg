

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
    saveFile: function () {
      const data = JSON.stringify(this.stakeholder)
      const blob = new Blob([data], { type: 'text/plain' })
      const e = document.createEvent('MouseEvents'),
        a = document.createElement('a');
      a.download = "process2.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },
    onFileChange: function (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage: function (file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.stakeholder[vm.index].id = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    remove: function (index) {
      if (this.stakeholder.length == 1)
        this.empty(this.stakeholder[0]);

      else
        this.stakeholder.splice(index, 1);
    },
    empty: function(sh){

      sh.id=""
     
      sh.name= "unknown",
      sh.type= "group closed",
      sh.contact.contactPerson="TODO";
      sh.contact.postAddress="TODO";
      sh.contact.email="TODO";
      sh.contact.name="TODO";
      sh.contact.phone="TODO";
      sh.contact.telefax="TODO";
    },
    add: function(){
      var n = Object.assign({}, this.stakeholder[0]);
      this.empty(n);
      this.stakeholder.push(n);
    },
    animateButton: function(event, scale, duration, elasticity) {
      anime.remove(event.currentTarget);
      anime({
        targets: event.currentTarget,
        scale: scale,
        duration: duration,
        elasticity: elasticity
      });
    }
  },
  computed: {
    eval: function () {
      var answer = {
        right: true,
        message: "Alles in Ordnung :)"
      }
      var re = /^[A-Za-z_ äÄöÖüÜß]+$/;
      var contact = this.stakeholder[this.index].contact;
      if (!re.test(contact.contactPerson)) {
        if (contact.contactPerson != "" && contact.contactPerson != "TODO") {
          answer.right = false;
          answer.message = "Name enthält sonderbare Zeichen";
          return answer;
        }
      }
      re = /^.*[A-Za-z]+.*$/;
      if (!re.test(contact.postAddress)) {
        if (contact.postAddress != "" && contact.postAddress != "TODO") {
          answer.right = false;
          answer.message = "Anschrift sollte Buchstaben enthalten";
          return answer;
        }
      }
      re = /^.*[0-9]+.*$/;
      if (!re.test(contact.postAddress)) {
        if (contact.postAddress != "" && contact.postAddress != "TODO") {
          answer.right = false;
          answer.message = "Anschrift sollte Ziffern für die Straßennummer enthalten";
          return answer;
        }
      }
      re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!re.test(contact.email)) {
        if (contact.email != "" && contact.email != "TODO") {
          answer.right = false;
          answer.message = "ungültige email";
          return answer;
        }
      }
      re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
      if (!re.test(contact.website)) {
        if (contact.website != "" && contact.website != "TODO") {
          answer.right = false;
          answer.message = "ungültige Website";
          return answer;
        }
      }
      return answer;
    }
  }
});