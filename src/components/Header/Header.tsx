import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './_header.scss';
import { HeaderProps } from './useHeader';



const Header = ({ tittle }: HeaderProps) => {
  return (
    <div className='header-container'>
      <div className='header-container-icon'>
        <ArrowBackIcon />
      </div>

      <div className='header-container-title'>
        {tittle}
      </div>

    </div>
  )
}

export default Header