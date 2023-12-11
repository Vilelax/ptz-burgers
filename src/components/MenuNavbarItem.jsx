export default function MenuNavbarItem({value, setCategory}){

    function handleClick(name){
        setCategory(name);
    }

    return (
        <li className="fs-5"><button className="btn-menu link-unstyled" onClick={() => handleClick(value)}>{value}</button></li>
    );
}