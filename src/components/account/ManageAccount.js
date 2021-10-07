import { Fragment } from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

const ManageAccount = () => {
  const [t, i18n] = useTranslation("global");
  const userData = useSelector((state) => state.account.userData);

  // Se incluyen botones con configuración basica del idioma, cuando se refresca la aplicación
  // se va a cambiar al idioma por defecto y no al cambiado por el usuario, para eso se puede
  // guardar el idioma que el usuario seleccione en el local storage y siempre inicializar con el idioma
  // del local storage y si no hay ninguno poner el idioma inicial configurado en el i18n

  return (
    <Fragment>
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <div>{userData.name}</div>
      <div>{userData.email}</div>
      <div>{userData.position}</div>
      <div>{userData.language}</div>
    </Fragment>
  );
};

export default ManageAccount;
