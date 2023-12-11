
export default function MenuContentItem({img, title, description, price}){

    
    

    return (
        <div className="row p-5 bg-light my-5 rounded-4">
            <div className="col-12 col-md-4 text-center">
                <img className="burger-image rounded-3" src={img} alt="imagem" />
            </div>
            <div className="col-12 col-md-8 d-flex align-items-center">
                <div className="pt-5 pt-md-0">
                    <h3 className="fs-2 fw-bold">{title}</h3>
                    <p className="fs-5 burger-description">{description}</p>
                    <p className="fs-4 fw-bold">$ {price}</p>
                </div>
            </div>
        </div>
    );
}