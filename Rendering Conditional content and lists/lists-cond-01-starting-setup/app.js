const app = Vue.createApp({
  data() {
    return {
      enteredGoal:'',
       goals: [],
      
    };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoal);
      this.enteredGoal = '';
    },
    removeGoal: function(index){
      this.goals.splice(index,1)
    }
  }
});

app.mount('#user-goals');
