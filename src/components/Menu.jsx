import {useState, useEffect} from 'react';
import MenuContent from "./MenuContent";
import MenuNavBar from "./MenuNavbar";

export default function Menu(){

    const [categories, setCategories] = useState([]);

    const [currentCategory, setCurrentCategory] = useState({});

    useEffect(() => {
        async function fetchCategories(){
            const response = await fetch('http://localhost:3030/categories');
            const resData = await response.json();
            console.log(resData);
            setCategories(() => [...resData]);
            setCurrentCategory((item) => resData[0]);
        }

        fetchCategories();
        
    }, []);

    const [items, setItems] = useState([]);

    useEffect(() => {

        async function getProducts(){
            const urlPath = `http://localhost:3030/products?category=${currentCategory.name}`;
            const response = await fetch(urlPath);
            const resData = await response.json();
            setItems(() => [...resData]);
        }

        console.log(currentCategory.name);

        getProducts();

    }, [currentCategory]);

    return (
    <div className="bg-light-gray pb-5">
        <div className="container bg-light-gray">
            <MenuNavBar categories={categories} setCategory={setCurrentCategory}/>
            <MenuContent items={items} category={currentCategory}/>
        </div>
    </div>
    );
}