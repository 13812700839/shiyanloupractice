//通过对象字面量来创建
var stu1={
    name:"zhangsan",
    age:18,
    gender:"male",
    sayHi: function () {
        document.write("h1,my name is "+this.name+"<br>");
    },
};

//通过new Object()创建对象
var stu2=new Object();
(stu2.name="lisi"),
(stu2.age=10),
(stu2.gender="female"),
(stu2.sayHi=function(){
    document.write("h1,my name is "+this.name+"<br>");
});

//通过工厂函数创建对象
function createStudent(name, age, gender){
    var student=new Object();
    student.name=name;
    student.age=age;
    student.gender=gender;
    student.sayHi=function(){
        document.write("h1,my name is "+this.name+"<br>");
    };
    return student;
}
var stu3=createStudent("wangwu", 14, "male");

//自定义构造函数
function Student(name, age, gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.sayHi=function(){
        document.write("h1,my name is "+this.name+"<br>");
    };
}
var stu4=new Student("liuliu", 16, "female");

//遍历对象的属性
function print(student){
    //key储存的是对象属性
    for(var key in student){
        if(key=="sayHi"){
            console.log(student[key]());
        } else{
            document.write(student[key]+"<br>");
        }
    }
}

(function(){
    document.write("<h1>通过对象字面量来创建</h1><hr>");
    document.write(stu1.name+"<br>");
    document.write(stu1.age+"<br>");
    document.write(stu1.gender+"<br>");
    console.log(stu1.sayHi());
    document.write("<h1>通过new Object()创建对象</h1><hr>");
    print(stu2);
    document.write("<h1>通过工厂函数创建对象</h1><hr>");
    print(stu3);
    document.write("<h1>通过自定义构造函数创建对象</h1><hr>");
    print(stu4);
    //删除对象属性
    delete stu4.name;
    document.write("删除属性后：");
    document.write(stu4.name);
})();