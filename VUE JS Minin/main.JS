new Vue({
    el:"#app",
    data:{
        name:"Vue !",
        number:100,
        isOK:true,
        string:"My name is Ivan",
        url:"http://google.com",
        link: '<a href="http://google.com">Google</a>'
    },
    methods:{
        changeName:function(event){
this.name=event.target.value;
        },
        sayHello:function(){
            return "I am function";
        }

    }
})