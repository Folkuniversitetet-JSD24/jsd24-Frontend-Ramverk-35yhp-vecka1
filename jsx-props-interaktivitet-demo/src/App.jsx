import "./App.css";
import Greetings from "./components/Greetings/Greetings";
import ListItem from "./components/ListItem/ListItem";

function App() {
  let greeting = "Hello world from ";
  let greeting2 = "Hello world from Mandus";

  let listItems = ["item1", "item2", "item3"];

  let inputResult;

  function handleOnClick() {
    console.log("knappen blev klickad: ", inputResult);
  }

  function handleOnChange(event) {
    event.preventDefault();
    console.log("Input blev ändrat: ", event.target.value);
    inputResult = event.target.value;
  }

  return (
    <main>
      <Greetings namnForGreetingProp={greeting} />
      <Greetings namnForGreetingProp={greeting2} />
      <Greetings namnForGreetingProp={"Hej hopp"} />
      <ul>
        {/* <ListItem /> */}
        {listItems.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </ul>

      <button
        onClick={handleOnClick}
        // onClick={() => console.log("knappen blev klickad: ", inputResult)}
      >
        Click ME!
      </button>

      <input
        type="text"
        placeholder="Skriv någonting"
        onChange={handleOnChange}
      ></input>
    </main>
  );
}

export default App;

// let greeting = "Hello world from ";
// const user = {
//   firstName: "Mandus",
//   lastName: "Lindström",
// };

// let isLoogedIn = false;

// let h2;

// if (isLoogedIn) {
//   h2 = <h2>Hi!</h2>;
// } else {
//   h2 = <h2>No user is looged in!</h2>;
// }

// let items = ["item1", "item2", "item3"];

{
  /* <Greetings /> */
}
{
  /* <Input type={text}  placeholder={"förnamn"}/>
<Input type={text} placeholder={"efternamn"} />
<Input type={checkbox} /> */
}
{
  /* <input type="text" placeholder="förnamn"></input>
<input type="text" placeholder="efternamn"></input>
<input type="checkbox"></input> */
}

// <main>
//   {/* {greeting}
//   {user.firstName} {user.lastName}
//   {/* {h2} */}
//   {isLoogedIn ? <h2>Hi!</h2> : <h2>No user is looged in!</h2>}
//   {/* <ul>{items}</ul> */}
//   <ul>
//     {items.map((item, index) => (
//       <li key={index}>{item}</li>
//     ))}
//   </ul> */}
// </main>
