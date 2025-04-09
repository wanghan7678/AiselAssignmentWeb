import '../theme1.css';

const Header = () =>
{

    return (
        <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><a href="index.html"><span style={{marginLeft: 5, display:  "inline-block",  verticalAlign: "bottom"}}>Aisel Assignment - Patients System</span></a></h1>       
          </div>    
        </div>
      </header>

    );
};

export default Header;