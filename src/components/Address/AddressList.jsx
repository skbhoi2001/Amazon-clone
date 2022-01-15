function AddressList({name,id}){
    return(
        <div>
 <h3>{item.name}</h3>
            <button onClick={() => handleDelete(item.id)}>x</button>
        </div>
    )
}

export default AddressList