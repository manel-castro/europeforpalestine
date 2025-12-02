// Shared store between phone and desktop. Will be executed during loading screen.
import { setCookie, getCookie } from "./utils/cookies";

import { header, about, contact, services, navbar } from "./api/eng";
import {
  header as spHeader,
  about as spAbout,
  contact as spContact,
  services as spServices,
  navbar as spNavbar,
} from "./api/sp";

export type Lang = "SP" | "ENG";

const langApiSwitch = (lang: Lang) => {
  if (lang === "SP") {
    return {
      header: spHeader,
      about: spAbout,
      contact: spContact,
      services: spServices,
      navbar: spNavbar,
    };
  } else {
    return { header, about, contact, services, navbar };
  }
};

export const getDefaultLanguage = (): Lang => {
  const cookieLANG: "" | Lang = getCookie("LANG");
  const windowLanguage = window.navigator.language;
  let windowLANG: Lang;

  if (windowLanguage === "es-ES") {
    windowLANG = "SP";
  } else {
    windowLANG = "ENG";
  }

  let prefLANG: Lang;

  if (cookieLANG !== "") {
    prefLANG = cookieLANG;
  } else {
    prefLANG = windowLANG;
  }

  console.log("prefLang", prefLANG);
  return prefLANG;
};

export interface MyState {
  LANG: Lang | "" | any;
  API: {
    [key: string]: unknown;
  };
}

export const initialData: MyState = {
  LANG: getDefaultLanguage(),
  API: langApiSwitch(getDefaultLanguage()),
};

export const storeReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case "SET_LANG": {
      console.log("Change", action.LANG);
      setCookie("LANG", action.LANG, 999);
      return { ...state, LANG: action.LANG, API: langApiSwitch(action.LANG) };
    }
    default:
      return state;
  }
};
