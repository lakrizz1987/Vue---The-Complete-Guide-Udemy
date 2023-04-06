const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Finish the course!',
            courseLink: 'https://vuejs.org/guide/quick-start.html#using-vue-from-cdn'
        }
    }
})

app.mount('#user-goal');

