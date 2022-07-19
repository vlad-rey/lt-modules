import style from "./style.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useModals } from "../../context/ModalsProvider";

export function HeaderMobile(props) {

  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const modals = useModals()

  function onInputFormOpen() {
    modals.NamePhoneModalChangeVisibility()
  }

  function openBurgerMenu() {
    setBurgerOpen(!isBurgerOpen);
    isBurgerOpen === false
      ? (document.body.className = "popUp")
      : (document.body.className = "");
  }

  return (
    <>
      <nav className={`${style.navigation_mobile} ${isBurgerOpen ? style.burgerOpen : undefined}`}>
        <div className={style.header_mobile}>
          <button
            className={style.header_mobile__burger}
            onClick={openBurgerMenu}
          >
            <BurgerVector isBurgerOpen={isBurgerOpen} />
          </button>
          <div className={style.header_mobile__logo}>
            <Link href="/">
              <a>
                <img src={props.logo} alt="logo" />
              </a>
            </Link>
          </div>
          <button
            onClick={onInputFormOpen}
            className={style.header_mobile__call}
            style={isBurgerOpen === true ? { display: "none" } : null}
          >
            {phoneIcon}
          </button>
        </div>
        {isBurgerOpen ? (
          <div className={style.mobile__burger_menu}>
            {props.data.map((item, index) => (
              item.items ?
                (<HeaderAccordion
                  data={item.items}
                  id={index}
                  link={item.link}
                  title={item.name}
                  click={openBurgerMenu}
                />) : (
                  <NonBurgerItem
                    link={item.link}
                    text={item.name}
                    click={openBurgerMenu} />
                )
            ))}
          </div>
        )
          : ""}
      </nav>
    </>
  );
}

export function HeaderAccordion(props) {
  function onMenuButtonClick() {
    document.body.className = "";
  }
  return (
    <div className={style.accordion}>
      <input
        type="checkbox"
        name="tab-group"
        id={props.id}
        className={style.accordion__input}
      />
      <label htmlFor={props.id} className={style.tab_title}>
        {props.link ?
          (<Link href={props.link}>
            <p
              onClick={(onMenuButtonClick, props.click)}
              className={style.accordion__text}
            >
              {props.title}
            </p>
          </Link>)
          :
          <p
            className={style.accordion__text}
          >
            {props.title}
          </p>}
        <div className={style.accordion__arrow}>
          {accordionArrow}
        </div>
      </label>
      <span className={style.tab_content}>
        <ul>
          {props.data.map((item, index) => (
            <HeaderAccordionItem
              key={index}
              link={item.link}
              linkA={item.linkA}
              text={item.name}
              click={props.click}
              developing={item.developing}
            />
          ))}
        </ul>
      </span>
    </div >
  );
}

export function HeaderAccordionItem(props) {
  function onMenuButtonClick() {
    document.body.className = "";
  }
  return (
    <Link href={props.link ? props.link : ""}>
      <a target={props.blank ? "_blank" : false}>
        <li
          onClick={(onMenuButtonClick, props.click)}
          className={style.tab_content__list}
        >
          {props.text}
        </li>
      </a>
    </Link>
  );
}

function NonBurgerItem(props) {
  function onMenuButtonClick() {
    document.body.className = "";
  }
  return (
    <div onClick={(onMenuButtonClick, props.click)} className={style.nonBurgerItem}>
      <Link href={props.link}>
        <a>
          <p className={style.nonBurgerItem_text}>
            {props.text}
          </p>
        </a>
      </Link>
    </div>
  )
}

function BurgerVector(props) {
  return (
    <svg
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      className={props.isBurgerOpen ? style.burger_svg_active : undefined}
    >
      <line
        className={style.burger_line_top}
        y1="0.5"
        x2="20"
        y2="0.5"
        stroke="white"
      />
      <line
        className={style.burger_line_bottom}
        y1="10.5"
        x2="20"
        y2="10.5"
        stroke="white"
      />
    </svg>)
}

const phoneIcon = (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle
      className={style.phone_icon__circle}
      cx="13"
      cy="13"
      r="13"
      fill="white"
    />
    <path
      d="M19.0075 15.535C18.085 15.535 17.1925 15.385 16.36 15.115C16.0975 15.025 15.805 15.0925 15.6025 15.295L14.425 16.7725C12.3025 15.76 10.315 13.8475 9.2575 11.65L10.72 10.405C10.9225 10.195 10.9825 9.9025 10.9 9.64C10.6225 8.8075 10.48 7.915 10.48 6.9925C10.48 6.5875 10.1425 6.25 9.7375 6.25H7.1425C6.7375 6.25 6.25 6.43 6.25 6.9925C6.25 13.96 12.0475 19.75 19.0075 19.75C19.54 19.75 19.75 19.2775 19.75 18.865V16.2775C19.75 15.8725 19.4125 15.535 19.0075 15.535Z"
      fill="#070707"
    />
  </svg>
)

const cross = (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
    <line
      x1="1.35355"
      y1="0.646447"
      x2="16.2028"
      y2="15.4957"
      stroke="white"
    />
    <line
      y1="-0.5"
      x2="21"
      y2="-0.5"
      transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 1)"
      stroke="white"
    />
  </svg>
)

const accordionArrow = (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
    <path
      d="M10.59 7.40997L6 2.82997L1.41 7.40997L1.23266e-07 5.99997L6 -2.72274e-05L12 5.99997L10.59 7.40997Z"
      fill="white"
    />
  </svg>
)
