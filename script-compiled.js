"use strict";

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var Container = ReactBootstrap.Container;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var DATA = {
  pricing: [{
    title: "Large paint",
    description: "We get you a big 900mm x 600mm delievered to you ASAP!",
    price: "USD$150",
    id: "pricing-1",
    image: "./public/medium.jpg"
  }, {
    title: "Medium paint",
    description: "We get you a 600mm x 400mm delievered to you ASAP!",
    price: "USD$100",
    id: "pricing-2",
    image: "./public/large.jpg"
  }, {
    title: "Large & medium paint",
    description: "We get you a big 900mm x 600mm and a 600mm x 400mm delievered to you ASAP!",
    price: "USD$225",
    id: "pricing-3",
    image: "./public/both.jpg"
  }]
};

var Navibar = function Navibar() {
  return /*#__PURE__*/React.createElement(Navbar, {
    id: "navbar",
    expand: "sm",
    bg: "light"
  }, /*#__PURE__*/React.createElement(Navbar.Brand, null, /*#__PURE__*/React.createElement("img", {
    id: "header-img",
    src: "https://www.artnews.com/wp-content/uploads/2020/05/shutterstock_83717239-1.jpg",
    height: "25",
    className: "mr-1"
  }), "Watercolor"), /*#__PURE__*/React.createElement(Navbar.Toggle, null), /*#__PURE__*/React.createElement(Navbar.Collapse, null, /*#__PURE__*/React.createElement(Nav, {
    className: "ml-auto"
  }, /*#__PURE__*/React.createElement(Nav.Link, {
    href: "#info"
  }, "Home"), /*#__PURE__*/React.createElement(Nav.Link, {
    href: "#instructions"
  }, "Instructions"), /*#__PURE__*/React.createElement(Nav.Link, {
    href: "#pricing"
  }, "Offers"))));
};

var Info = function Info() {
  return /*#__PURE__*/React.createElement(Row, {
    className: "section py-3",
    id: "info"
  }, /*#__PURE__*/React.createElement(Col, {
    xs: 12,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "my-3"
  }, "Hello Watercolor lovers")), /*#__PURE__*/React.createElement(Col, {
    xs: 12,
    className: "mt-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-0 text-justify"
  }, "Looking to buy a new piece of art for your house or office? Your search is over!"), /*#__PURE__*/React.createElement("p", {
    className: "m-0 mt-2 text-justify"
  }, "We have the biggest collection of watercolor in the country. Out team work without stop to come out with ideas for every taste, to ensure we satisfy your needs for any space and any atmosphere you are trying to create")), /*#__PURE__*/React.createElement("img", {
    className: "mt-5",
    src: "./public/home.png",
    alt: "Watercolor painting of a cherry tree"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  }));
};

var Video = function Video() {
  return /*#__PURE__*/React.createElement(Col, {
    xs: 12,
    className: "text-center mt-5 mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "embed-responsive embed-responsive-16by9 video-container mx-auto"
  }, /*#__PURE__*/React.createElement("iframe", {
    className: "embed-responsive-item",
    src: "https://www.youtube.com/embed/ghJ7S0EKgtc",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })));
};

var Instructions = function Instructions() {
  return /*#__PURE__*/React.createElement(Row, {
    className: "section py-3",
    id: "instructions"
  }, /*#__PURE__*/React.createElement(Col, {
    xs: 12,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "my-3"
  }, "Instructions")), /*#__PURE__*/React.createElement(Col, {
    xs: 12
  }, /*#__PURE__*/React.createElement("p", null, "This couldn't be easier. Just take a look to our video below to see how to can hang your new paintings in the best possible way without any nails!"), /*#__PURE__*/React.createElement(Video, null)), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  }));
};

var PricingOption = function PricingOption(_ref) {
  var id = _ref.id,
      title = _ref.title,
      description = _ref.description,
      price = _ref.price,
      image = _ref.image;

  var handleClick = function handleClick() {
    alert("Thanks for visiting this site. This site was created for a freeCodeCamp challange, so it is not a real company.");
  };

  return /*#__PURE__*/React.createElement(Col, {
    md: 6,
    lg: 4,
    className: "py-3 px-3 mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricing-option mx-auto d-flex flex-column pb-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "order-1 text-center mb-3 d-flex align-items-center justify-content-center py-3 flex-grow-1 px-2"
  }, title), /*#__PURE__*/React.createElement("img", {
    src: image,
    className: "flex-grow-1 order-0"
  }), /*#__PURE__*/React.createElement("p", {
    className: "order-2 text-justify flex-grow-1 px-2"
  }, description), /*#__PURE__*/React.createElement("p", {
    className: "order-3 text-center price px-2"
  }, price), /*#__PURE__*/React.createElement(Button, {
    className: "order-4 mx-auto mt-auto px-2",
    onClick: handleClick
  }, "Buy me now!")));
};

var Pricing = function Pricing() {
  var Offers = DATA.pricing.map(function (offer) {
    return /*#__PURE__*/React.createElement(PricingOption, {
      id: offer.id,
      key: offer.id,
      title: offer.title,
      description: offer.description,
      price: offer.price,
      image: offer.image
    });
  });
  return /*#__PURE__*/React.createElement(Row, {
    className: "d-flex section py-3 justify-content-center",
    id: "pricing"
  }, /*#__PURE__*/React.createElement(Col, {
    xs: 12,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "my-3"
  }, "Current Offers")), /*#__PURE__*/React.createElement(Col, {
    xs: 12
  }, /*#__PURE__*/React.createElement("p", null, "We have several pricing offers for you, take a look below and choose the one that fits you best!")), Offers, /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  }));
};

var Footer = function Footer() {
  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("p", {
    id: "footer"
  }, "Created by Alejandro Aburto for a freeCodeCamp challange")));
};

var App = function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navibar, null), /*#__PURE__*/React.createElement(Container, {
    id: "container",
    className: "px-4 px-sm-5",
    fluid: true
  }, /*#__PURE__*/React.createElement(Info, null), /*#__PURE__*/React.createElement(Instructions, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Footer, null)));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));
