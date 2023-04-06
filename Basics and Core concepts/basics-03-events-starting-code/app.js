const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods:{
    add(n){
     this.counter+=n
    },
    remove(n){
      this.counter-=n
    },
    setName(e){
      this.name = e.target.value
    }
  }
});

app.mount('#events');
