import React from "react";
import SerieMovie from "./SerieMovie";
import KRGavv from "../../../assets/images/KamenRider/KRGavv/KamenRiderGavv.png";
import MCU from "../../../assets/images/MCU/MCU.png";
import DCU from "../../../assets/images/DCU/DCU.png";
import SPSB from "../../../assets/images/SuperSentai/Boonboomger.webp";
const GroupSerieMovie = () => {
  const titleOfMovie = [
    {
      id: "KR",
      icon: <i className="fas fa-chevron-down"></i>,
      imgMovie: KRGavv,
      titleSerie: "Kamen Rider",
      titleMovie1: "Kamen Rider Gavv",
      titleMovie2: "Kamen Rider Gotchard",
      titleMovie3: "Kamen Rider Geat",
      titleMovie4: "Kamen Rider Revice",
      titleMovie5: "Kamen Rider Saber",
      titleMovie6: "Kamen Rider Zero One",
    },
    {
      id: "DS",
      titleSerie: "Demon Slayer",
      icon: null,
      imgMovie: null,
    },
    {
      id: "JS",
      titleSerie: "Jujutsu Kaisen",
    },
    {
      id: "MCU",
      icon: <i className="fas fa-chevron-down"></i>,
      imgMovie: MCU,
      titleSerie: "Marvel universe",
      titleMovie1: "Iron Man",
      titleMovie2: "Spider man",
      titleMovie3: "Hulk",
      titleMovie4: "Thor",
      titleMovie5: "captain america",
      titleMovie6: "Doctor Strange",
      titleMovie7: "Moon Knight",
      titleMovie8: "Thanos",
    },
    {
      id: "DCU",
      icon: <i className="fas fa-chevron-down"></i>,
      imgMovie: DCU,
      titleSerie: "Dc Universe",
      titleMovie1: "Spuer Man",
      titleMovie2: "Batman",
      titleMovie3: "wonder woman",
      titleMovie4: "Aquaman",
      titleMovie5: "the flash",
    },
    {
      id: "SPS",
      icon: <i className="fas fa-chevron-down"></i>,
      imgMovie: SPSB,
      titleSerie: "Super Sentai",
      titleMovie1: "Boonboomger",
      titleMovie2: "KingOhger",
      titleMovie3: "Donbrothers",
      titleMovie4: "Zenkaiger",
      titleMovie5: "Kiramager",
      titleMovie6: "Ryusoulger",
    },
  ];
  return (
    <React.Fragment>
      {titleOfMovie.map((t) => {
        return <SerieMovie titleOfSerie={t} key={t.id} />;
      })}
    </React.Fragment>
  );
};

export default GroupSerieMovie;
