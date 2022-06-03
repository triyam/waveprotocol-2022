import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const Matic = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="no-wrap mt-3 align-middle">
            <div className="alert alert-info mt-3">
              <h3>
                Buy Token
                <br />
              </h3>
            </div>
            <h6>
              You can choose any of the following method to do your payment. The
              token balance will appear in your account after successful payment
            </h6>
            {/* <div className="form-group">
                <label className="form-label">Amount To be paid</label>
                <input
                  required
                  type="number"
                  id="phone"
                  className="form-control mb-1"
                />
              </div> */}
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Select Currency</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Select</option>
              <option>BTC:30576.03000000</option>
              <option>ETH:1835.310000000</option>
              <option>MATIC:0.619000000</option>
              <option>USDT:1</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label className="form-label">
              <h6>Number of (WPFM) token you want to purchase</h6>
            </label>
            <p>Balance: 0</p>
            <input
              required
              type="number"
              id="phone"
              className="form-control mb-1"
            />
          </div>

          {/* <hr className="border-light m-0" />
          <div className="card-body">
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control mb-1"
                defaultValue="nmaxwell"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Nelle Maxwell"
              />
            </div>
            <div className="form-group">
              <label className="form-label">E-mail</label>
              <input
                type="text"
                className="form-control mb-1"
                defaultValue="nmaxwell@mail.com"
              />
              <div className="alert alert-warning mt-3">
                Your email is not confirmed. Please check your inbox.
                <br />
                <a href="javascript:void(0)">Resend confirmation</a>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Company Ltd."
              />
            </div>
          </div> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Matic;
