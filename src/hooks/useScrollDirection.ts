import { useState, useEffect } from "react";

interface IReturnHook {
  isScrolled: boolean;
  isVisible: boolean;
}

/**
 * Hook personalizado para detectar la dirección del scroll.
 * Se utiliza para mostrar u ocultar el header dependiendo de la dirección del scroll.
 *
 * @returns {IReturnHook} - Objeto que contiene los estados de scroll y visibilidad.
 * @returns {boolean} isScrolled - `true` si el scroll es mayor a 0, `false` en caso contrario.
 * @returns {boolean} isVisible - `true` si el scroll es hacia arriba, `false` si es hacia abajo.
 */
const useScrollDirection = (): IReturnHook => {
  const [isScrolled, setIsScrolled] = useState(false); // Indica si el scroll es mayor a 0
  const [isVisible, setIsVisible] = useState(true); // Muestra u oculta el header
  const [lastScrollY, setLastScrollY] = useState(0); // Almacena la última posición del scroll

  useEffect(() => {
    const handleScroll = () => {
      // Obtiene la posición actual del scroll
      const currentScrollY = window.scrollY;
      const isScrolledCheck = currentScrollY > 0;

      // Actualiza el estado de isScrolled si el usuario ha hecho scroll
      setIsScrolled(isScrolledCheck);

      // Determina la dirección del scroll y actualiza el estado de isVisible
      currentScrollY > lastScrollY ? setIsVisible(false) : setIsVisible(true);

      // Almacena la última posición del scroll
      setLastScrollY(currentScrollY);
    };

    // Agrega el event listener para el scroll
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { isScrolled, isVisible };
};

export default useScrollDirection;
