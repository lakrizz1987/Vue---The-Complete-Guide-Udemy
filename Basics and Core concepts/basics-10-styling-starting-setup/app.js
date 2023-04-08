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
                this.isSelectBoxA = true;
            }else if(box == 'B'){
                this.isSelectBoxB = true;
            }else{
                this.isSelectBoxC = true;
            }
        }
    }
}).mount('#styling') 