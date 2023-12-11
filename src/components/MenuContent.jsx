import MenuContentItem from "./MenuContentItem";
import MenuContentTitle from "./MenuContentTitle";

export default function MenuContent({items, category}){

    const filteredItems = items.filter((item) => {
        return item.category === category;
    });

    console.log(filteredItems);

    return (
        <div className="row mt-5">
            <div className="col-12">
                <MenuContentTitle title={category}/>
                <div className="container px-5">
                    {
                        filteredItems.map((item) => {
                            return (
                                <MenuContentItem 
                                    key={item.title}
                                    img={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />);
                        })
                    }
                </div>
            </div>
        </div>
    );
}