export const addArrowsToMultipleLinks = (menuClass, arrowClass, arrowClick) => {
  const links = document.querySelectorAll(`.${menuClass} li`);
  links.forEach(link => {
    const innerUl = link.querySelector('ul');
    const innerArrow = link.querySelector(`.${arrowClass}`);
    if (innerUl && !innerArrow) {
      const arrowSpan = document.createElement('span');
      arrowSpan.className = arrowClass;
      arrowSpan.innerHTML = `<svg viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L25 26L46 4" stroke='currentColor' stroke-width=8 stroke-linecap="round" /></svg>`;
      arrowSpan.addEventListener('click', e => {
        arrowClick(e);
      });
      link.insertAdjacentElement('afterbegin', arrowSpan);
    }
  });
};

export const calculateHeightOfInnerUl = element => {
  const childElements = element.children;
  let totalHeight = 0;

  for (let i = 0; i < childElements.length; i++) {
    totalHeight += childElements[i].offsetHeight;
  }

  return totalHeight;
};

export const arrowBtnAction = (targetBtn, classOpen) => {
  const innerLi = targetBtn.closest('li');
  const innerUl = innerLi.querySelector('ul');
  innerLi.classList.toggle(classOpen);

  if (!innerLi.classList.contains(classOpen)) {
    const allInnerUl = innerLi.querySelectorAll('ul');
    allInnerUl.forEach(ul => {
      ul.style.height = `${calculateHeightOfInnerUl(ul)}px`;
      if (ul.closest('li').classList.contains(classOpen)) {
        ul.closest('li').classList.remove(classOpen);
      }
      setTimeout(() => {
        ul.style.height = '0px';
      }, 10);
    });
    return;
  }
  innerUl.style.height = `${calculateHeightOfInnerUl(innerUl)}px`;
  setTimeout(() => {
    innerUl.style.height = 'auto';
  }, 600);
};
