const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            value: ''
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.value)
            this.value = '';
        }
    }
});

app.mount('#assignment')