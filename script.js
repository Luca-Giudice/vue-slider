console.log('vue ok', Vue);

const app =createApp({
    name:'Carousel',
    data() {
        return {
            currentIndex: 0,
            pictures,
        }

    },
    computed: {
        lastElementIndex() {
            return tjis.pictures.length -1;

        }

    },
    methods: {
        gotToPrev() {
            this.currentIndex--;
        },

        gotToNext() {
            this.currentIndex++;
        }
    }
});

app.mount('#root');