import react from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props){
   
    function Delete(){
        props.onDelete(props.id)
    }


    return <div className='note'>
        <h1>{props.title}</h1>
        <hr />
        <p>{props.content}</p>
        <button onClick={Delete} className="btn btnDelete">{
        <DeleteIcon/>}
        </button>
    </div>
}

export default Note