import { useEffect, useState } from "react"
import "./Capacity.css"

const Capacity = ({maxCapacity}) => {

    const [capacity, setCapacity] = useState("")
    const [dayLimit, setDayLimit] = useState("1")
    const [btnControl, setBtnControl] = useState(true)

    const onChange = (e) => {
        const source = e.target.name
        const val = e.target.value
        switch(source){
            case "lines" : {setCapacity(val)};break;
            case "limit" : {if (val>=0){setDayLimit(val)}};break;
            default: break;
        }
    }

    let btnStyle = btnControl ? "col-1 btn btn-sm btn-danger mt-2" : "col-1 btn btn-sm btn-success mt-2"

    useEffect(()=>{

        const kapacita = capacity / dayLimit
        if(maxCapacity >= kapacita){
            setBtnControl(false)
        }
        else{setBtnControl(true)}
        console.log(`hranice ${maxCapacity}`)
        console.log(`kapacita = ${kapacita}`)
    },[capacity,dayLimit])
    

    const handleClick = () => {
        console.log("handle click")
        
    }

    return (
        <div className="text-center row d-flex justify-content-center mt-2 m-3 align-content-center align-text-center">
            <div className="col-3 d-flex align-items-center justify-content-end">
            lines of code:
            </div>
            <input type="number" min={0} onChange={onChange} name="lines" value={capacity} className="height col-3 form-control m-1 mt-2" />
            <div className="col-3 d-flex align-items-center justify-content-end">
            time limit [days]:
            </div>
            <input type="number" onChange={onChange} name="limit" value={dayLimit} className="height col-3 form-control m-1 mt-2" />
            <button disabled={btnControl} min="0" onClick={handleClick} className={btnStyle}>Do it</button>
        </div>
    )

}

export default Capacity