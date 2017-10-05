## Node Json Challenges

### Challenge #1:
Write a route for "/verify" that takes json data  like the following:
{
  "name": "Troy",
  "state": "AZ"
}
If the state is not AZ send a 400 status. If it is AZ send a 200 status.

### Challenge #2:
Create a route "/calculate" that takes json data like the following:
{
  "operation": "add",
  "numOne": 3,
  "numTwo": 18
}
It should return the result of doing the operation on numOne and numTwo.

### Challenge #3:
Create a route "/students" that takes json data like the following:
{
  "teacher": "John",
  "class": "g58",
  "students": [
      {
        "name":"kevin",
        "class":"g34"
      },
      {
        "name":"chris",
        "class":"g58"
      },
      {
        "name":"marie",
        "class":"g66"
      },
      {
        "name":"james",
        "class":"g58"
      },
    ]
}
Filter the students array so that it only contains the students that are in the same class as the instructor. Then return the new updated object.
