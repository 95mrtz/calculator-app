import Button from "./BtnArea/Button.js";

const BtnArea = () => {
  return (
    <div className="w-3/5 h-2/4 my-5 bg-keypad-bg-1 rounded-md p-6 grid grid-cols-4 grid-rows-5 gap-4">
      <Button children="7" />
      <Button children="8" />
      <Button children="9" />
      <Button
        children="DEL"
        textColor="text-txt-white"
        colorStyle="bg-blue-key-bg-1"
        shadowColor="shadow-blue-key-shadow-1"
      />
      <Button children="4" />
      <Button children="5" />
      <Button children="6" />
      <Button children="+" />
      <Button children="1" />
      <Button children="2" />
      <Button children="3" />
      <Button children="-" />
      <Button children="." />
      <Button children="0" />
      <Button children="/" />
      <Button children="x" />
      <Button
        children="RESET"
        textColor="text-txt-white"
        colorStyle="bg-blue-key-bg-1"
        shadowColor="shadow-blue-key-shadow-1"
        spaceStyle="col-span-2"
      />
      <Button
        children="="
        textColor="text-txt-white"
        colorStyle="bg-red-key-bg-1"
        shadowColor="shadow-red-key-shadow-1"
        spaceStyle="col-span-2"
      />
    </div>
  );
};

export default BtnArea;
