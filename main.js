const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false



        }
    },

    methods: {
        updateCart(id) {
            this.cart.push(id)
            console.log('clicked from main')
        },

        removeItem(id) {
            this.cart.pop(id)
            console.log('clicked from main removed')
        },
        realClick() {
            console.log('real clicked')
        },
        // finalAdd(review) {
        //     this.reviews.push(review)

        // }


    },



})
