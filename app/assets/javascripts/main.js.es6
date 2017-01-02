$(document).ready(() => {
    $('[data-hello]').on("click",function(e) {

        let arr = e.target.attributes

        for(var i=0; i < arr.length; i++) {
            if(arr[i].name == "data-hello"){
                new HelloWorld(e.target.attributes[i].value).sayHello()
            }
        }

    })
})