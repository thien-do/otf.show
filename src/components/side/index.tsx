import React from "react";
import { Tw } from "styles";

import Header from "../header";
import FeatureList from "./feature-list";
import { featureArr } from "features";

const layout = Tw()
  .w640().lt1280W320().lt960WFull()
  .flexNone().$();

const titleTw = Tw().px36().mt36().text24().leading36().text718().$();

const Side: React.FC = () => (
  <aside className={`${layout}`}>
    <div className={Tw().px36().$()}>
      <Header links={[{
        href: "https://github.com/dvkndn/otf.show/issues/1",
        text: "edit & contribute"
      }]} />
    </div>
    <p className={titleTw}>Digits & Numbers</p>
    <div className={Tw().mt24().$()}>
      <FeatureList features={featureArr.filter(f => f.type === "digit")} />
    </div>
    <p className={titleTw}>Letters & Ligatures</p>
    <div className={Tw().mt24().$()}>
      <FeatureList features={featureArr.filter(f => f.type === "letter")} />
    </div>
  </aside>
);

export default Side;
