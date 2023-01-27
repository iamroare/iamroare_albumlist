import Navbar from "./Navbar";
import Lists from "./Lists";
import AddAlbum from "./AddAlbum";
import UpdateAlbum from "./UpdateAlbum";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);
  const [album, setAlbum] = useState({});
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response)=>response.json())
    .then((result)=>{
      setPosts(result)

    })

  },[]);
  // console.log(posts);

  const deleteAlbumFromList = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{ method: 'DELETE', })
    const newAlbum = posts.filter((post) => post.id !== id);
    setPosts(newAlbum);

    //console.log("deletion is working");
  }

  const addAlbumToList = (userId, title) => {
    const length = posts.length;
    const lastId = posts[length - 1].id;
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: lastId+1,
        title: title,
      }),
      
    }).then((response) => response.json()).then((json) => json);
    const newPosts = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }
    const allPosts = [...posts,newPosts]
    // console.log(allPosts);
    setPosts(allPosts);
  }

  const setUpdateAlbum = (post) =>{
    setAlbum(post);
  }

  const updateAlbum = (id,userId, title, album)=>{
    const index = posts.indexOf(album);
    let updatedAlbum = fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
      method:'PUT',
      body: JSON.stringify({
        userId: userId,
        id: id,
        title: title,
      })
    }).then((response) => response.json()).then((json) => json);
    updatedAlbum = {
      userId: userId,
      id: id,
      title: title
    }
    // console.log(updatedAlbum);
  posts[index] = updatedAlbum;
  }

  return (
   <div className="App" style={{backgroundColor:"lightcoral"}}>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Lists posts={posts} deleteAlbum = {deleteAlbumFromList} setUpdateAlbum= {setUpdateAlbum} /> } />
        <Route exact path="/add-album" element={ <AddAlbum addAlbum={addAlbumToList} /> } />
        <Route exact path="/update-album" element={ <UpdateAlbum posts={posts} updateAlbum={updateAlbum} album={album} /> } />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
