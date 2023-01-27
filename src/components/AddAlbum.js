import { useState } from "react";
import { Link } from "react-router-dom";
const AddAlbum = ({addAlbum}) =>{

    const [userId, newUserId] = useState("");
    const [title, newTitle] = useState("");

    const handleUserIdChange = (e) =>{
        newUserId(e.target.value);
    }

    const handleTitleChange = (e)=>{
        newTitle(e.target.value);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
    }

    return (
        <div className="AddAlbum">
        <div className="container p-4">
            <div className="card p-4">
                <form onSubmit={handleSubmit}>
                    <h2 className="mb-3">Enter New Album Details</h2>
                    <div className="form-group mb-3">
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter User Id" onChange={handleUserIdChange} value = {userId} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Album Title" value={title} onChange = {handleTitleChange} />
                    </div>
                    <Link to="/" type="submit" className="btn btn-primary" onClick={() => addAlbum(userId,title)}  >Add to List</Link>
                </form>
            </div>
        </div>
    </div>
    )
}


export default AddAlbum;