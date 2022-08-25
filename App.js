import { useState, useEffect } from "react"

function App() {

  const [state, setState] = useState()

  useEffect(() => {
    fetchPosts()
  }, []);


  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    // console.log('posts i fetch posts', posts)
    setState(posts)
  }
  
console.log('state', state)

  return (
    <div>
      <button onClick={() => fetchPosts()}>kör fetch posts</button>
      test så så jag appen är igång
      <p>{ state ? state[0].title : 'state är antagligen undefined' }</p>
    </div>
  );
}


// let strängAttVisa

// if (state) {
//   strängAttVisa = state[0].title
// }
// else {
//   strängAttVisa = 'state är nog undefined'
// }

//   return (
//     <div>
//       <button onClick={() => fetchPosts()}>kör fetch posts</button>
//       test så så jag appen är igång
//       <p>{ strängAttVisa }</p>
//     </div>
//   );
// }


export default App;
