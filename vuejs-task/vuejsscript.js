const VueApp = {
    data() {
        return {
            products: [
                {
                    title: "product-1",
                    price: 152,
                },
                {
                    title: "product-2",
                    price: 132,
                },
                {
                    title: "product-3",
                    price: 52,
                },
                {
                    title: "product-4",
                    price: 852,
                },
                {
                    title: "product-5",
                    price: 15,
                },
                {
                    title: "product-6",
                    price: 792,
                },
                {
                    title: "product-7",
                    price: 1520,
                },
            ]
        }
    },
    methods: {
        sortArray(typeSort) {
            this.products.sort(function (a, b) {
                if (a.price != b.price) {
                    if (typeSort === 'ascending') return a.price - b.price;
                    else return b.price - a.price;
                } else {
                    return 0;
                }
            })
        },
    }
}

Vue.createApp(VueApp).mount('#app');