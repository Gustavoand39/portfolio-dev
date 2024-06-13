import { useState, useEffect } from "react";

interface UseActiveSectionReturn {
  activeSection: string;
}

/**
 * Hook personalizado para detectar la sección activa basada en el scroll.
 * Se usa para resaltar la sección actual en la barra de navegación.
 *
 * @param sectionIds - Array de IDs de las secciones a observar.
 * @returns {UseActiveSectionReturn} - El ID de la sección actualmente visible.
 */
const useActiveSection = (sectionIds: string[]): UseActiveSectionReturn => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map((id) => document.getElementById(id));
      const scrollY = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.find((section) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          return scrollY >= offsetTop && scrollY < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return { activeSection };
};

export default useActiveSection;
