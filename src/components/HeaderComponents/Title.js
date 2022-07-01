

function Title(props) {
    return (
      <h1 className="p-5 text-4xl font-bold tracking-wide text-txt-white">
        {props.children}
      </h1>
    );
  }
  
  export default Title;