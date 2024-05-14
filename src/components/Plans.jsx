import React from "react";

import formatToBRL from '../utils/currencyFormatter'

export const Plans = (props) => {
  return (
    <div id="plans" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Planos</h2>
          <p>
           Descrição dos Planos
          </p>
        </div>
        <div id="row" className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.description}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <div className="valueCard">
                      <p>R$</p>
                      <p className="value">{formatToBRL(d.value)}</p>
                    </div>
                    <div className="caption">
                      <h4>{d.description}</h4>
                      <p className="courseInfo">{d.course_info}</p>
                    </div>
                    <a className="btn btn-custom btn-lg" href={d.action} target="_blank" rel="noreferrer">Comprar</a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
