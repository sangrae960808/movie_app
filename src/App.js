import React from 'react';


function Food({fav}){
  
  return <h2>i like {fav}</h2>;
}
const foodlike = [

]
function App() {
  return <div>
    <h1>hello!!!!!!</h1>
    <Food fav="chicken" />
    <Food fav="cowgalbi" />
    <Food fav="kimchi" />

  
  </div>;
}

export default App;
