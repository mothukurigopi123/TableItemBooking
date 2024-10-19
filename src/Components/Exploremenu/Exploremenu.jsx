import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

const Exploremenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <div className="explore-menu-list">
                <div className="explore-menu-list-inner">
                    {menu_list.map((item, index) => {
                        return (
                            <div 
                                onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                                key={index} 
                                className={`explore-menu-item ₹{category === item.menu_name ? "active" : ""}`} 
                            >
                                <div className={`image-container ₹{category === item.menu_name ? "active" : ""}`}>
                                    <img src={item.menu_image} alt={item.menu_name} />
                                </div>
                                <p>{item.menu_name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Exploremenu;
