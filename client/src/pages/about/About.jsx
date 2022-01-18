import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./about.css";

export default function Sidebar() {
  const { user} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const [ cats ,setCats] = useState([]); 

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="aboutbar">
      <div className="aboutItem">
        <span className="aboutTitle">ABOUT ME</span>
        {user ? (
          <Link to="/settings">
            <img className="aboutTitle" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <img src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
           className="aboutTitle" alt=""/>
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="aboutItem">
        <span className="aboutTitle">CATEGORIES</span>
        <ul className="aboutList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="aboutListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="aboutItem">
        <span className="aboutTitle">FOLLOW US</span>
        <div className="aboutSocial">
          <i className="aboutIcon fab fa-facebook-square"></i>
          <i className="aboutIcon fab fa-twitter-square"></i>
          <i className="aboutIcon fab fa-pinterest-square"></i>
          <i className="aboutIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}