console.log("Js works"); 

function testJS(cname) {
    localStorage.setItem("c", cname);
    // alert("Selected Course is " + localStorage.getItem("c"));
}
// console.log(localStorage.getItem("c"));

function settingCourseValue() {
    let y = localStorage.getItem("c");
    document.getElementById('course').value = y;
    console.log(y);
}
