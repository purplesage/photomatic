import { MdPhotoCamera } from 'react-icons/md';

const QuienesSomos = () => {
  return (
    <div className="h-screen w-full text-white py-5">
      <div className="text-center">
        <h2 className="text-mainRed font-display2 text-4xl">¿Quiénes somos?</h2>
        <p className="italic text-sm opacity-70">
          La renovación fotográfica digital es nuestra especialidad.
        </p>

        <div className="flex flex-col gap-10 mt-[3rem] items-center">
          <p>
            En <span className="text-mainRed font-display1">photomatic</span>{' '}
            utilizamos los métodos más actuales e innovadores para refrescar tus
            recuerdos y librarlos de las garras del olvido.
          </p>
          <hr className="w-[50%] bg-mainRed opacity-30" />
          <p>
            De manera profesional, empleamos cuidadosamente técnicas como el
            reescalado, sobredibujo, edición fotográfica, colorización,
            restauración de colores, reducción de ruido{' '}
            {'(para fotos antiguas)'}, etc.
          </p>
          <hr className="w-[50%] bg-mainRed opacity-30" />

          <a
            className="flex flex-col items-center font-display1 tracking-wide"
            href="#"
          >
            <MdPhotoCamera className="h-20 w-20 fill-mainRed" />
            Ver demonstraciones
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
