import * as CSSModules from 'react-css-modules';

import { Button as ButtonJsx } from './Button';
import * as styles from './style.m.scss';

export const Button = CSSModules(ButtonJsx, styles);
