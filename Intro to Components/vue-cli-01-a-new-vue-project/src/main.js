import { createApp } from 'vue';
import App from './App.vue';
import FriendList from './Components/FriendList.vue'

const app = createApp(App)
app.component('friend-list',FriendList);

app.mount('#app');
