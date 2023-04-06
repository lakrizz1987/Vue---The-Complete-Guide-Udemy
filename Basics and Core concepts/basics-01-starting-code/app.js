const app = Vue.createApp({
    data() {
        return {
            courseGoal: '',
            courseLink: 'https://vuejs.org/guide/quick-start.html#using-vue-from-cdn'
        }
    },
    methods: {
        randomText() {
            const n = Math.random();

            if (n < 0.5) {
                return 'Learn Vue!'
            } else {
                return 'Master Vue!'
            }
        },
        setCourseGoal() {
            const n = Math.random();

            if (n < 0.5) {
               return this.courseGoal = 'Finish the course!'
            } else {
               return this.courseGoal = 'You are Done!'
            }
        }
    }
})

app.mount('#user-goal');

