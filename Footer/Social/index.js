import Link from "next/link";
import style from "../footer.module.scss";

function FooterSocial(props) {
  return (
    <div className={style.footer_social}>
      <div className={style.footer_social_inside}>
        <img
          className={style.logo}
          src={props.logo}
        />
        <ul>
          {/* facebook */}
          <a
            href={props.facebook} target="_blank">
            <button>
              <li>
                {facebookIcon}
              </li>
            </button>
          </a>
          {/* instagram */}
          <a
            href={props.instagram}
            target="_blank"
          >
            <button>
              <li>
                {instagramIcon}
              </li>
            </button>
          </a>
          {/* youtube */}
          <a
            href={props.youtube}
            target="_blank"
          >
            <button>
              <li>
                {youtubeIcon}
              </li>
            </button>
          </a>
        </ul>
        <div className={style.footer_text}>
          <Link href="/privacy-policy">
            <a>
              <div>
                Privacy Policy
              </div>
            </a>
          </Link>
          <hr className={style.line} />
          <Link href="/sitemap/">
            <a>
              <div>
                Site-map
              </div>
            </a>
          </Link>
        </div>
        <div className={style.copyright}>
          Copyright © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default FooterSocial;

const facebookIcon = (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.1048 0.606445C15.1883 0.606445 16.0679 1.4861 16.0679 2.56956V14.7113C16.0679 15.7947 15.1883 16.6744 14.1048 16.6744H10.7636V10.6202H12.8537L13.2513 8.02733H10.7636V6.34468C10.7636 5.63534 11.1111 4.94388 12.2254 4.94388H13.3565V2.73642C13.3565 2.73642 12.33 2.56124 11.3486 2.56124C9.29964 2.56124 7.96047 3.80302 7.96047 6.05113V8.02733H5.68294V10.6202H7.96047V16.6744H1.96311C0.879657 16.6744 0 15.7947 0 14.7113V2.56956C0 1.4861 0.879626 0.606445 1.96311 0.606445H14.1048V0.606445Z"
      className={style.social_icon}
    />
  </svg>
)
const instagramIcon = (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path
      d="M8.21429 0.606445C6.03237 0.606445 5.75878 0.615694 4.90187 0.654792C4.04675 0.693826 3.46273 0.829618 2.95168 1.02823C2.42338 1.23355 1.97534 1.50826 1.52871 1.95489C1.08208 2.40152 0.807369 2.84956 0.602055 3.37786C0.403439 3.88888 0.267647 4.4729 0.228613 5.32802C0.189514 6.18493 0.180298 6.45852 0.180298 8.64043C0.180298 10.8223 0.189514 11.0959 0.228613 11.9528C0.267647 12.8079 0.403439 13.392 0.602055 13.903C0.807369 14.4313 1.08208 14.8793 1.52871 15.326C1.97534 15.7726 2.42338 16.0473 2.95168 16.2526C3.46273 16.4512 4.04675 16.587 4.90187 16.626C5.75878 16.6651 6.03237 16.6744 8.21429 16.6744C10.3962 16.6744 10.6698 16.6651 11.5267 16.626C12.3818 16.587 12.9658 16.4512 13.4768 16.2526C14.0051 16.0473 14.4532 15.7726 14.8998 15.326C15.3465 14.8793 15.6212 14.4313 15.8265 13.903C16.0251 13.392 16.1609 12.8079 16.1999 11.9528C16.239 11.0959 16.2482 10.8223 16.2482 8.64043C16.2482 6.45852 16.239 6.18493 16.1999 5.32802C16.1609 4.4729 16.0251 3.88888 15.8265 3.37786C15.6212 2.84956 15.3465 2.40152 14.8998 1.95489C14.4532 1.50826 14.0051 1.23355 13.4768 1.02823C12.9658 0.829618 12.3818 0.693826 11.5267 0.654792C10.6698 0.615694 10.3962 0.606445 8.21429 0.606445ZM8.21429 2.05404C10.3594 2.05404 10.6135 2.0622 11.4607 2.10085C12.244 2.1366 12.6694 2.26748 12.9525 2.37747C13.3275 2.52322 13.5951 2.69734 13.8762 2.97846C14.1574 3.25958 14.3315 3.52724 14.4772 3.90221C14.5872 4.18531 14.7181 4.6107 14.7538 5.394C14.7925 6.24115 14.8007 6.49526 14.8007 8.64043C14.8007 10.7856 14.7925 11.0397 14.7538 11.8868C14.7181 12.6701 14.5872 13.0955 14.4772 13.3786C14.3315 13.7536 14.1574 14.0213 13.8762 14.3024C13.5951 14.5835 13.3275 14.7576 12.9525 14.9034C12.6694 15.0134 12.244 15.1443 11.4607 15.18C10.6137 15.2186 10.3596 15.2268 8.21429 15.2268C6.06895 15.2268 5.81491 15.2186 4.96786 15.18C4.18455 15.1443 3.75916 15.0134 3.47606 14.9034C3.10106 14.7576 2.83343 14.5835 2.55228 14.3024C2.27116 14.0213 2.09704 13.7536 1.95133 13.3786C1.8413 13.0955 1.71042 12.6701 1.67467 11.8868C1.63602 11.0397 1.62786 10.7856 1.62786 8.64043C1.62786 6.49526 1.63602 6.24115 1.67467 5.394C1.71042 4.6107 1.8413 4.18531 1.95133 3.90221C2.09704 3.52724 2.27116 3.25958 2.55228 2.97846C2.83343 2.69734 3.10106 2.52322 3.47606 2.37747C3.75916 2.26748 4.18455 2.1366 4.96786 2.10085C5.81501 2.0622 6.06911 2.05404 8.21429 2.05404Z"
      className={style.social_icon}
    />
    <path
      d="M8.21358 11.3167C6.73454 11.3167 5.53557 10.1178 5.53557 8.63875C5.53557 7.15971 6.73454 5.96074 8.21358 5.96074C9.69258 5.96074 10.8916 7.15971 10.8916 8.63875C10.8916 10.1178 9.69258 11.3167 8.21358 11.3167ZM8.21358 4.51318C5.93507 4.51318 4.08801 6.36024 4.08801 8.63875C4.08801 10.9172 5.93507 12.7643 8.21358 12.7643C10.4921 12.7643 12.3391 10.9172 12.3391 8.63875C12.3391 6.36024 10.4921 4.51318 8.21358 4.51318Z"
      className={style.social_icon}
    />
    <path
      d="M13.4678 4.35615C13.4678 4.8886 13.0362 5.32021 12.5037 5.32021C11.9713 5.32021 11.5397 4.8886 11.5397 4.35615C11.5397 3.8237 11.9713 3.39209 12.5037 3.39209C13.0362 3.39209 13.4678 3.8237 13.4678 4.35615Z"
      className={style.social_icon}
    />
  </svg>
)
const vkIcon = (
  <svg width="26" height="14" viewBox="0 0 26 14" fill="none">
    <path
      className={style.social_icon}
      d="M24.7379 0.778583H20.566C20.3958 0.778582 20.2287 0.819263 20.0825 0.896297C19.9364 0.97333 19.8167 1.08383 19.7362 1.21605C19.7362 1.21605 18.0723 3.91634 17.5378 4.82585C16.1 7.27254 15.1689 6.50444 15.1689 5.36891V1.45359C15.1689 1.12641 15.0214 0.812631 14.7589 0.581282C14.4963 0.349933 14.1403 0.219963 13.769 0.219963H10.6323C10.2051 0.191975 9.77695 0.260683 9.3884 0.41956C8.99985 0.578437 8.66384 0.822208 8.41229 1.12772C8.41229 1.12772 10.005 0.900786 10.005 2.79194C10.005 3.26089 10.0325 4.60994 10.0574 5.74145C10.0621 5.90819 10.0087 6.07219 9.90426 6.21131C9.79984 6.35042 9.6495 6.45795 9.47352 6.51939C9.29755 6.58082 9.10443 6.59319 8.92022 6.55483C8.73602 6.51647 8.5696 6.42923 8.44345 6.30489C7.15956 4.73135 6.09607 3.02691 5.27609 1.22861C5.20567 1.09408 5.09294 0.980182 4.95127 0.900416C4.8096 0.82065 4.64494 0.778367 4.47682 0.778583C3.57208 0.778583 1.7616 0.778583 0.686418 0.778583C0.582157 0.777957 0.479283 0.799646 0.386633 0.841785C0.293983 0.883925 0.214327 0.945255 0.154509 1.02051C0.0946904 1.09576 0.0564984 1.18268 0.0432136 1.27381C0.0299288 1.36494 0.0419484 1.45755 0.0782398 1.54368C1.22919 4.32568 6.18711 13.0682 11.8461 13.0682H14.2279C14.4775 13.0682 14.7168 12.9809 14.8933 12.8254C15.0698 12.6698 15.1689 12.4589 15.1689 12.239V10.9716C15.1689 10.8126 15.2217 10.6571 15.3208 10.5242C15.4198 10.3914 15.5609 10.2869 15.7265 10.2238C15.8921 10.1607 16.075 10.1416 16.2527 10.169C16.4305 10.1964 16.5952 10.269 16.7267 10.3778L19.5776 12.7382C19.8337 12.9502 20.1718 13.0682 20.5231 13.0682H24.2668C26.0724 13.0682 26.0724 11.9641 25.088 11.1098C24.3952 10.5085 21.8951 8.18636 21.8951 8.18636C21.681 7.99092 21.5533 7.73443 21.5351 7.46326C21.5169 7.19209 21.6093 6.92412 21.7958 6.70778C22.6038 5.77068 23.9256 4.23672 24.4861 3.57958C25.2524 2.68139 26.6391 0.778583 24.7379 0.778583Z"
    />
  </svg>
)
const youtubeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clipPath="url(#clip0)">
      <path
        d="M19.2393 4.99822C19.0176 4.16859 18.3643 3.51532 17.5346 3.29358C16.0308 2.89062 10.0014 2.89063 10.0014 2.89063C10.0014 2.89063 3.97185 2.89062 2.46804 3.29358C1.63856 3.51532 0.985137 4.16859 0.763437 4.99822C0.360596 6.50188 0.360596 9.63927 0.360596 9.63927C0.360596 9.63927 0.360596 12.7766 0.763437 14.2801C0.985137 15.1097 1.63856 15.7632 2.46804 15.9849C3.97185 16.3877 10.0014 16.3877 10.0014 16.3877C10.0014 16.3877 16.0308 16.3877 17.5346 15.9849C18.3643 15.7632 19.0176 15.1097 19.2393 14.2801C19.6421 12.7766 19.6421 9.63927 19.6421 9.63927C19.6421 9.63927 19.6421 6.50188 19.2393 4.99822ZM8.0731 12.5315V6.74697L13.0825 9.63927L8.0731 12.5315Z"
        className={style.social_icon}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          className={style.social_icon}
          width="19.2815"
          height="19.2815"
          transform="translate(0.360596)"
        />
      </clipPath>
    </defs>
  </svg>
)
const telegramIcon = (
  <svg width="17" height="17" viewBox="0 0 22 22" fill="none" >
    <path d="M10.9946 0.650391C8.14458 0.650391 5.51958 1.77539 3.64458 3.65039C1.76958 5.52539 0.56958 8.15039 0.56958 11.0004C0.56958 13.8504 1.69458 16.4754 3.64458 18.3504C5.51958 20.2254 8.14458 21.3504 10.9946 21.3504C13.8446 21.3504 16.4696 20.2254 18.3446 18.3504C20.2196 16.4754 21.4196 13.8504 21.4196 11.0004C21.3446 5.30039 16.6946 0.650391 10.9946 0.650391ZM17.1446 6.57539L15.0446 16.7754C14.9696 17.2254 14.3696 17.4504 13.9946 17.1504L10.7696 14.7504L9.11958 16.4004C8.81958 16.7004 8.36958 16.5504 8.21958 16.1754L7.01958 12.4254L3.86958 11.4504C3.41958 11.3004 3.41958 10.7754 3.86958 10.6254L16.3946 5.75039C16.7696 5.67539 17.2946 6.05039 17.1446 6.57539Z" fill="white" className={style.social_icon} />
  </svg>

)