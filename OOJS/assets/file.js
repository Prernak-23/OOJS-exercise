function person(name,age)
{
	this.name=name;
	this.age=age;
}
function employee(salary)
{
	this.salary=salary;
}
function department(dept)
{
	this.dept=dept;
}
employee.prototype= new person('hitanshu',22);
department.prototype=new employee(4000);
var depart=new department("FEEN");
console.log(depart);