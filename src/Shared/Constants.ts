const STRING: string = "Test";
export { STRING };

const ROUTES = {
  HOMEPAGE: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  ABOUT: "/about-us"
};

const WILDCARD_ROUTES = {
  PUBLIC: ROUTES.HOMEPAGE,
  PRIVATE: ROUTES.LOGIN
};

const ROUTES_CONFIG = {
  HOMEPAGE: {
    path: ROUTES.HOMEPAGE,
    title: "Master Plan"
  },
  LOGIN: {
    path: ROUTES.LOGIN,
    title: "Login"
  },
  REGISTER: {
    path: ROUTES.REGISTER,
    title: "Register"
  },
  ABOUT: {
    path: ROUTES.ABOUT,
    title: "About us"
  }
};

const DATE_FORMATS = {
  DD_MM_YYY: "dd/MM/yyyy"
};

const INPUT_TYPES = {
  EMAIL: "email",
  PASSWORD: "password",
  TEXT: "text",
  NUMBER: "number",
  DATE: "date",
  MOBILE: "tel"
};

const REGEX = {
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  MOBILE: /^(\+\d{1,3}[- ]?)?\d{10}$/
};

const FORM_STEPS = {
  STEP_1: "1",
  STEP_2: "2",
  STEP_3: "3",
  STEP_4: "4"
};

export {
  ROUTES,
  WILDCARD_ROUTES,
  ROUTES_CONFIG,
  DATE_FORMATS,
  INPUT_TYPES,
  REGEX,
  FORM_STEPS
};
