const Navbar = ReactBootstrap.Navbar;
const Nav = ReactBootstrap.Nav;
const Container = ReactBootstrap.Container;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;
const Button = ReactBootstrap.Button;

const DATA = {
  pricing: [
    {
      title: "Large paint",
      description: "We get you a big 900mm x 600mm delievered to you ASAP!",
      price: "USD$150",
      id: "pricing-1",
      image:
        "./public/medium.jpg",
    },
    {
      title: "Medium paint",
      description: "We get you a 600mm x 400mm delievered to you ASAP!",
      price: "USD$100",
      id: "pricing-2",
      image:
        "./public/large.jpg",
    },
    {
      title: "Large & medium paint",
      description:
        "We get you a big 900mm x 600mm and a 600mm x 400mm delievered to you ASAP!",
      price: "USD$225",
      id: "pricing-3",
      image:
        "./public/both.jpg",
    },
  ],
};

const Navibar = () => {
  return (
    <Navbar id="navbar" expand="sm" bg="light">
      <Navbar.Brand>
        <img
          id="header-img"
          src="https://www.artnews.com/wp-content/uploads/2020/05/shutterstock_83717239-1.jpg"
          height="25"
          className="mr-1"
        />
        Watercolor
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href="#info">Home</Nav.Link>
          <Nav.Link href="#instructions">Instructions</Nav.Link>
          <Nav.Link href="#pricing">Offers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Info = () => {
  return (
    <Row className="section py-3" id="info">
      <Col xs={12} className="text-center">
        <h2 className="my-3">Hello Watercolor lovers</h2>
      </Col>
      <Col xs={12} className="mt-3">
        <p className="m-0 text-justify">
          Looking to buy a new piece of art for your house or office? Your
          search is over!
        </p>
        <p className="m-0 mt-2 text-justify">
          We have the biggest collection of watercolor in the country. Out team
          work without stop to come out with ideas for every taste, to ensure we
          satisfy your needs for any space and any atmosphere you are trying to
          create
        </p>
      </Col>
      <img
        className="mt-5"
        src="./public/home.png"
        alt="Watercolor painting of a cherry tree"
      />
      <div className="section-divider" />
    </Row>
  );
};

const Video = () => {
  return (
    <Col xs={12} className="text-center mt-5 mb-3">
      <div className="embed-responsive embed-responsive-16by9 video-container mx-auto">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/ghJ7S0EKgtc"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Col>
  );
};

const Instructions = () => {
  return (
    <Row className="section py-3" id="instructions">
      <Col xs={12} className="text-center">
        <h2 className="my-3">Instructions</h2>
      </Col>
      <Col xs={12}>
        <p>
          This couldn't be easier. Just take a look to our video below to see
          how to can hang your new paintings in the best possible way without
          any nails!
        </p>
        <Video />
      </Col>
      <div className="section-divider" />
    </Row>
  );
};

const PricingOption = ({ id, title, description, price, image }) => {
  const handleClick = () => {
    alert(
      "Thanks for visiting this site. This site was created for a freeCodeCamp challange, so it is not a real company."
    );
  };
  return (
    <Col md={6} lg={4} className="py-3 px-3 mt-4">
      <div className="pricing-option mx-auto d-flex flex-column pb-4">
        <h4 className="order-1 text-center mb-3 d-flex align-items-center justify-content-center py-3 flex-grow-1 px-2">
          {title}
        </h4>
        <img src={image} className="flex-grow-1 order-0" />
        <p className="order-2 text-justify flex-grow-1 px-2">{description}</p>
        <p className="order-3 text-center price px-2">{price}</p>
        <Button className="order-4 mx-auto mt-auto px-2" onClick={handleClick}>
          Buy me now!
        </Button>
      </div>
    </Col>
  );
};

const Pricing = () => {
  const Offers = DATA.pricing.map((offer) => (
    <PricingOption
      id={offer.id}
      key={offer.id}
      title={offer.title}
      description={offer.description}
      price={offer.price}
      image={offer.image}
    />
  ));
  return (
    <Row className="d-flex section py-3 justify-content-center" id="pricing">
      <Col xs={12} className="text-center">
        <h2 className="my-3">Current Offers</h2>
      </Col>
      <Col xs={12}>
        <p>
          We have several pricing offers for you, take a look below and choose
          the one that fits you best!
        </p>
      </Col>
      {Offers}
      <div className="section-divider" />
    </Row>
  );
};

const Footer = () => {
  return (
    <Row>
      <Col>
        <p id="footer">
          Created by Alejandro Aburto for a freeCodeCamp challange
        </p>
      </Col>
    </Row>
  );
};

const App = () => {
  return (
    <>
      <Navibar />
      <Container id="container" className="px-4 px-sm-5" fluid>
        <Info />
        <Instructions />
        <Pricing />
        <Footer />
      </Container>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
