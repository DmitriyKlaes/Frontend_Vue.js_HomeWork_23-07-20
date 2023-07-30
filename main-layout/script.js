const Program = {
    data() {
        return {
            items: [
                {
                    src: "./img/bottom-image1.png",
                    insideText: "Kitchan Design",
                    heading: "Let’s Get Solution For Building Construction Work",
                    date: "30 july, 2023"
                },
                {
                    src: "./img/bottom-image2.png",
                    insideText: "Living Design",
                    heading: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "30 july, 2023"
                },
                {
                    src: "./img/bottom-image3.png",
                    insideText: "Interior Design",
                    heading: "Best For Any Office & Business Interior Solution",
                    date: "30 july, 2023"
                },
                {
                    src: "./img/bottom-image4.png",
                    insideText: "Kitchan Design",
                    heading: "Let’s Get Solution For Building Construction Work",
                    date: "30 july, 2023"
                },
                {
                    src: "./img/bottom-image5.png",
                    insideText: "Living Design",
                    heading: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "30 july, 2023"
                },
                {
                    src: "./img/bottom-image6.png",
                    insideText: "Interior Design",
                    heading: "Best For Any Office & Business Interior Solution",
                    date: "30 july, 2023"
                },
            ],
        }
    },
    methods: {
        firstArrayElements(number) {
            return this.items.slice(0, number);
        }
    },
}

Vue.createApp(Program).mount('#app')