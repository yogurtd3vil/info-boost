const moment = require('moment');
moment.locale('pt-br')

const boostData = moment('2022-03-06T17:52:37.877000+00:00'); //premium_guild_since
const databoost = new Date(boostData);
const dataAtual = new Date();
const diff = dif(databoost, dataAtual);
const boostCalc = boostData.clone().add(boost(diff.week), 'months');
const boostMS = boostCalc.diff(moment(), true);
const boostinfo = moment.duration(boostMS);
const unixTimestamp = Math.floor(boostCalc.valueOf() / 1000); // unix <t:${unixTimestamp}:R>


console.log(`faltam ${boostinfo.months()} meses, ${boostinfo.days()} dias e ${boostinfo.hours()} horas para o próximo up`); //tempo restante
console.log(`irá upar em: ${boostCalc.format("D [de] MMMM [de] YYYY [às] HH:mm")}`); //data exata

function boost(time) {
  let badge;
  switch (time) {
    case 0:
    case 1:
      badge = 2;
      break;
    case 2:
      badge = 3;
      break;
    case 3:
    case 4:
    case 5:
      badge = 6;
      break;
    case 6:
    case 7:
    case 8:
      badge = 9;
      break;
    case 9:
    case 10:
    case 11:
      badge = 12;
      break;
    case 12:
    case 13:
    case 14:
      badge = 15;
      break;
    case 15:
    case 16:
    case 17:
      badge = 18;
      break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      badge = 24;
      break;
    default:
      if (time >= 24) {
        badge = 24
      }
  }
  return badge;
}

function dif(date1, date2) {
  const segundos = Math.floor((date2 - date1) / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const diff = {
    sec: segundos % 60,
    min: minutos % 60,
    hour: horas % 24,
    day: dias % 31,
    week: Math.floor(dias / 31),
  };
  
  return diff;
}

