const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    computed: {
        playerHealthBarStyle() {
            return { width: this.playerHealth + '%' }
        },
        monsterHealthBarStyle() {
            return { width: this.monsterHealth + '%' }
        }
    }
});

app.mount('#game')