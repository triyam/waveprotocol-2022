import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
  CardImg,
  Progress
} from "reactstrap";

const FeedData = [
  {
    title: "Cras justo odio",
    icon: "bi bi-bell",
    color: "primary",
    date: "6 minute ago",
  },
  {
    title: "New user registered.",
    icon: "bi bi-person",
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: "bi bi-hdd",
    color: "danger",
    date: "6 minute ago",
  },
  {
    title: "New order received.",
    icon: "bi bi-bag-check",
    color: "success",
    date: "6 minute ago",
  },
  {
    title: "Cras justo odio",
    icon: "bi bi-bell",
    color: "dark",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: "bi bi-hdd",
    color: "warning",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: "bi bi-hdd",
    color: "danger",
    date: "6 minute ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      
      <CardBody>
        <div style={{marginBottom:"5%"}}>
          <h6>Account Status</h6>
          <Progress color="danger" value={5} />
          <h6>Account Balance</h6>
          <Progress color="danger" value={5} />
        </div>
        
        <CardTitle tag="h3">KYC Verification</CardTitle>
        {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle> */}
        <CardImg
      alt="Card image cap"
      src="https://waveprotocol2021.4v8iau1rta20e.ap-south-1.cs.amazonlightsail.com/static/img/kyc/passportphoto.png"
      top
      width="100%"
    />
    <CardTitle tag="h5">
    not_verified
  </CardTitle>
  <Button style={{margin:"0", display:"block", width:"100%"}} color="primary">
        Verify
      </Button>
      </CardBody>
    </Card>
  );
};

export default Feeds;
