new Vue({
    el:"#app",
    data:{

        name:"Vue !",
        number:100,
        isOK:true,
        counter:0,
        counter2:0,
        counter3:0,
        inputValue:'  ',
        x:0,
        y:0,
        title:"Счетчик",
        string:"My name is Ivan",
        url:"http://google.com",
        link: '<a href="http://google.com">Google</a>',
        isActive:false /*для урока 12*/,
        color:''/*для урока 12 ч2*/
    },
    computed:{
        getCssClasses(){
            return{
                'red':this.isActive,
                'green':!this.isActive
            };
        }
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
        },
        /*для урока 9*/
        AlertValue(event){
            alert(event.target.value);
        }


    }
});