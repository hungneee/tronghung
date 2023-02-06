import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./hd.css";
const Header = () => {
  return (
    
    
    <Nav activeKey="/home" className="header">
      <Link style={{ marginRight: 5 }} to="/" className="home" >
        Home
      </Link>

      <Link to="/about" className="about" >About</Link>
        
          <div className="dangnhap">
          <Link to="/login" className="dangnhap" >đăng nhập</Link> 
          </div>
          <div className="dangky"> 
          <Link to="/register" className="dangky" > đăng ký</Link>  
          
         
        </div>
    </Nav>
  );
};

export default Header;
