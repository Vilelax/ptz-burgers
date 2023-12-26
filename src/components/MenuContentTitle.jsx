export default function MenuContentTitle({title}){
    return (
        <div className="row">
            <div className="col-12 pt-md-5 text-center rounded-4">
                <h2 className="fw-bold">{title.name || 'Burgers'}</h2>
            </div>
        </div>
    );
}