import React from 'react';
import { GiFruitTree } from "react-icons/gi";

export function FixedHeader() {
  return (

    <div className="header_panel" role="navigation">
      <div className="menu-overlay">&nbsp;</div>
      <div className="header_panel_inner primary-b1">
        <div className="col-12 p-0 m-0 header-table">
          <div className="headerIcon"><GiFruitTree /></div>
          <div className="headerTitle"><span className="headerSpacing">|</span> Healthy Fruits</div>
        </div>
      </div>
    </div>
  )
}