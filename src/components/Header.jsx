import ptzBurgersLogo from "../assets/PTZ-Burgers-Logo.png";

export default function Header(){
    return (
        <header className="bg-secondary">
        <div className='container'>
          <div className="row">
            <div className="col-12 text-center">
              <a href=""><img className="w-15" src={ptzBurgersLogo} alt="Logo" /></a>
            </div>
          </div>
        </div>
      </header>
    );
}