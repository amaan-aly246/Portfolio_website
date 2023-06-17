import { useEffect , React } from "react";

function GridHoverEffect() {

    useEffect(() => {
      const gridItems = document.querySelectorAll('.grid-item');

      gridItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
          const siblings = getSiblings(item);
          siblings.forEach((sibling) => {
            sibling.style.opacity = '0.5';
          });
          item.style.cursor = 'pointer';
          item.style.transform = 'scale(1.02)';
        });

        item.addEventListener('mouseout', () => {
          const siblings = getSiblings(item);
          siblings.forEach((sibling) => {
            sibling.style.opacity = '1';
          });
          item.style.cursor = 'default';
          item.style.transform = 'none';
        });
      });

      function getSiblings(element) {
        const siblings = [];
        const siblingElements = element.parentNode.children;
        for (let i = 0; i < siblingElements.length; i++) {
          if (siblingElements[i] !== element) {
            siblings.push(siblingElements[i]);
          }
        }
        return siblings;
      }
    }, []);
  return null
}

export default GridHoverEffect