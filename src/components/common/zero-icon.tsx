//types
import type { IZeroCrossIconProps } from '../../types/component-types';
//styles
import './zero-cross-icon.scss';

const ZeroIcon = ({ size }: IZeroCrossIconProps): JSX.Element => {
  return (
    <>
      <svg
        className={`zero-cross-icon zero-cross-icon--${size}`}
        aria-label="O"
        role="img"
        viewBox="0 0 128 128"
      >
        <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
      </svg>
    </>
  );
};

export default ZeroIcon;
