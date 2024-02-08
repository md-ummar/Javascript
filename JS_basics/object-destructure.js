const course ={
    courseName :"Js in Hindi",
    price: 999,
    courseIntructor:"hitesh"
}

//console.log(course.coirseIntructor)

//object destructure is we cannot call each property of the object with dot operator,
//to shorten the calling of the object property with shortname we destructure the object

const {courseIntructor} = course
const {courseName : Cname} = course

//console.log(courseIntructor); //method one
console.log(Cname);
