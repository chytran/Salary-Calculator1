class Salary {
    constructor(salary, hours, days) 
    {
        this.salary = salary;
        this.hours = hours;
        this.days = days;
    }

    displayResults() 
    {
        var result;
        result = this.salary * this.hours * this.days;
        return result;
    }
}