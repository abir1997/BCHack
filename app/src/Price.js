import React from "react";
import { Statistic, Col, Row } from "flwww";

const PriceCheck = () => {
  return (
    <div style={{ margin: "60px 0" }}>
      <Row>
        <Col grid="md-6" style={{ marginBottom: "60px" }}>
          <Statistic title="Trip Duration" value={13} currency="Days" />
        </Col>

        <Col grid="md-6" style={{ marginBottom: "60px" }}>
          <Statistic
            title="Tesla Inc"
            value={256.59}
            prevValue={235.2}
            currency="usd"
          />
        </Col>
      </Row>
    </div>
  );
};

export default PriceCheck;
