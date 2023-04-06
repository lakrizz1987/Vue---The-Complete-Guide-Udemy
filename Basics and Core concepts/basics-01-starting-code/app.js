const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Finish the course!',
            courseLink: 'https://vuejs.org/guide/quick-start.html#using-vue-from-cdn'
        }
    },
    methods:{
        randomText(){
            const n = Math.random();

            if(n < 0.5){
                return 'Learn Vue!'
            }else{
                return 'Master Vue!'
            }
        }
    }
})

app.mount('#user-goal');

