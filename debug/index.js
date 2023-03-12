let parent = function () {
  console.log("parent() is called.");
  child();
  console.log("parent() is executed.");
};

let child = function () {
  console.log("child() is called.");
  child_child();
  console.log("child() is executed.");
  console.log('bye');
};

let child_child = function(){
  console.log("child_child is called");
}

parent();