import StopwatchImg from "./images/StopwatchDemo.png";
import CarImg from "./images/Carprice.png";
import DigitImg from "./images/digit.png";
import MovieImg from "./images/MovieMania.png";

export default [
  {
    title: "Distributed Stopwatch",
    domains: ["App Dev", "Java", "Swing", "RMI"],
    desc: "How cool will it be to control one machine from another while they are on the same network? This application has a stopwatch which can be remotely controlled from any machine one the network. Similarly, you can control other stopwatches on the same network.",
    img: StopwatchImg,
    github: "https://github.com/rajtilakls2510/DistributedStopwatch",
  },
  {
    title: "Car Price Predictor",
    domains: ["Web Dev", "Machine Learning"],
    desc: "This project aims to predict the Price of an used Car by taking it's Company name, it's Model name, Year of Purchase, and other parameters. The data was Scraped from Quikr.com and the model is a Linear Regression model.",
    img: CarImg,
    github: "https://github.com/rajtilakls2510/car_price_predictor",
  },
  {
    title: "Digit Classifier",
    domains: ["Web Dev", "Deep Learning"],
    desc: "This website aims to recognize a digit that is drawn on the canvas provided. The model was trained on the famous MNIST Handwritten Digits Dataset.",
    img: DigitImg,
    github: "https://github.com/rajtilakls2510/DigitClassifier",
  },
  {
    title: "MovieMania",
    domains: ["Android", "TMDB"],
    desc: "Android app that can be used as a replacement for IMDB. The data is pulled from TMDB API. You can do many things here. You can get the information about the latest movies and tv shows. You can even get biodata of a person. You can rate movies and tv shows. You can even add them in your favourite list or watch later.",
    img: MovieImg,
    github: "https://github.com/rajtilakls2510/MovieMania",
  },
];
