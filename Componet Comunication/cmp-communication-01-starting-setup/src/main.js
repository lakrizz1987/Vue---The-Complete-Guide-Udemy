import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import AddContact from './components/AddContact.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('add-contact', AddContact);
app.mount('#app');
