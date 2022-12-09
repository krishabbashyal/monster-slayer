const app = Vue.createApp({
    data(){
        return {
            surrendered: false,
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
        attack(){
            this.damageGiven = Math.floor(Math.random() * 10) + 1
            this.monsterHealth - this.damageGiven
            this.battleLog.push('Player hits monster for ' + this.damageGiven + 'hp ' )

            this.damageTaken = Math.floor(Math.random() * 15) + 1
            this.playerHealth -= this.damageTaken
            this.battleLog.push('Monster hits player for ' + this.damageTaken + 'hp |||| DEBUG: ' + this.playerHealth + "/100")
        },
        specialAttack(){
            this.damageGiven = Math.floor(Math.random() * 25) + 1
            this.monsterHealth -= this.damageGiven
            this.battleLog.push('Player did a special attack for ' + this.damageGiven + 'hp')

            this.battleLog.push('Monster is stunned, did not attack!')
        },
        heal(){
            this.healAmmt = Math.floor(Math.random() * 20) + 1
            if (this.playerHealth + this.healAmmt > 100){
                this.playerHealth = 100
                this.battleLog.push('Player used heal! - Max Health hp |||| DEBUG: ' + this.playerHealth + "/100")
            }
            else {
            this.playerHealth += this.healAmmt
            this.battleLog.push('Player used heal! Restored ' + this.healAmmt + 'hp |||| DEBUG: ' + this.playerHealth + "/100")
            }
        },
        surrender(){
            this.surrendered = true
            this.battleLog.push('Player ran away, Monster wins!')

        }
    },

})

app.mount('#game')