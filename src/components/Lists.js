import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Lists = ({posts, deleteAlbum, setUpdateAlbum}) =>{
    return (
        <div className='container' >
            <div style={{display:"flex", flexWrap: "wrap"}} >
                {posts.map((post) => (
                    <div className="card m-2" key={post.id} style={{width: "17rem"}}>
                        <div className="card-body list" style={{display: "flex", flexDirection: "column", backgroundColor: "lightpink"}} >
                            {/* Title  */}
                            <h5 className="card-title">{post.title}</h5>
                            <div className='row'>
                                {/* Update post button */}
                                <div className='col-7'>
                                    <Link to="/update-album" className="btn bt" style={{backgroundColor: "#701e78", color: "white"}} id = {post.id} onClick={() => setUpdateAlbum(post)} >Update</Link>   
                                </div>
                                {/* Delete post button */}
                                <div className='col-5' >
                                    <button className="btn " style={{backgroundColor: "#b3143b", color: "white"}} onClick={() => deleteAlbum(post.id)}>Delete</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Lists;