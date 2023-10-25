// import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import CardItem from "./components/Task4";



const bannerCardItems = [
  {
    id: 1,
    headerText: "The Season Latest",
    description: "Get the seasons all latest designs in a flick of your hand",
    className: "card-1",
  },
  {
    id: 2,
    headerText: "Our New Designs",
    description:
      "Get the designs developed by our in-house team all for yourself",
    className: "card-2",
  },
  {
    id: 3,
    headerText: "Insiders",
    description: "Get the top class products for yourself with an extra off",
    className: "card-3",
  },
];

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1s',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2s',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3s',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4s',
  },
];


function App() {
  return (
    <>
      <Task1 />
      <Task2 />
      <Task3 />

      <div className="appContainer">
        <ul className="bannerList">
          {bannerCardItems.map((eachBanner) => (
            <Banner itemSource={eachBanner} key={eachBanner.id} />
          ))}
        </ul>
      </div>
      <div className="bg-container">
    <div className="content-container">
      <h1 className="main-heading">Learn 4.0 Technologies</h1>
      <p className="description">
        Get trained by alumni of IITs and top companies like
        Amazon,Microsoft,intel,Nvidia, Qualcomm etc. Learn directly from
        professionals involved in Product Development.
      </p>
      <ul className="cards-container">
        {cardsList.map(eachItem => (
          <CardItem details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  </div>
    </>
  );
}

export default App;
