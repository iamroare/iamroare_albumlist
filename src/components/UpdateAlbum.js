
import { useState } from "react";
import { Link } from "react-router-dom";
const UpdateAlbum = ({posts, updateAlbum,album}) =>{

    const [userId, newUserId] = useState("");
    const [title, newTitle] = useState("");

    const handleUserIdChange = (e) =>{
        newUserId(e.target.value);

    }

    const handleTitleChange = (e)=>{
        newTitle(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="UpdateAlbum">
          <div className="container p-4">
              <div className="card p-4">
                  <form onSubmit={handleSubmit}>
                      <h2 className="mb-3">Update Album Details</h2>
                      <div className="form-group mb-3">
                          {/* <label for="exampleInputEmail1">Enter New  Id </label> */}
                          <input type="number" className="form-control"  aria-describedby="emailHelp" placeholder="Enter New User Id" value={userId} onChange={handleUserIdChange} />
                      </div>
                      <div className="form-group mb-3">
                          {/* <label for="exampleInputPassword1">Enter New Title :</label> */}
                          <input type="text" className="form-control"  placeholder="Enter New Title" value={title} onChange={handleTitleChange} />
                      </div>
                      
                      <Link to="/" type="submit" className="btn btn-primary" onClick={() => updateAlbum(album.id,userId,title,album)} >Submit</Link>
                  </form>
              </div>
          </div>
      </div>
    )
}


export default UpdateAlbum;