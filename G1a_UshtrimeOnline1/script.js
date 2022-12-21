
        /* const emailElement = document.querySelector('#email');

        function handleChange (event) {
            const email = event.target.value;
            const h1Element = document.querySelector('h1');
            h1Element.innerText = email;

            //console.log(event.target.value);
        }

        emailElement.addEventListener('input', handleChange); */

        Vue.createApp({
            data() {
                return {
                    email: '',
                }
            },methods: {
                handleInput(event){
                    this.email = event.target.value
                }
            }
        }).mount('#app');
 