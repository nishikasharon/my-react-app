
function List(){
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2,name: "orange", calories: 45},
                    {id: 3,name:"bananana", calories: 105},
                    {id: 4,name: "coconut", calories: 159},
                    {id: 5,name: "pineapple", calories: 37}]
//ALPHABETICAL
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
 //REVERSE ALPHABETICAL   
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
//NUMERIC 
    // fruits.sort((a,b) => a.calories-b.calories);
//REVERSE NUMERIC 
    // fruits.sort((a,b) => b.calories-a.calories);


    const lowCalFruit = fruits.filter(fruit => fruit.calories<100);

    const listItems = lowCalFruit.map(lowCalFruit => 
                                <li key ={lowCalFruit.id}>
                                {lowCalFruit.name}: &nbsp;
                                <b>{lowCalFruit.calories}</b></li>);

    return(<ol>{listItems}</ol>);
}

export default List