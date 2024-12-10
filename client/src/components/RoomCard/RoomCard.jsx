import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import style from "./RoomCard.module.css";
import { useLocation } from "react-router-dom";
import { cleanRoom } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faArrowRightLong,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const RoomCard = ({
  img,
  price,
  guest,
  specialties,
  maxAdult,
  maxChild,
  nameHotel,
  numRoom,
  id,
  description,
}) => {
  const dispatch = useDispatch();

  // const cleanRoomDetail = () => {
  //   dispatch(cleanRoom());
  // };
  const location = useLocation();
  return (
    <div>
      <div className={style.containerRoomCards}>
        <Card className={`${style.Card} h-75`}>
          <Link
            to={`/rooms/${id}`}
            // onClick={() => cleanRoomDetail()}
            className={`text-decoration-none fs-5 text-danger `}
          >
            <Card.Img className={`${style.img}`} variant="top" src={img} />
            <Card.Body className="d-flex flex-column gap-3">
              <div className="d-flex justify-content-between">
                <h3 className={style.titleRoom}>{numRoom}</h3>
                <div className={style.priceContainer}>${price}</div>
              </div>
              <div className={`${style.Data} d-flex justify-content-between`}>
                <p className={style.param}>
                  {description}
                </p>
              </div>
              <Card.Text
                className={`${style.childAdultsContainer} fs-5`}
              ></Card.Text>
              <Card.Text className={`${style.childAdultsContainer} fs-5`}>
                <span className={style.iconChildren}></span>
                <p className={style.paddingMax}>{maxChild} children</p>
                <span className={style.iconAdults}></span>
                <p className={style.paddingMax}>{maxAdult} adults</p>
              </Card.Text>
              <Card.Text className={`${style.Text} fs-5`}></Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </div>
      {/* )} */}
    </div>
  );
};

export default RoomCard;
