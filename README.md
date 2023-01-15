
# To-do List Web Application

To-do list Web Application. Project made using NodeJS, Express, GraphQL, Apollo-Client, React, Sequelize ORM and MySQL, Here you can  Add todos, Update, Delete and Strikethrough todos,  All data are stored in MySQL Database for Persistence.

<!-- ![To-do list Operations](https://github.com/TodoList/blob/master/support/Home.png?raw=true) -->
![To-do list Home](./support/Home.png?raw=true "Homepage")
![To-do list Added-todos](./support/Added-todos.png?raw=true "Added-todos")
![To-do list Operation-todos](./support/Operation-todos.png?raw=true "Operations in todos")

## Installation

*Install To-do list with npm*

*[Download Xampp](https://www.apachefriends.org/download.html)*

*[Nodejs](https://nodejs.org/en/download/)*


- Start Xampp - Apache and MySQL
- Goto http://localhost/phpmyadmin/
- Create new database tododb

*Install Server*
```bash
npm install todolist-graphql
nodemon server.js
http://localhost:4000/graphql
```
*Install To-do list frontend*
```
npm install todolist
cd todolist
npm start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`Port=4000`

## Usage/Examples

*To use GraphiQL Developer Tool*

- http://localhost:4000/graphql

\
\
1. For Getting All Data form "tododb" Database
```query{
  msglist{
    id,
    jobtodo,
    toggle
  }
}
```  
> Get Data of Single ID
```query{
  msgDetail(id:1){
    id,
	jobtodo,
    toggle
  }
}
```  
> Get Data of Single ID by passing ID as Query Variable in JSON format
```query($msgid:Int){
  msgDetail(id:$msgid){
    id,
	jobtodo,
    toggle
  }
}

Passing ID as Query Variable in JSON format
{
    "msgid": 1
}
```
\
\
\
2. To Create Data
```mutation{
  msgCreate(jobtodo:"1st Data Added"){
	jobtodo
  }
}
```  
> To Create using Query Variable
```mutation msgCreate($jobtodo: String!){
  msgCreate(jobtodo:$jobtodo){
    id,
    jobtodo
  }
}

Pass Query Variable
{
	jobtodo:"New Msg Added"
}
```
\
\
3. To Update Data and show some message when data is Updated
```mutation{
  msgUpdate(id:1, jobtodo:"1st Data Updated Modified"){
		toggle,
		message,
		error
  }
}
```  
> To Update using Query Variable
```mutation msgUpdate($id: Int!, $jobtodo: String!){
  msgUpdate(id:$id, jobtodo:$jobtodo){
		toggle,
		message,
		error
  }
}

Pass Query Variable
{
  "id": 3,
  "jobtodo": "3rd data Updated now"
}
```
\
\
4. To Delete Data on provided ID and show StatusType, some message like success, message etc.
```mutation{
  msgDelete(id:2){
    toggle,
    message,
    error
  }
}
```  
> To Delete using Query Variable
```mutation msgDelete($id: Int!){
  msgDelete(id:$id){
    toggle,
    message
  }
}

Pass Query Variable
{
id: 21
}
```
\
\
5. Get Toggle Data and show some message when data is Updated ####
```mutation{
  msgToggle(id:1, toggle: 1){
		toggle,
		message,
		error
  }
}
```  
> To Toggle Update using Query Variable
```mutation msgToggle($id: Int!, $toggle: Int!){
  msgToggle(id:$id, toggle:$toggle){
    id,
    toggle
  }
}

Pass Query Variable
{
  "id": 1,
  "toggle": 1
}
```

