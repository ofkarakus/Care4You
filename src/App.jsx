import { useState, useEffect, createContext } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// import Component1 from "./components/Component1";
// import Component2 from "./components/Component2";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const PeopleContext = createContext();

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // const [people, setPeople] = useState([]);

  // const addToTable = (payload) => {
  //   setPeople((prevState) => {
  //     const tmpPeople = [...prevState];
  //     tmpPeople.push(payload);
  //     tmpPeople.sort((a, b) => new Date(a.birth) - new Date(b.birth));
  //     return tmpPeople;
  //   });
  // };

  return (
    <div>
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        {/* <div style={{ height: 200 }}>
          <PeopleContext.Provider value={{ addToTable, people }}>
            <Component1 />
            <Component2 />
          </PeopleContext.Provider>
        </div> */}
        {/* <Features data={landingPageData.Features} /> */}
        {/* <Services data={landingPageData.Services} /> */}
        <About data={landingPageData.About} />
        {/* <Gallery data={landingPageData.Gallery} /> */}
        {/* <Testimonials data={landingPageData.Testimonials} /> */}
        {/* <Team data={landingPageData.Team} /> */}
        <Contact data={landingPageData.Contact} />
      </div>
    </div>
  );
};

export default App;
