Recipes
=======

a ruby on rails 4.1 example app
to learn about the asset pipeline.

clone this repository, then

    bundle
    rake db:migrate
    rails server

now point your browser at the homepage at http://localhost:3000/
or at http://localhost:3000/todo.html 

You will be asked to

* load seed data
* explore the unobstrusive javascript created by the rails scaffold
* configure the app to use EcmaScript 6 (ES6)
* write your own nobstrusive javascript that calls a ES6 class
* switch on Turbolinks
* Use AJAX to create and "inline editing form"

### Answer

#### 1.

    rake db:migrate
    
#### 2. 

it comes from the index.html.erb in ingredients :

     <%= link_to 'Destroy', ingredient, method: :delete, data: { confirm: 'Are you sure?' } %>
     

#### 4. 

the page loads much faster

