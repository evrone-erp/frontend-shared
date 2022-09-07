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
};

export type TCurrency = keyof typeof CURRENCY_UI_PROPS;

export type TCurrencyValue = typeof CURRENCY_UI_PROPS[TCurrency];

export const CURRENCIES_LIST = Object.keys(CURRENCY_UI_PROPS) as TCurrency[];

export const CURRENCY_UI_PROPS_VALUES = Object.values(CURRENCY_UI_PROPS) as TCurrencyValue[];
