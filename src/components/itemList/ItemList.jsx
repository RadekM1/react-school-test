import "./ItemList.css"


const ItemList = ({dataIn, handleClick}) => {

    const handleButtonClick = (e) =>{
        const itemToDel = parseInt(e.target.value) 
        handleClick(itemToDel)
    }

    return (
        <div className="item-list-style">
            {dataIn.map((item)=>{
                return (
                    <div key={item.id} className="row  m-2 item-row">
                        <div className="col-6 align-content-center">
                            Name: <b>{item.firstI}</b>
                        </div>
                        <div className="col-4 p-1 align-content-center">
                            Level: <b>{item.secondI}</b> 
                        </div>
                        <div className="col-1 p-1 justify-content-end">
                            <button onClick={handleButtonClick} value={item.id} className="btn btn-sm btn-danger">Delete</button>
                        </div>
                    </div>
                )
            })    
        }
        </div>
    )
}

export default ItemList