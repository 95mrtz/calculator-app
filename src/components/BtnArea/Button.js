
const Button = ( {children,shadowColor ="shadow-grayish-orange-key-shadow-1",textColor = "text-txt-grayish-blue-1",  colorStyle = "bg-light-grayish-orange-key-bg-1", spaceStyle = "col-span-1" } ) => {
    return (
      <button className={`${colorStyle} ${spaceStyle} rounded-md shadow-md ${shadowColor}`}>
        <p className={`${textColor} text-3xl font-extrabold`}>
          {children}
        </p>
      </button>
    );
  }
  
  export default Button;