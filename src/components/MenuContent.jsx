import MenuContentItem from "./MenuContentItem";
import MenuContentTitle from "./MenuContentTitle";

export default function MenuContent({items, category}){

    return (
        <div className="row mt-5">
            <div className="col-12">
                <MenuContentTitle title={category}/>
                <div className="container px-5">
                    {   
                        items.map((item) => {
                            return (
                                <MenuContentItem 
                                    key={item._id}
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