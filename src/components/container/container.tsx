import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { TContainer } from './type';
import { ContainerUI } from '../ui/container';

export const Container: FC<TContainer> = memo(({ title, children }) => {
  const location = useLocation();
  const [titleStyle, setTitleStyle] = useState('text_type_main-large');

  useEffect(() => {
    if (/feed|profile/i.test(location.pathname)) {
      setTitleStyle('text_type_digits-default');
    }
  });
  return (
    <>
      <ContainerUI title={title} titleStyle={titleStyle} children={children} />
    </>
  );
});
