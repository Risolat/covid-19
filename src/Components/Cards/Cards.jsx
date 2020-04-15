import React from 'react';
import CountUp from 'react-countup';
import cx from 'classnames'
import style from './Cards.module.css';


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
  if(!confirmed){
    return "Loading..."
  }
  return(
    <div className={style.container}>
    <div className={cx(style.card, style.confirmed)}>
        <h2 className={style.cardHeading}>Infected</h2>
        <p className={style.cardText}>
        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />  
        </p>
        <p className={style.cardText}>{new Date(lastUpdate).toDateString()}</p>
        <p className={style.cardNumber}>Number of active cases of COVID-19</p>
      </div>
      <div className={cx(style.card, style.recovered)}>
        <h2 className={style.cardHeading}>Recovered</h2>
        <p className={style.cardText}>
        <CountUp start={0} end={recovered.value} duration={2.5} separator="," /> 
        </p>
        <p className={style.cardText}>{new Date(lastUpdate).toDateString()}</p>
        <p className={style.cardNumber}>Number of recoveries from COVID-19</p>
      </div>
      <div className={cx(style.card, style.deaths)}>
        <h2 className={style.cardHeading}>Deaths</h2>
        <p className={style.cardText}>
        <CountUp start={0} end={deaths.value} duration={2.5} separator="," /> 
        </p>
        <p className={style.cardText}>{new Date(lastUpdate).toDateString()}</p>
        <p className={style.cardNumber}>Number of deaths caused by COVID-19</p>
      </div>
    </div>
  )
}
export default Cards;