import Title from './HeaderComponents/Title.js'
import ThemeSelector from './HeaderComponents/ThemeSelector.js'

function Header() {
  return (
    <div className='w-3/5 h-20 my-5 bg-yellow-600 rounded-md flex flex-row justify-between items-center'>
      <Title>
        calc
      </Title>
      <ThemeSelector/>
    </div>
  );
}

export default Header;