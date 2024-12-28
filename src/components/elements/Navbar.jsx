import React from 'react';
import { FiDownload, FiMenu } from "react-icons/fi"
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost text-xl">
                    Neobitose.
                </Link>
            </div>
            <div className="flex-none">
                <FiMenu size={30}/>
            </div>
        </div>
    )
}

export default Navbar 