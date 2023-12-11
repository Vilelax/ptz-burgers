import MenuNavbarItem from "./MenuNavbarItem";

export default function MenuNavBar({categories, setCategory}){
    return (
        <div className="row">
            <div className="col-12">
              <ul className="list-unstyled d-flex justify-content-evenly mt-5 rounded-5">
                {categories.map((value) => {
                  return <MenuNavbarItem setCategory={setCategory} key={value} value={value}/>;
                })}
              </ul>
            </div>
        </div>
    );
}