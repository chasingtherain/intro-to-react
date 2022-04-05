import ReactDOM from "react-dom";
import Pet from "./Pet";
import Results from "./Results";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "shitzu" }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Sudo", animal: "Cat", breed: "Yinyang" }),
//   ]);
// };

const App = () =>{
    return(
        <div>
            <h1>Adopt Me</h1>
            <SearchParams/>
            {/* <Pet name="Luna" animal="Dog" breed="Shitzu"/>
            <Pet name="Poh" animal="Bird" breed="Goreng"/>
            <Pet name="Tee" animal="Bull" breed="Wagyu"/> */}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
