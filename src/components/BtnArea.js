import Button from './BtnArea/Button.js'

const BtnArea = () => {
    return (
      <div className='w-3/5 h-2/4 my-5 bg-red-600 p-6 grid grid-cols-4 grid-rows-5 gap-4'>
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button /> 
        <Button spaceStyle="col-span-2"/> 
        <Button spaceStyle="col-span-2"/> 
      </div>
    );
  }
  
  export default BtnArea;