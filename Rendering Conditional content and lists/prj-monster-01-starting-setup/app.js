function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

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
    },
    methods: {
        playerAttack() {
            this.monsterHealth -= randomNumber(6, 15)
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.monsterAttack()
        },
        monsterAttack(){
            this.playerHealth -= randomNumber(6, 15)
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        }
    }
});

app.mount('#game')