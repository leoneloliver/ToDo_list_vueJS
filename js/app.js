var taskApp = new Vue({
  el: "#taskApp",
  data: {
    msgError: "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>&nbsp;Please type somenthing.",
    showed: false,
    tasks: [
      { name: "Fist task" , done: false },
      { name: "Buy something", done: false },
      { name: "Book trip to Brazil", done : false }
    ]
  },
  methods: {
    addTask: function(e){
      e.preventDefault();
      if(this.tasks.name=="" || this.tasks.name==undefined){
        this.showed = true;
      }else{
        this.showed = false;
        this.tasks.push({
          name: this.tasks.name,
          done: false
        });
      }
      this.tasks.name = '';
    },
    deleteTask: function(task){
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }
  }
})
