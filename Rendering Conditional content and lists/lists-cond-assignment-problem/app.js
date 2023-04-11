const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            value: '',
            isVisible: true
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.value)
            this.value = '';
        },
        showHandler(){
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment')