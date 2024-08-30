import "./Toggle.css"


const Toggle = ({dataIn, onClick}) => {


let flexTrida = dataIn == 2 ?"-outline" : ""
let flexTridaDva = dataIn == 1 ? "-outline" : ""



const trida = `m-2 btn btn${flexTrida}-primary`
const tridaDva = `m-2 btn btn${flexTridaDva}-primary`

return (

<div className="row justify-content-center">
<div className="col-5 d-flex justify-content-end">
    <button className={trida} name="toggleJedna" onClick={onClick}>List of programmers</button>
</div>
<div className="col-5 d-flex justify-content-start">
    <button className={tridaDva} name="toggleDva" onClick={onClick}>Form for planning tasks</button>
</div>

</div>


)
}

export default Toggle