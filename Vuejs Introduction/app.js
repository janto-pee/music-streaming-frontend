Vue.createApp({
data(){
    return {
        firstName: '',
        lastName: 'Joy',
        age: 24,
        educated:false,
        inSubmission: true,
        errorClass: 'text-red-500',
        webMenu: ['Home', 'About us', 'Our Services', 'Contact US'],
        softwareStacks: [
            {platform: 'web', stack: 'Javascript', framework: 'Vuejs'},
            {platform: 'mobile', stack: 'Javascript', framework: 'React Native'},
            {platform: 'IOT', stack: 'Python', framework: 'TensorFlow'},
            {platform: 'DB', stack: 'SQL', framework: 'Microsoft SQL'},
        ]
    }
},
methods: {
    increaseAge(){
        return this.age++
    },
    decreaseAge(){
        return this.age--
    },
    submitForm(){
        console.log('My name is ', this.firstName)
    }
},
}).mount('#app')