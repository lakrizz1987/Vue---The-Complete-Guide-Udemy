const app = Vue.createApp({
});

app.component('friends-component',{
    template: `
    <li v-for="friend of friends">
          <h2>{{friend.name}}</h2>
          <button>Show Details</button>
          <ul>
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li>
        <li>
    `,
    data() {
        return {
            friends: [
                { id: '1', name: 'Ivaylo', phone: 0888996547, email: 'ivo@foo.com' },
                { id: '1', name: 'Pesho', phone: 088899447777, email: 'peshkata@foo.com' },
            ]
        }
    }
});

app.mount('#app')