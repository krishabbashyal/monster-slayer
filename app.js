const app = Vue.createApp({
    data(){
        return {
            gameOver: false,
            battleLog: [],
            specialReady: false,
            healReady: false,
            playerHealth: 100,
            monsterHealth: 100,
            damageGiven: 0,
            damageTaken: 0,
            healAmmt: 0,
        }
    },
    methods: {
        specials(){
            let num = Math.floor(Math.random() * 100) + 1
            console.log(num)

            if (num <= 20){
                this.healReady = true
            }

            else if (num >= 80){
                this.specialReady = true
            }
        },
        attack(){
            this.damageGiven = Math.floor(Math.random() * 5) + 1
            this.monsterHealth -= this.damageGiven
            this.battleLog.push('Player hits monster for ' + this.damageGiven + 'hp ' )

            this.damageTaken = Math.floor(Math.random() * 10) + 1
            this.playerHealth -= this.damageTaken
            this.battleLog.push('Monster hits player for ' + this.damageTaken + 'hp')
        },
        specialAttack(){
            this.damageGiven = Math.floor(Math.random() * 10) + 5
            this.monsterHealth -= this.damageGiven
            this.specialReady = false
            this.battleLog.push('Player did a special attack for ' + this.damageGiven + 'hp')

            this.battleLog.push('Monster is stunned, did not attack!')
        },
        heal(){
            this.healAmmt = Math.floor(Math.random() * 20) + 1
            if (this.playerHealth + this.healAmmt > 100){
                this.playerHealth = 100
                this.battleLog.push('Player used heal! - Max Health')
            }
            else {
            this.playerHealth += this.healAmmt
            this.battleLog.push('Player used heal! Restored ' + this.healAmmt + 'hp')
            }
            this.healReady = false
        },
        surrender(){
            this.gameOver = true
            this.battleLog.push('Player ran away, Monster wins!')
        },
        playAgain(){
            this.gameOver = false,
            this.battleLog = [],
            this.specialReady = false,
            this.healReady = false,
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.damageGiven = 0,
            this.damageTaken = 0,
            this.healAmmt = 0
        }
    },
    watch: {
        playerHealth(){
            if (this.playerHealth <= 0){
                this.gameOver = true
                this.battleLog.push('Player has died, Monster wins!')
            }
        },
        monsterHealth(){
            if (this.monsterHealth <= 0){
                this.gameOver = true
                this.battleLog.push('Monster has died, Player wins!')
            }
        }
    }

})

app.mount('#game')