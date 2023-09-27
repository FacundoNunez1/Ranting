import { useEffect, useState } from "react";
import Star from "./Star.js";
import "./App.css";

function App() {
  const [productos, setproductos] = useState([]);
  useEffect((
  ) => {
    setproductos(datos)
  })
  const datos = [
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Pantalla Sanyo",
      category: "Tecnologia",
      score: 2,
    },
    {
      name: "celular Sanyo",
      category: "Tecnologia",
      score: 4,
    },
    {
      name: "celular Sanyo",
      category: "Tecnologia",
      score: 0,
    },


  ];

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Categoria</td>
            <td>Puntos</td>
          </tr>
        </thead>

        <tbody>
          {productos.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <Star totalStars={5} initialRating={item.score}> </Star >{""}
                </td>
              </tr>
            )
          }
          )

          }





        </tbody>
      </table>

    </div>
  )
}
export default App;

