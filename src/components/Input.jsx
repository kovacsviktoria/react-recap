function Input({query, qlength}) {

    const user = {
        name: "Mira",
        age: "17",
        city: "Szombathely",
        country: "Hungary",
        address: {
            street: "Kölcsey Ferenc utca",
            number: 23
        }
    };

/*     const userName= user.name;
    const userAge= user.age;

    console.log(userName);
    console.log(userAge); */

    //object destructuring, ez még javascript
    const {name, age} = user;
    console.log("Name:", name, "Age:", age);

    //referencia játék objecttel
    const user2 = {...user};
    user2.country = "Belgium";
    console.log("User", user);
    console.log("User2", user2);

    user2.address.number = 66; //második szinten van, ide nem hat a spread operátor
    console.log("User", user);
    console.log("User2", user2);

    //referencia
      // TÖMBÖK
    const array1 = ["a", "b", "c"];
    const arrayX = ["x", "y", "z"];
    //const array2 = array1; ehelyett spread operator - objektum esetén csak a legfelső szintet másolja
    const array2 = [...array1, ...arrayX]; //másolatot készít?
    array2.push("d"); //array1-et is felülírja, ugyanarra a memóriaterületre mutat
    console.log("This is the array1", array1);
    console.log("This is the array2", array2);

    //const a = array1[0];
    const [a, b, c] = array1; //array destructuring
    console.log("a is", a);
    console.log("b is", b);
    console.log("c is", c);

    const [firstValue, ...leftover] = array2;
    console.log("first value", firstValue);
    console.log("leftover", leftover);

      //STRINGEK
    let string1 = "abc";
    let string2 = string1;
    string2 += "d";
    console.log("This is string1", string1);
    console.log("This is string2",string2);
    //referencia vége

    return (
        <input type="text" className="inputElement" value={query} maxLength={qlength}/>

    // <input type="text" className="inputElement" value={props.data.value} maxLength={props.data.length}/> 
    );
}

export default Input;