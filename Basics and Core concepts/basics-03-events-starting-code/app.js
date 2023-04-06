const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods:{
    add(n){
     this.counter+=n
    },
    remove(n){
      this.counter-=n
    }
  }
});

app.mount('#events');
