import React, { useState } from "react";
import { BsInfoCircleFill, BsLink } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/img1.webp";
import ImageTwo from "../../images/img2.webp";
import ImageThree from "../../images/img3.jpeg";
import ImageFour from "../../images/img4.jpeg";
import ImageFive from "../../images/img5.jpeg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Notes APp",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "To-do-List",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Portfolio",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Image-Search",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Development" },
  { filterId: 3, label: "Design" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, SetHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    SetHoveredValue(index);
  }

  console.log(hoveredValue);

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="porfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItems ${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image}></img>
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
