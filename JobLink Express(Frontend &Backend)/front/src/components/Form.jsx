import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRole } from "../components/Redux/Actions/ProductActions";

function Forme() {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name',userName);
    localStorage.setItem('pass',pass);
    dispatch(setRole(userName, pass));
    setUserName('');
    setPass('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email Goes Here</label>
        <input
          type="text"
          placeholder="enter email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p>{userName}</p>
        <label>Password Goes Here</label>
        <input
          type="password"
          placeholder="enter password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <p>{pass}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Forme;
