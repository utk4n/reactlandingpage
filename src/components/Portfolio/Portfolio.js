import "./portfolio.scss";
import portfolio from "../../assets/port.webp";
import portfolio2 from "../../assets/port2.webp";
import portfolio3 from "../../assets/port3.webp";
const Portfolio = () => {
  // if you want more than that clean code, you should create a data ( array ), like this ;
  // const data = [{id : 1, title : "Project Name", src : "Image Src", link : "Github Link"}....].map(...)

  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_items">
          <div className="portfolio_item_img">
            <img src={portfolio} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" target="_blank" className="btn">
            Github
          </a>
        </article>
        <article className="portfolio_items">
          <div className="portfolio_item_img">
            <img src={portfolio2} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" target="_blank" className="btn">
            Github
          </a>
        </article>
        <article className="portfolio_items">
          <div className="portfolio_item_img">
            <img src={portfolio3} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" target="_blank" className="btn">
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
