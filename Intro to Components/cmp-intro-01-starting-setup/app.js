const app = Vue.createApp({
});

app.component('friends-component', {
    template: `
    <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{toggle ? 'Hide': 'Show'  }} Details</button>
          <ul v-show="toggle">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li>
        <li>
    `,
    data() {
        return {
            friend:
                { id: '1', name: 'Ivaylo', phone: 0888996547, email: 'ivo@foo.com' },
            toggle: false
        }
    },
    methods: {
        toggleDetails(){
            this.toggle = !this.toggle;
        }
    }
});

app.mount('#app')