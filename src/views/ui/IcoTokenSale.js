import { Card, CardBody, CardTitle, CardSubtitle, Table ,Col, Row } from "reactstrap";
import TopCards from "../../components/dashboard/TopCards";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";


const tableData = [
  {
    avatar: user1,
    description: "Private + Seed Round",
    email: "hgover@gmail.com",
    percent: "20.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user2,
    description: "Private + Seed Round",
    email: "hgover@gmail.com",
    percent: "20.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user3,
    description: "Public Round",
    email: "hgover@gmail.com",
    percent: "10.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user4,
    description: "Liquidity + Listing",
    email: "hgover@gmail.com",
    percent: "30.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user5,
    description: "Hanna Gover",
    email: "hgover@gmail.com",
    percent: "5.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user5,
    description: "Hanna Gover",
    email: "hgover@gmail.com",
    percent: "15.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user5,
    description: "Hanna Gover",
    email: "hgover@gmail.com",
    percent: "20.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user5,
    description: "Hanna Gover",
    email: "hgover@gmail.com",
    percent: "20.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user5,
    description: "Hanna Gover",
    email: "hgover@gmail.com",
    percent: "20.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  },
  {
    avatar: user5,
    description: "Hanna Gover",
    email: "hgover@gmail.com",
    percent: "20.00%",
    supply: "10500000",
    weeks: "35",
    pricepertoken: "95K",
  }
];

const IcoTokenSale = () => {
  return (
    <>
    <Row>
        <Col>
          <TopCards
            bg="bg-light-success text-success"
            title="ICO Price WPFM Token"
            subtitle="ICO Price WPFM Token"
            earning="₮ 0.5 USD"
            icon="bi bi-coin"
          />
        </Col>
    </Row>
    <Row>
        <Col sm="3" lg="4">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Total Token Available"
            earning="21000000"
            icon="bi bi-globe2"
          />
        </Col>
        <Col sm="3" lg="4">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="USDT Deposit"
            earning="2,300"
            icon="bi bi-safe2-fill"
          />
        </Col>
        <Col sm="3" lg="4">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Holders"
            subtitle="Holders"
            earning="5000"
            icon="bi bi-cart-dash"
          />
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Funding</CardTitle>
          <CardSubtitle tag="h6">--hello--</CardSubtitle>

          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle> */}

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>DESCRIPTION OF TOKEN</th>
                <th>PERCENT</th>

                <th>SUPPLY</th>

                <th>PRICE PER TOKEN</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  {/* <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td> */}
                  <td>{tdata.description}</td>
                  <td>{tdata.percent}</td>
                  {/* <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                  <td>{tdata.supply}</td>
                  <td>{tdata.pricepertoken}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
    </>
  );
};

export default IcoTokenSale;
