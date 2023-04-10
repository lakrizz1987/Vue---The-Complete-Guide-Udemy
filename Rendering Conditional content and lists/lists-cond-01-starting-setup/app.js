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
    }
  }
});

app.mount('#user-goals');
