import { useState } from 'react';

export default function usePopUp() {
  const [popUp, setPopUp] = useState(null);
  const closePopUp = () => setPopUp(null);
  const openPopUp = (information) => {
    setPopUp(information);
  };

  return { popUp, closePopUp, openPopUp };
}
