import {useState} from 'react';
import MenuContent from "./MenuContent";
import MenuNavBar from "./MenuNavbar";
import data from "../../data";

export default function Menu(){

    const [category, setCategory] = useState('Burgers');

    return (
    <div className="bg-light-gray pb-5">
        <div className="container bg-light-gray">
            <MenuNavBar categories={data.categories} setCategory={setCategory}/>
            <MenuContent items={data.menuItems} category={category}/>
        </div>
    </div>
    );
}