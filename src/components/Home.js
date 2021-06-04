import React from "react";
import Section from "./Section";
import s from "../images/model-s.jpg";
import y from "../images/model-y.jpg";
import three from "../images/model-3.jpg";
import x from "../images/model-x.jpg";
import sp from "../images/solar-panel.jpg";
import sr from "../images/solar-roof.jpg";
import accessories from "../images/accessories.jpg";

function Home() {
  return (
    <div>
      <div>
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg={s}
          leftButton="custom order"
          rightButton="existing inventory"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg={y}
          leftButton="custom order"
          rightButton="existing inventory"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg={three}
          leftButton="custom order"
          rightButton="existing inventory"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg={x}
          leftButton="custom order"
          rightButton="existing inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg={sp}
          leftButton="order now"
          rightButton="learn more"
        />
        <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg={sr}
          leftButton="order now"
          rightButton="learn more"
        />
        <Section
          title="Accessories"
          backgroundImg={accessories}
          leftButton="Shop now"
        />
      </div>
    </div>
  );
}

export default Home;
