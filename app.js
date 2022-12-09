const app = Vue.createApp({
    data(){
        return {
            specialReady: 'false',
            heal: 'false',
            playerHealth: 100,
            monsterHealth: 100,
        }
    }
})

app.mount('#game')