function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            rounds: 0,
            gameOver: false,
            condition: null
        }
    },
    watch: {
       
        monsterHealth(value){
            if (value <= 0 ) {
                this.condition = 'player';
                this.gameOver = true;
            } else if (value > 0 && this.playerHealth == 0) {
                this.condition = 'monster'
                this.gameOver = true;
            } else if(value == 0 && this.playerHealth == 0) {
                this.condition = 'draw'
                this.gameOver = true;
            }
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
                return
            } else {
                this.monsterAttack()
            }
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
        },
        health(){
            this.rounds += 1;
            this.playerHealth += randomNumber(6, 8);
            if(this.playerHealth > 100){
                this.playerHealth = 100;
            }
            this.monsterAttack()
        },
        surrender(){
            this.gameOver = true;
            this.condition = 'monster'
        }
    }
});

app.mount('#game')