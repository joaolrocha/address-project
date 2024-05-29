import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './_header.scss';
import { HeaderProps } from './useHeader';



const Header = ({ tittle }: HeaderProps) => {
  return (
    <div className='header-container'>
      <div className='header-container-icon'>
        <ArrowBackIosNewIcon style={{width: '20px', height: '20px'}}/>
      </div>

      <div className='header-container-title'>
        {tittle}
      </div>

    </div>
  )
}

export default Header