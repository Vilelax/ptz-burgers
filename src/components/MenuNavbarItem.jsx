export default function MenuNavbarItem({value, setCategory}){
    return (
        <li className="fs-5"><button className="btn-menu link-unstyled" onClick={() => setCategory(value)}>{value.name}</button></li>
    );
}