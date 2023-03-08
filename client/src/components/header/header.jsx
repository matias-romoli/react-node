import "../../sass/style.scss";

function Header({color, setColors}) {
 
  function onColorDark() {
    return setColors("dark");
  }  
  function onColorLight() {
    return setColors("light");
  }

  return (
      <header className="flex">
        <div className={`logo-${color}`}>
          <ion-icon name="logo-github"></ion-icon>
        </div>
        <div className={`colors-${color} flex`}>
          <span onClick={onColorDark}><ion-icon name="moon-outline"></ion-icon></span>
          <span onClick={onColorLight}><ion-icon name="sunny-outline"></ion-icon></span>
        </div>
      </header>
  );
}

export default Header;
