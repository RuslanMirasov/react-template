const Default = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="23" stroke={color} strokeWidth="4" />
    <circle cx="25" cy="11" r="4" fill={color} />
    <path d="M29 31C29 43 27.2091 43 25 43C22.7909 43 21 43 21 31C21 19 22.7909 19 25 19C27.2091 19 29 19 29 31Z" fill={color} />
  </svg>
);

const Logo = ({ size = 24 }) => (
  <svg width={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="25" fill="black" />
    <path
      d="M48 29.5C48 40.8218 37.7025 50 25 50C12.2975 50 2 40.8218 2 29.5C2 18.1782 12.2975 10.5 25 10.5C37.7025 10.5 48 18.1782 48 29.5Z"
      fill="#D60000"
    />
    <path
      d="M41 37.5C41 44.4036 33.8366 50 25 50C16.1634 50 9 44.4036 9 37.5C9 30.5964 16.1634 25 25 25C33.8366 25 41 30.5964 41 37.5Z"
      fill="#F7C800"
    />
  </svg>
);

const Error = ({ size = 50, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.0424 5.38355L48.0255 40.5197C49.3525 42.853 47.6673 45.75 44.9831 45.75H5.0169C2.33269 45.75 0.647527 42.853 1.97453 40.5197L21.9576 5.38354C23.2996 3.02395 26.7004 3.02395 28.0424 5.38355Z"
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M22.9062 17.7656C22.8854 16.9844 23.25 16.5938 24 16.5938H26.5C27.25 16.5938 27.6146 16.9844 27.5938 17.7656L27.1719 31.4219C27.151 32.099 26.8125 32.4375 26.1562 32.4375H24.3438C23.6875 32.4375 23.349 32.099 23.3281 31.4219L22.9062 17.7656ZM24.0625 39C23.3333 39 22.9688 38.6094 22.9688 37.8281V35.7344C22.9688 34.9531 23.3333 34.5625 24.0625 34.5625H26.4375C27.1667 34.5625 27.5312 34.9531 27.5312 35.7344V37.8281C27.5312 38.6094 27.1667 39 26.4375 39H24.0625Z"
      fill={color}
    />
  </svg>
);

const SelectArrow = ({ size = 50, color }) => (
  <svg width={size} viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L25 26L46 4" stroke={color} strokeWidth={8} strokeLinecap="round" />
  </svg>
);

const Confirm = ({ size = 70, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 26.5L24.5 33.5L36.5 17" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <circle cx="25" cy="25" r="23.5" stroke={color} strokeWidth="3" />
  </svg>
);

const Smile = ({ size = 70, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="23.5" stroke={color} strokeWidth="3" />
    <circle cx="15" cy="19" r="6.5" stroke={color} strokeWidth="3" />
    <circle cx="34" cy="19" r="6.5" stroke={color} strokeWidth="3" />
    <path
      d="M14.5951 19.3699C14.0491 19.3699 14.0644 18.6617 14.5397 18.5499C15.0494 18.43 15.334 19.0903 14.7946 19.2701"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M33.643 19.669C33.643 19.271 33.522 18.8802 33.8868 18.6718C34.064 18.5705 34.7253 18.4252 34.74 18.7937C34.756 19.1934 34.4392 20.0578 33.8979 19.7134C33.4912 19.4545 33.3524 18.7354 33.8425 18.572"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M13.9968 33.8303C14.2495 33.8584 14.4194 34.2555 14.5508 34.4342C15.011 35.0601 15.5327 35.6597 16.2018 36.0686C17.9513 37.1377 19.9323 38.2386 21.9749 38.595C23.6042 38.8793 25.348 38.389 26.9391 38.0853C28.283 37.8289 29.6953 37.7841 30.8229 36.9218C32.3622 35.7447 33.5819 33.8067 34.3411 32.0352"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const Icon = ({ name, color = 'currentColor', ...props }) => {
  return (
    <>
      {!name && <Default color={color} {...props} />}
      {name === 'logo' && <Logo color={color} {...props} />}
      {name === 'error' && <Error color={color} {...props} />}
      {name === 'confirm' && <Confirm color={color} {...props} />}
      {name === 'select-arrow' && <SelectArrow color={color} {...props} />}
      {name === 'smile' && <Smile color={color} {...props} />}
    </>
  );
};

export default Icon;
