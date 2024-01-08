import css from './Section.module.scss';
import { useState, useEffect } from 'react';

const hexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const rgbColor = /^rgb\(/;
const rgbaColor = /^rgba\(/;
const varColor = /^var\(/;

const bgCheck = bgStyle => {
  if (hexColor.test(bgStyle) || rgbColor.test(bgStyle) || rgbaColor.test(bgStyle) || varColor.test(bgStyle) || bgStyle === 'none') {
    return bgStyle;
  }
  return `url(${bgStyle}) no-repeat center center / cover`;
};

const Section = ({ bg = 'none', dark, padTop, padBottom, full, mask, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionClasses = {
    [css.Section]: true,
    [css.padTopNone]: padTop === 'none',
    [css.padTopSmall]: padTop === 'small',
    [css.padTopBig]: padTop === 'big',
    [css.padBottomNone]: padBottom === 'none',
    [css.padBottomSmall]: padBottom === 'small',
    [css.padBottomBig]: padBottom === 'big',
    [css.FullScreen]: full,
    [css.Dark]: dark,
    [css.Visible]: isVisible === true,
  };

  const currentSectionClasses = Object.keys(sectionClasses)
    .filter(key => sectionClasses[key])
    .join(' ');

  return (
    <section className={currentSectionClasses} style={{ background: bgCheck(bg) }}>
      {mask && <div className={css.Mask} style={{ background: mask }}></div>}
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
