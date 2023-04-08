Vue.createApp({
    data() {
        return {
            name: '',
            toggle: true,
            color: '',
        }
    },
    computed: {
        setClass() {
           /* let className = ''
            if (this.name === 'user1') {
                className = 'user1'
            } else if (this.name === 'user2') {
                className = 'user2'
            }

            if(this.toggle){
                className += ' visible'
            }else{
                className += ' hidden'
            }

            return className */

            return {
                user1: this.name === 'user1',
                user2: this.name === 'user2',
                visible: this.toggle,
                hidden: !this.toggle
            }
        },
        setColor(){
            return this.color
        }

    },
    methods: {
        toggleClass() {
            this.toggle = !this.toggle;
            console.log(this.toggle)
        }
    }
}).mount('#assignment')