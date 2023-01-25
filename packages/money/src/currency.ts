export enum ECurrency {
  rub = 'rub',
  usd = 'usd',
  eur = 'eur',
  cu = 'cu',
}

export const CURRENCY_UI_PROPS = {
  rub: {
    label: 'Russian Rouble',
    sign: "₽",
    color: '#FFB200',
  },
  usd: {
    label: 'US Dollar',
    sign: "$",
    color: '#02A0FC',
  },
  eur: {
    label: 'Euro',
    sign: "€",
    color: '#4339F2',
  },
  cu: {
    label: 'CU',
    sign: "CU",
    color: '#6c757d',
  },
};

export type TCurrencyValue = typeof CURRENCY_UI_PROPS[ECurrency];

export const CURRENCIES_LIST = Object.keys(CURRENCY_UI_PROPS) as ECurrency[];

export const CURRENCY_UI_PROPS_VALUES = Object.values(CURRENCY_UI_PROPS) as TCurrencyValue[];
