const moment = require('moment');
moment.locale('pt-br')

const boostData = moment('2023-03-31T00:34:55.655000+00:00'); //premium_guild_since
const diff = moment().diff(boostData, 'weeks');
const boostCalc = boostData.clone().add(boost(diff), 'months');
const boostMS = boostCalc.diff(moment(), true);
const boostinfo = moment.duration(boostMS);

console.log(`faltam ${boostinfo.months()} meses, ${boostinfo.days()} dias e ${boostinfo.hours()} horas para o próximo up`); //tempo restante
console.log(`irá upar em: ${boostCalc.format("D [de] MMMM [de] YYYY [às] HH:mm")}`); //data exata

function boost(mes) {
  if (mes >= 24) {
    return 24;
  } else if (mes >= 18) {
    return 18;
  } else if (mes >= 15) {
    return 15;
  } else if (mes >= 12) {
    return 12;
  } else if (mes >= 9) {
    return 9;
  } else if (mes >= 6) {
    return 6;
  } else if (mes >= 3) {
    return 3;
  } else {
    return 2;
  }
}
