const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      message:'none'
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
    },
    setMessage(e){
      
      const formData = new FormData(e.currentTarget);
      const {text} = Object.fromEntries(formData);
      this.message = text;
      e.currentTarget.reset()
    }
    
  }
});

app.mount('#events');
