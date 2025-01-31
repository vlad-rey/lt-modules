import { useFormik } from "formik";
import { useState } from "react";
import style from "../forms.module.scss";
import { useRouter } from "next/router";
import { icons } from "../icons/icons";
import { InputName, InputCall, InputEmail } from "../Inputs/Inputs";
import { useModals } from "../../../context/ModalsProvider";
import { useValidation } from "../../../context/ValidationProvider"
import { postData } from "../../functions/postData";

function turnOnScroll() {
  document.body.className = ""
}

export function PopUpNamePhone(props) {
  const validate = useValidation()
  const router = useRouter();
  const modals = useModals()
  const [agreement, changeAgreement] = useState(false);

  function onAgreementChange() {
    changeAgreement(!agreement);
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      postData(values, props.destinationURL, props.orderName, props.lang, window.location.hostname, router.query)
      modals.NamePhoneModalChangeVisibility();
      router.push(props.thank_you_page);
      turnOnScroll();
    },
  });

  return (
    <div className={style.inputs_block_out}>
      <div className={style.close_block} onClick={props.closeClick}></div>
      <div className={`${style.inputs_block} fade-up-animation`}>
        <div className={style.close}>
          <button onClick={props.closeClick}>{icons.cross}</button>
        </div>
        <div className={style.text_block}>
          <p className={style.title}>
            {props.title || "Fill in the form below"}
          </p>
          <p className={style.paragraph}>
            {props.subtitle || "Our manager will contact you"}
          </p>
        </div>
        <div className={style.inputs_block__inputs}>
          <form
            onSubmit={formik.handleSubmit}
          >
            <div className={style.inputs_block__input}>
              <InputName
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
              />
              <InputCall
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.errors.phone}
              />
            </div>
            <div className={style.agreement}>
              <div
                className={
                  agreement === true
                    ? style.agreement_dot_button_active
                    : style.agreement_dot_button
                }
                onClick={onAgreementChange}
              >
                {icons.dot}
              </div>
              <p className={style.agreement__text}>
                <span onClick={onAgreementChange}>
                  {props.agreement_text}
                </span>
                {" "}{props.agreement_link}
              </p>
            </div>
            <button
              type={agreement ? "submit" : "button"}
              className={`${agreement ? Object.keys(formik.errors).length == 0 ? style.general_button_active : style.general_button_inactive : style.general_button_inactive} "button-submit"`}
            >
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function PopUpEmailPhone(props) {
  const validate = useValidation()
  const router = useRouter();
  const modals = useModals()
  const [agreement, changeAgreement] = useState(false);

  function onAgreementChange() {
    changeAgreement(!agreement);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      postData(values, props.destinationURL, props.orderName, props.lang, window.location.hostname, router.query)
      modals.EmailPhoneModalChangeVisibility();
      router.push(props.thank_you_page);
      turnOnScroll();
    },
  });

  return (
    <div className={style.inputs_block_out}>
      <div className={style.close_block} onClick={props.closeClick}></div>
      <div className={style.inputs_block}>
        <div className={style.close}>
          <button onClick={props.closeClick}>{icons.cross}</button>
        </div>
        <div className={style.text_block}>
          <p className={style.title}>
            {props.title || "Fill in the form below"}
          </p>
          <p className={style.paragraph}>
            {props.subTitle || "Get an equipment catalog with prices"}
          </p>
        </div>
        <div className={style.inputs_block__inputs}>
          <form
            onSubmit={formik.handleSubmit}
          >
            <div className={style.inputs_block__input}>
              <InputEmail
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
              />
              <InputCall
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.errors.phone}
              />
            </div>
            <div className={style.agreement}>
              <div
                className={
                  agreement === true
                    ? style.agreement_dot_button_active
                    : style.agreement_dot_button
                }
                onClick={onAgreementChange}
              >
                {icons.dot}
              </div>
              <p className={style.agreement__text}>
                <span onClick={onAgreementChange}>
                  {props.agreement_text}
                </span>
                {" "}{props.agreement_link}
              </p>
            </div>
            <button
              type={agreement ? "submit" : "button"}
              className={`${agreement ? Object.keys(formik.errors).length == 0 ? style.general_button_active : style.general_button_inactive : style.general_button_inactive} "button-submit"`}
            >
              {props.buttonText || "Get catalog"}
            </button>
          </form>
        </div>
      </div >
    </div >
  );
}

