function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            rounds: 0
        }
    },
    computed: {
        playerHealthBarStyle() {
            return { width: this.playerHealth + '%' }
        },
        monsterHealthBarStyle() {
            return { width: this.monsterHealth + '%' }
        },
        roundsCounter() {
            if (this.rounds == 0) {
                return true
            }
            if (this.rounds % 3 !== 0) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        playerAttack() {
            this.rounds += 1;
            this.monsterHealth -= randomNumber(6, 15)
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.monsterAttack()
        },
        monsterAttack() {
            this.playerHealth -= randomNumber(6, 15)
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
        specialAttack() {
            this.rounds = 0;
            this.monsterHealth -= randomNumber(10, 25)
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.monsterAttack()
        }
    }
});

app.mount('#game')