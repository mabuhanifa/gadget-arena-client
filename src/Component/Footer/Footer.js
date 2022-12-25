import { FaFax } from "react-icons/fa";
import { MdEmail, MdPermPhoneMsg } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="position-sticky top-100">
            <div className='d-flex bg-dark text-white mt-5'>
            <div className="w-25 p-5">
                <p>Home</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>FAQs</p>
            </div>
            <div className="w-25 p-5">
                <p>About</p>
                <p>Settings</p>
                <p>Orders</p>
                <p>Help</p>
            </div>
            <div className="w-25 p-5">
                <p> <span className="r-icon"><TiHome></TiHome></span> New York, NY 10012, US</p>
                <p> <span className="r-icon"><MdEmail></MdEmail></span> info@example.com</p>
                <p> <span className="r-icon"><MdPermPhoneMsg></MdPermPhoneMsg></span> + 01 234 567 88</p>
                <p> <span className="r-icon"><FaFax ></FaFax></span> + 01 234 567 89</p>
            </div>
            <div className="w-25 p-5 mt-4">
                <p>Sign up for our newsletter</p>
                <div className="input-group input-group mb-3">
                <input className="form-control" type="text" />
                <span className="input-group-text btn btn-primary" >Subscribe</span>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;