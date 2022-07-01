function ThemeSelector(props) {
  return (
    <div className="p-7 w-80 flex flex-row justify-around items-center">
      <p
        className="text-txt-white font-light tracking-wide"
      >
        {" "}
        T H E M E :{" "}
      </p>
      <div>
        <button className="rounded-full	bg-red p-3"> 1 </button>
        <button className="rounded-full	bg-red p-3"> 2 </button>
        <button className="rounded-full	bg-red p-3"> 3 </button>
      </div>
    </div>
  );
}

export default ThemeSelector;
