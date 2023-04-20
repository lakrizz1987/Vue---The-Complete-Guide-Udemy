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
            condition: null,
            log:[]
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
            let randomNum = randomNumber(6, 15)
            this.log.unshift(`Player attack with ${randomNum} damage`)
            this.monsterHealth -= randomNum
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
                return
            } else {
                this.monsterAttack()
            }
        },
        monsterAttack() {
            let randomNum = randomNumber(6, 15)
            this.log.unshift(`Monster attack with ${randomNum} damage`)
            this.playerHealth -= randomNum
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
        specialAttack() {
            this.rounds = 0;
            let randomNum = randomNumber(10, 25)
            this.log.unshift(`Player attack with SPECIAL ${randomNum} damage`)
            this.monsterHealth -= randomNum
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.monsterAttack()
        },
        health(){
            this.rounds += 1;
            let randomNum = randomNumber(6, 10)
            this.log.unshift(`Player add  ${randomNum} health`)
            this.playerHealth += randomNum
            if(this.playerHealth > 100){
                this.playerHealth = 100;
            }
            this.monsterAttack()
        },
        surrender(){
            this.log.unshift(`Player SURRENDER!`)
            this.gameOver = true;
            this.condition = 'monster'
        },
        restart(){
            this.gameOver = false;
            this.condition = null;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        }
    }
});

app.mount('#game')