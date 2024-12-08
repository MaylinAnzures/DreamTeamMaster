import MyButton from './componentes/Button';
import FooterApp from './componentes/footer';
import HeaderApp from './componentes/header';
window.global = window;


export default function Index() {
  const handleClick = () => {
    localStorage.clear();

  };

  return (
    <>      
    <HeaderApp />
        <h1>Usos de componentes </h1>
        <MyButton
          className="custom-button"
          onClick={handleClick}
          label="¡Click aquí!"
        />
      <FooterApp />
      </>

  );
}
