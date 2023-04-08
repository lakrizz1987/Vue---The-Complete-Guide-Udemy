Vue.createApp({
    data() {
        return {
            isSelectBoxA: false,
            isSelectBoxB: false,
            isSelectBoxC: false,
        }
    },
    methods: {
        selectBox(box){
            if(box == 'A'){
                this.isSelectBoxA = !this.isSelectBoxA;
            }else if(box == 'B'){
                this.isSelectBoxB = !this.isSelectBoxB;
            }else{
                this.isSelectBoxC = !this.isSelectBoxC;
            }
        }
    }
}).mount('#styling') 