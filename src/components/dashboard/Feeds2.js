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
  Progress,
  Form,
  FormGroup,
  Label,
  Input
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
        
        <CardTitle tag="h4">Referrals</CardTitle>
        {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle> */}
        <h5 style={{color:"blue"}}>Refer to your friend & win 10% on 1st deposit done by your referee.</h5>
        <h6>Maximum $20 equivalent WPFM tokens for refer.</h6>

        <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your email id"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePhone">Phone</Label>
                <Input
                  id="examplePhone"
                  name="phone"
                  placeholder="Enter your mobile number"
                  type="number"
                />
              </FormGroup>
              </Form>
  <Button style={{margin:"0", display:"block", width:"100%"}} color="primary">
        Send Referal
      </Button>
      </CardBody>
    </Card>
  );
};

export default Feeds;
