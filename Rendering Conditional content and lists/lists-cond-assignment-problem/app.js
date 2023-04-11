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
            if(this.value != ''){
                this.tasks.push(this.value)
                this.value = '';
            }
            
        },
        showHandler(){
            this.isVisible = !this.isVisible;
        }
    },
    computed:{
        buttonText(){
            return this.isVisible ? 'Hide' : 'Show'
        }
    }
});

app.mount('#assignment')