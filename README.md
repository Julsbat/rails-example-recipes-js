### Recipes

a ruby on rails 5.0 example app to learn about the asset pipeline.

clone this repository, then

    bundle
    rails db:migrate
    rails server#
now point your browser at the homepage at http://localhost:3000/ or at http://localhost:3000/todo.html

You will be asked to

* load seed data
* explore the unobstrusive javascript created by the rails scaffold
* configure the app to use EcmaScript 6 (ES6)
* write your own nobstrusive javascript that calls a ES6 class
* switch on Turbolinks
* Use AJAX to create and "inline editing form"

### Answer

#### 1.

To add initial data after a database is created, Rails has a built-in 'seeds' feature that makes the process quick and easy. This is especially useful when reloading the database frequently in development and test environments. It's easy to get started with this feature: just fill up db/seeds.rb with some Ruby code, and run rails 

    db:seed
    
Located in:

    db/seeds.rb
    
#### 2. 

it comes from the index.html.erb in ingredients :

     <%= link_to 'Destroy', ingredient, method: :delete, data: { confirm: 'Are you sure?' } %>
     

#### 4. 

the page loads much faster