export function PopUpEvent(props) {
  const validate = useValidation()
  const router = useRouter();
  const modals = useModals()
  const [agreement, changeAgreement] = useState(false);

  function onAgreementChange() {
    changeAgreement(!agreement);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      name: ""
    },
    validate,
    onSubmit: (values) => {
      postData(values, props.destinationURL, props.orderName, props.lang, window.location.hostname, router.query)
      modals.EventModalChangeVisibility();
      router.push(props.thank_you_page);
      turnOnScroll();
    },
  });

  return (
    <div className={style.inputs_block_out}>
      <div className={style.close_block} onClick={props.closeClick}></div>
      <div className={style.inputs_block}>
        <div className={style.close}>
          <button onClick={props.closeClick}>{icons.cross}</button>
        </div>
        <div className={style.text_block}>
          <p className={style.title}>
            {props.title || "Fill in the form below"}
          </p>
          <p className={style.paragraph}>
            {props.subTitle}
          </p>
        </div>
        <div className={style.inputs_block__inputs}>
          <form
            onSubmit={formik.handleSubmit}
          >
            <div className={style.inputs_block__input}>
              <InputName
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
              />
              <InputEmail
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
              />
              <InputCall
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.errors.phone}
              />
            </div>
            <div className={style.agreement}>
              <div
                className={
                  agreement === true
                    ? style.agreement_dot_button_active
                    : style.agreement_dot_button
                }
                onClick={onAgreementChange}
              >
                {icons.dot}
              </div>
              <p className={style.agreement__text}>
                <span onClick={onAgreementChange}>
                  {props.agreement_text}
                </span>
                {" "}{props.agreement_link}
              </p>
            </div>
            <button
              type={agreement ? "submit" : "button"}
              className={`${agreement ? Object.keys(formik.errors).length == 0 ? style.general_button_active : style.general_button_inactive : style.general_button_inactive} "button-submit"`}
            >
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function PopUpNameEmail(props) {
  const validate = useValidation()
  const router = useRouter();
  const modals = useModals()
  const [agreement, changeAgreement] = useState(false);

  function onAgreementChange() {
    changeAgreement(!agreement);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      postData(values, props.destinationURL, props.orderName, props.lang, window.location.hostname, router.query)
      modals.NameEmailModalChangeVisibility();
      router.push(props.thank_you_page)
        ;
      turnOnScroll();
    },
  });

  return (
    <div className={style.inputs_block_out}>
      <div className={style.close_block} onClick={props.closeClick}></div>
      <div className={style.inputs_block}>
        <div className={style.close}>
          <button onClick={props.closeClick}>{icons.cross}</button>
        </div>
        <div className={style.text_block}>
          <p className={style.title}>
            {props.title}
          </p>
          <p className={style.paragraph}>
            {props.subtitle}
          </p>
        </div>
        <div className={style.inputs_block__inputs}>
          <form
            onSubmit={formik.handleSubmit}
          >
            <div className={style.inputs_block__input}>
              <InputName
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
              />
              <InputEmail
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
              />
            </div>
            <div className={style.agreement}>
              <div
                className={
                  agreement === true
                    ? style.agreement_dot_button_active
                    : style.agreement_dot_button
                }
                onClick={onAgreementChange}
              >
                {icons.dot}
              </div>
              <p className={style.agreement__text}>
                <span onClick={onAgreementChange}>
                  {props.agreement_text}
                </span>
                {" "}{props.agreement_link}
              </p>
            </div>
            <button
              type={agreement ? "submit" : "button"}
              className={`${agreement ? Object.keys(formik.errors).length == 0 ? style.general_button_active : style.general_button_inactive : style.general_button_inactive} "button-submit"`}
            >
              {props.buttonText || "Get"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

