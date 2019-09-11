new Vue({
    el:"#app",
    data:{
        name:"Vue !",
        number:100,
        isOK:true,
        counter:0,
        counter2:0,
        x:0,
        y:0,
        title:"Счетчик",
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
        },
        riceCounter(num,str){
            this.counter+=num;
            this.title=str;
            if (num===1){
                event.target.style.color='blue';
            }
            else if(num===5){
                event.target.style.color='green';
            }
            else if(num===10){
                event.target.style.color='red';
            }
        },
        onHover(event){
            event.target.style.color="red";
        },
        /*для урока 8*/
        handleMouseMove(event){
           this.x=event.clientX;
           this.y=event.clientY;
        }

    }
});