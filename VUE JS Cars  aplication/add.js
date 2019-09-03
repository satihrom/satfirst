/*конструкция принимающая значения параметров и возращающая их как объект*/
const car=(name,model,owner,year,phone,image)=>({name,model,owner,year,phone,image});
const log=(text,type,date=new Date() )=>({text,type,date});
const cars=[
   car ("Ferrari","diabolo","Max",2015,"+7 219 785 22 21","car1.jpg"),
   car ("Audi","A6","Vlad",2017,"+7 229 734 22 31","car2.jpg"),
   car ("Tesla","X1","Vladimir",2018,"+7 233 777 22 22","car3.jpg")
];


new Vue ({
    el:'#app',
    data:{
    cars:cars,
    car:cars[0],
    selectedCarIndex:0,
    phoneVisibility:false,
    search:'',
    modalVisibility:false,
    logs:[]


    },
    methods:{
       selectCar: function(index){
         this.car=cars[index];  
         this.selectedCarIndex=index;
       },
       NewOrder(){
          this.modalVisibility=false;
          this.logs.push(
             log(`Success order: ${this.car.name}-${this.car.model}`,'ok')
          );

       },
       CancelOrder(){
         this.modalVisibility=false;
         this.logs.push(
            log(`Cancelled order: ${this.car.name}-${this.car.model}`,'cnl')
         );

       }
    },
    computed:{
       PhoneBtnText(){
          return this.phoneVisibility ? 'Hide phone': 'Show phone';
       },
       
    /*
    FilteredCars(){
       var self=this;
       const Filtered=this.cars.filter(function(car){
          return car.name.indexOf(self.search) > -1;
       });
       return Filtered;

    }
    */
   //изменный под vue синтаксис для функции FilteredCars со стрелочными указаниями для функций  ниже
   FilteredCars(){
      return this.cars.filter(car=>{
         return car.name.indexOf(this.search)>-1 || car.model.indexOf(this.search)>-1
      });
   }


},
filters:{
   date(value){
    return value.toLocaleString();
   }
}
});