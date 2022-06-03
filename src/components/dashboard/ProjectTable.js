import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
// import user1 from "../../assets/images/users/user1.jpg";
// import user2 from "../../assets/images/users/user2.jpg";
// import user3 from "../../assets/images/users/user3.jpg";
// import user4 from "../../assets/images/users/user4.jpg";
// import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    sr:1,
    tokenAvatar: 'https://waveprotocol2021.4v8iau1rta20e.ap-south-1.cs.amazonlightsail.com/static/img/small-logos/btc.png',
    tokenName: "Bitcoin",
    investment: "3",
    purchase:"$50000",
    current: "$60000",
    daily: "3%",
    sevenDays: "5%"
  },
  {
    sr:2,
    tokenAvatar: 'https://waveprotocol2021.4v8iau1rta20e.ap-south-1.cs.amazonlightsail.com/static/img/small-logos/eth.png',
    tokenName: "Etherium",
    investment: "10",
    purchase:"$3000",
    current: "$5000",
    daily: "-1%",
    sevenDays: "2%"
  },
  {
    sr:3,
    tokenAvatar: 'https://waveprotocol2021.4v8iau1rta20e.ap-south-1.cs.amazonlightsail.com/static/img/small-logos/matic.png',
    tokenName: "Matic",
    investment: "8",
    purchase:"$30000",
    current: "$500",
    daily: "7%",
    sevenDays: "12%"
  },
  {
    sr:4,
    tokenAvatar: 'https://waveprotocol2021.4v8iau1rta20e.ap-south-1.cs.amazonlightsail.com/static/img/small-logos/shib.png',
    tokenName: "Shibu.Inc",
    investment: "12",
    purchase:"$1000",
    current: "$8900",
    daily: "3%",
    sevenDays: "2%"
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Price</CardTitle>
          {/* <CardSubtitle tag="h6">--hello--</CardSubtitle> */}

          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle> */}

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr className="text-center">
                <th>SR NO</th>
                <th>TOKEN NAME</th>

                <th>INVESTMENT%</th>

                <th>PURCHASE RATE</th>
                <th>CURRENT RATE</th>
                <th>DAILY%</th>
                <th>7 DAYS%</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.sr}</td>
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.tokenAvatar}
                        className="rounded-circle"
                        alt="tokenAvatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.tokenName}</h6>
                        {/* <span className="text-muted">{tdata.email}</span> */}
                      </div>
                    </div>
                  </td>
                  <td>{tdata.investment}</td>
                  <td>{tdata.purchase}</td>
                  

                  <td>{tdata.current}</td>
                  <td>{tdata.daily}</td>
                  <td>{tdata.sevenDays}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
