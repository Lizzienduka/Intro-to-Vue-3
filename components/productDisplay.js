app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <!-- solution -->
          <p>{{ sale }}</p>
          <!-- solution -->
          <p> Shipping: {{shipping}}</p>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
            class="color-circle" :style="{ backgroundColor: variant.color }">
          </div>

          <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add
            to
            Cart</button>
          <button class="button" :class="{ disabledButton: !inStock }"  v-on:click="removeCart">Remove</button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
      
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            SelectedVatiant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['L', 'S', 'M'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            reviews: [],
            onSale: true,




        }
    },

    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.SelectedVatiant].id
            )
            console.log('clicked from product')
        },

        updateVariant(index) {
            this.SelectedVatiant = index;
            console.log(index)

        },

        removeCart() {
            this.$emit('rm-fm-cart', this.variants[this.SelectedVatiant].id)
            console.log('minus click from product')
        },
        addReview(review) {
            this.reviews.push(review)
            console.log(this.reviews)

        },


    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.SelectedVatiant].image
        },
        inStock() {
            return this.variants[this.SelectedVatiant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + this.product + " is on sale"
            }

            return ''
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }

    }

})