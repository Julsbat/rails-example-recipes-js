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

//call the ready function on regular page loads and on turbolinks
$(document).ready(ready);
$(document).on('page:load', ready);