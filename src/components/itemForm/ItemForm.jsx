import "./ItemForm.css";
import { useState, useEffect } from "react";

const ItemForm = ({ onClick, pozice }) => {
  const [btnControl, setBtnControl] = useState(true);
  const [name, setName] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name.trim().length > 0 && selectValue.trim().length > 0) {
      setBtnControl(false);
    } else {
      setBtnControl(true);
    }
  }, [name, selectValue]);

  const handleAdd = () => {
    const newItem = {
      id: pozice,
      firstI: name,
      secondI: selectValue,
    };
    onClick(newItem);
    setName("")
    setSelectValue("")

  };

  return (
    <div className="text-center row formular justify-content-center mt-4 align-content-center">
      <input
        type="text"
        className="form-control vyska d-flex col-3 mt-2 m-1"
        onChange={handleChange}
        placeholder="Name"
        value={name}
        name="firstI"
      />

      <select
        className="form-control vyska sirka d-flex col-4 mt-2 m-1"
        onChange={handleSelect}
        value={selectValue}
        name="secondI"
      >
        <option value="">Vyberte úroveň</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
      </select>

      <button
        disabled={btnControl}
        onClick={handleAdd}
        className="btn btn-success d-flex col-2 m-2"
      >
        Přidat
      </button>
    </div>
  );
};

export default ItemForm;
