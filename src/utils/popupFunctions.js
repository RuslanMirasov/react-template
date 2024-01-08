const setPaddingsToFixedElements = scrollbar => {
  const fixedElements = [].filter.call(document.all, e => getComputedStyle(e).position === 'fixed');
  document.body.style.paddingRight = `${scrollbar}px`;
  fixedElements.forEach(fix => {
    if (!fix.classList.contains('popup')) {
      fix.style.paddingRight = `${scrollbar}px`;
    }
  });
};

export const bodyLock = scrollbar => {
  if (!document.body.classList.contains('locked')) {
    document.body.classList.add('locked');
    setPaddingsToFixedElements(scrollbar);
  }
};

export const bodyUnlock = () => {
  if (document.body.classList.contains('locked')) {
    document.body.classList.remove('locked');
    setPaddingsToFixedElements(0);
  }
};

export const showPopup = e => {
  const popupEl = document.querySelector('.popup');
  popupEl.classList.add('is-open');
};

export const hidePopup = () => {
  const popupEl = document.querySelector('.popup');
  if (popupEl && popupEl.classList.contains('is-open')) {
    popupEl.classList.remove('is-open');
  }
};
