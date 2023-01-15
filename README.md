
# To-do List Web Application

To-do list Web Application. Project made using NodeJS, Express, GraphQL, Apollo-Client, React, Sequelize ORM and MySQL, Here you can  Add todos, Update, Delete and Strikethrough todos,  All the data are stored in MySQL Database for Persistence.  

<!-- ![To-do list Operations](https://github.com/TodoList/blob/master/support/Home.png?raw=true) -->
![To-do list Home](./support/Home.png?raw=true "Homepage")
![To-do list Added-todos](./support/Added-todos.png?raw=true "Added-todos")
![To-do list Operation-todos](./support/Operation-todos.png?raw=true "Operations in todos")

## Installation


Install To-do list with [NodeJS](https://nodejs.org/en/download/)


- Start [Xampp](https://www.apachefriends.org/download.html) - *Apache* and *MySQL*
- Goto http://localhost/phpmyadmin/
- Create new database *tododb*


*Install Server*
```bash
npm install todolist-graphql
nodemon server.js
```
*Install To-do list*
```
npm install todolist
npm start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`Port=5000`

## Usage/Examples

*To use GraphiQL Developer Tool*

- http://localhost:[Port]/graphql
<br>


1. For getting all Data from *tododb* database
```
query{
  msglist{
    id,
    jobtodo,
    toggle
  }
}
```  
> Get data of single ID
```
query{
  msgDetail(id:1){
    id,
    jobtodo,
    toggle
  }
}
```  
> Get data of single ID by passing ID as *query* variable in *JSON* format
```
query($msgid:Int){
  msgDetail(id:$msgid){
    id,
    jobtodo,
    toggle
  }
}

Passing ID as query variable in json format
{
    "msgid": 1
}
```
\
\
\
2. To Create/Add Data
```
mutation{
  msgCreate(jobtodo:"1st Data Added"){
	jobtodo
  }
}
```  
> To Create using query variable
```
mutation msgCreate($jobtodo: String!){
  msgCreate(jobtodo:$jobtodo){
    id,
    jobtodo
  }
}

Pass query variable
{
	jobtodo:"New Msg Added"
}
```
\
\
\
3. To Update Data and show some message when the data is Updated
```
mutation{
  msgUpdate(id:1, jobtodo:"1st Data Updated Modified"){
    toggle,
    message,
    error
  }
}
```  
> To Update using query variable
```
mutation msgUpdate($id: Int!, $jobtodo: String!){
  msgUpdate(id:$id, jobtodo:$jobtodo){
    toggle,
    message,
    error
  }
}

Pass query variable
{
  "id": 3,
  "jobtodo": "3rd data Updated now"
}
```
\
\
\
4. To Delete Data on provided ID and show StatusType, some message etc.
```
mutation{
  msgDelete(id:2){
    toggle,
    message,
    error
  }
}
```  
> To Delete using query variable
```
mutation msgDelete($id: Int!){
  msgDelete(id:$id){
    toggle,
    message
  }
}

Pass query variable
{
id: 21
}
```
\
\
\
5. Get Toggle Data and show some message when data is Updated
```
mutation{
  msgToggle(id:1, toggle: 1){
    toggle,
    message,
    error
  }
}
```  
> To Toggle Update using query variable
```
mutation msgToggle($id: Int!, $toggle: Int!){
  msgToggle(id:$id, toggle:$toggle){
    id,
    toggle
  }
}

Pass query variable
{
  "id": 1,
  "toggle": 1
}
```

