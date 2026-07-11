'use client';

import { useEffect, useState } from 'react';

import { layout } from '@/shared/config/layout';

const getFluidNumber = (min: number, max: number, viewportWidth: number) => {
  if (viewportWidth <= layout.fluidMinViewport) {
    return min;
  }

  const progress =
    (viewportWidth - layout.fluidMinViewport) /
    (layout.fluidMaxViewport - layout.fluidMinViewport);

  return min + (max - min) * progress;
};

export const useFluidValue = (min: number, max: number) => {
  const getInitialValue = () =>
    typeof window === 'undefined' ? min : getFluidNumber(min, max, window.innerWidth);

  const [value, setValue] = useState(getInitialValue);

  useEffect(() => {
    const updateValue = () => {
      setValue(getFluidNumber(min, max, window.innerWidth));
    };

    updateValue();
    window.addEventListener('resize', updateValue);

    return () => {
      window.removeEventListener('resize', updateValue);
    };
  }, [max, min]);

  return value;
};
