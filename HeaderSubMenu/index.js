import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useGAEvents } from "../../context/GAEventsProvider";
import style from "./style.module.scss";

export default function HeaderSubMenu(props) {
	const GAEvents = useGAEvents();

	return (
		<div className={style.submenu}>
			<Fade direction="down" triggerOnce>
				<ul className={style.submenu_in}>
					<Link href="/outdoor-laser-tag">
						<a
							onClick={() =>
								GAEvents.buttonClick(
									"Header Sub Menu",
									"Link Click",
									"/outdoor-laser-tag"
								)
							}
						>
							<li>
								<span className={style.vector}>{outDoor}</span>
								<span
									className={`
                    ${props.out && style.active}
                    ${style.text}
                  `}
								>
									Outdoor equipment
								</span>
							</li>
						</a>
					</Link>
					<Link href="/indoor-laser-tag-equipment">
						<a
							onClick={() =>
								GAEvents.buttonClick(
									"Header Sub Menu",
									"Link Click",
									"/indoor-laser-tag-equipment"
								)
							}
						>
							<li>
								<span className={style.vector}>{inDoor}</span>
								<span
									className={`
                    ${props.in && style.active}
                    ${style.text}`}
								>
									Indoor Equipment
									<p className={style.newitem}>New</p>
								</span>
							</li>
						</a>
					</Link>
					<Link href="/outdoor-laser-tag/shock-band">
						<a
							onClick={() =>
								GAEvents.buttonClick(
									"Header Sub Menu",
									"Link Click",
									"/outdoor-laser-tag/shock-band"
								)
							}
						>
							<li>
								<span className={style.vector}>{schokBand}</span>
								<span
									className={`${style.text} ${
										props.shockBand === true ? style.active : null
									}`}
								>
									Shock-band
								</span>
							</li>
						</a>
					</Link>
					<Link href="/equipment/game-based-devices">
						<a
							onClick={() =>
								GAEvents.buttonClick(
									"Header Sub Menu",
									"Link Click",
									"/equipment/game-based-devices"
								)
							}
						>
							<li>
								<span className={style.vector}>{scriptDevices}</span>
								<span
									className={`${props.script === true ? style.active : null} ${
										style.text
									}`}
								>
									Game-based devices
								</span>
							</li>
						</a>
					</Link>
					<Link href="/equipment/software">
						<a
							onClick={() =>
								GAEvents.buttonClick(
									"Header Sub Menu",
									"Link Click",
									"/equipment/software"
								)
							}
						>
							<li>
								<span className={style.vector}>{soft}</span>
								<span
									className={`${props.soft === true ? style.active : null} ${
										style.text
									}`}
								>
									Software
								</span>
							</li>
						</a>
					</Link>
					<Link href="/equipment/accessories">
						<a
							onClick={() =>
								GAEvents.buttonClick(
									"Header Sub Menu",
									"Link Click",
									"/equipment/accessories"
								)
							}
						>
							<li>
								<span className={style.vector}>{accessories}</span>
								<span
									className={`${
										props.accessories === true ? style.active : null
									} ${style.text}`}
								>
									Accessories
								</span>
							</li>
						</a>
					</Link>
					<Link href="/equipment/sets/">
						<a
							onClick={() =>
								GAEvents.buttonClick(
									"Header Sub Menu",
									"Link Click",
									"/equipment/sets/"
								)
							}
						>
							<li>
								<span className={style.vector}>{sets}</span>
								<span
									className={`${props.sets === true ? style.active : null} ${
										style.text
									}`}
								>
									Sets for business
								</span>
							</li>
						</a>
					</Link>
				</ul>
			</Fade>
		</div>
	);
}

const outDoor = (
	<svg width="93" height="63" viewBox="0 0 93 63" fill="none">
		<g clipPath="url(#clip0)">
			<path
				d="M91.624 39.171L89.9595 37.4961C89.7116 37.2467 89.3751 37.1067 89.0248 37.1067H62.0955C61.8906 37.1067 61.6971 37.0151 61.5655 36.8573L61.3063 36.5455L60.9508 36.1879C60.7851 36.0211 60.56 35.927 60.3248 35.927H56.4949C55.8498 35.927 55.2111 35.8302 54.5951 35.6381L48.4165 33.7126C48.1218 33.6209 47.817 33.5738 47.5083 33.5738H44.2325C44.0655 33.5738 43.9314 33.71 43.9314 33.8767V34.2751H43.1801V32.7301C43.1801 32.1472 42.7096 31.6738 42.1303 31.6738H41.2652C40.9831 31.6738 40.7125 31.7883 40.5152 31.9907L39.0163 33.5293C38.7735 33.7775 38.6382 34.1122 38.6382 34.4609V34.9763H23.2972C23.1315 34.9763 22.967 34.9394 22.8165 34.8668L21.7541 34.3552C21.3063 34.1389 20.8169 34.0269 20.3198 34.0269H14.2208C14.1803 34.0269 14.1399 34.0205 14.1007 34.0078L12.7903 33.5802C12.6917 33.5484 12.5879 33.5318 12.4842 33.5318H11.0158L10.6047 33.0139C10.4504 32.8192 10.2151 32.7059 9.96723 32.7059H8.82004C8.51775 32.7059 8.27238 32.9528 8.27238 33.2569V33.8385L7.76771 34.1771C7.46795 34.3781 7.28708 34.7167 7.28708 35.0794V35.5592C7.28708 35.717 7.1606 35.8442 7.00376 35.8442H6.1108C6.00329 35.8442 5.90337 35.9015 5.85025 35.9957L5.39871 36.7796C5.37215 36.8255 5.35823 36.8776 5.35823 36.9311V37.4541H5.06606C4.9459 37.4541 4.8308 37.5025 4.74479 37.5878L4.36282 37.9721C4.27808 38.0574 4.23001 38.1745 4.23001 38.2954V39.4688C4.23001 39.5897 4.27808 39.7055 4.36282 39.792L4.65246 40.0834C4.73721 40.1687 4.85357 40.2171 4.97373 40.2171H5.39871V40.3851H2.68567C2.33152 40.3851 1.99887 40.52 1.75097 40.7656C1.26654 41.2454 0.988281 41.9135 0.988281 42.5969V45.0353C0.988281 45.7162 1.25642 46.3691 1.73579 46.8514L1.80662 46.9227C2.05832 47.1772 2.40108 47.3197 2.75776 47.3197H6.43459C6.83048 47.3197 7.15175 46.9965 7.15175 46.5981V46.3589H8.21166C8.49878 46.3589 8.77324 46.4709 8.98067 46.6707L10.4719 48.1126C10.5351 48.1737 10.5718 48.259 10.5718 48.348V50.7419C10.5718 51.0702 10.6945 51.3871 10.9146 51.6302L11.2548 52.0031C11.5027 52.2742 11.8518 52.4294 12.2173 52.4294H13.6074C13.9008 52.4294 14.1841 52.3225 14.4067 52.1304L15.1568 51.4775C15.3984 51.2675 15.707 51.1517 16.027 51.1517C16.0573 51.1517 16.0877 51.153 16.1181 51.1542L33.0186 52.3149C33.9735 52.3798 34.8526 52.9016 35.3724 53.7097L40.0712 61.0096C40.5367 61.7338 41.3221 62.1703 42.1784 62.183C42.5085 62.2658 42.8487 62.3065 43.1877 62.3065C43.7253 62.3065 44.2514 62.2047 44.751 62.0023L75.5595 51.2013C76.2501 50.9595 76.9812 50.8501 77.711 50.8806L77.8425 50.8857C78.5609 50.9163 79.268 51.0804 79.9269 51.3693L87.1073 54.528C87.273 54.6006 87.4513 54.6388 87.6322 54.6388H90.4009C90.7487 54.6388 91.0814 54.5 91.3267 54.2531L91.6265 53.9515C91.8719 53.7046 92.0097 53.3699 92.0097 53.0199V40.1114C92.011 39.7589 91.8719 39.4204 91.624 39.171ZM34.4579 42.7127C33.9267 42.7127 33.4967 42.28 33.4967 41.7455V39.5133C33.4967 38.9788 33.9267 38.5461 34.4579 38.5461H37.8957C38.4269 38.5461 38.857 38.9788 38.857 39.5133V41.7455C38.857 42.28 38.4269 42.7127 37.8957 42.7127H34.4579ZM46.0171 57.5009L43.8049 58.4962C43.6114 58.5827 43.4065 58.6272 43.194 58.6272C43.0056 58.6272 42.8209 58.5916 42.6451 58.5216C42.4073 58.4274 42.2037 58.2518 42.0734 58.0304L35.6507 47.0614C35.5128 46.826 35.5381 46.5269 35.7152 46.3194L35.7367 46.294C35.8581 46.1514 36.0339 46.07 36.2198 46.07H40.4178L40.3634 46.7967C40.3368 47.1505 40.247 47.4915 40.0965 47.8123L39.8448 48.348C39.8119 48.418 39.7942 48.4969 39.7942 48.5746C39.7942 48.8673 40.0307 49.1053 40.3216 49.1053H40.8718V49.5456C40.8718 49.7136 41.0072 49.8485 41.1729 49.8485H42.1695C42.2492 49.8485 42.3226 49.8892 42.3643 49.9579L46.3346 56.4548C46.4041 56.5694 46.4421 56.7017 46.4421 56.8366C46.4446 57.123 46.2777 57.3839 46.0171 57.5009ZM58.7349 53.3661L56.572 54.3664C56.1837 54.5459 55.7537 54.6413 55.3262 54.6413C55.1327 54.6413 54.9391 54.6222 54.7494 54.584C53.9893 54.4339 53.3278 53.9986 52.8838 53.3597L49.2487 48.1279C48.9958 47.7639 48.8958 47.3045 48.9755 46.8679C49.0767 46.3131 49.4448 45.8511 49.9596 45.6297L50.0962 45.5711C50.2859 45.4897 50.487 45.4451 50.6932 45.4388L54.0247 45.3293C54.0437 45.328 54.0614 45.328 54.0803 45.328C54.604 45.328 55.0897 45.5648 55.4135 45.9796L59.3104 50.9544C59.5279 51.2319 59.6468 51.578 59.6468 51.9318C59.6481 52.5465 59.2901 53.109 58.7349 53.3661ZM87.488 48.5568C87.488 49.0785 87.1996 49.5583 86.7392 49.8001C86.3193 50.0203 85.8185 50.0127 85.4061 49.7772L80.2406 46.8349C80.0572 46.7305 79.8953 46.5931 79.76 46.4302C79.4008 45.9936 79.2755 45.4095 79.4235 44.8635L79.9965 42.7509C80.0989 42.3742 80.3544 42.0599 80.701 41.8855C81.107 41.6806 81.5547 41.575 82.0088 41.575H86.0588C86.3762 41.575 86.6836 41.6857 86.9277 41.8893L86.9922 41.9428C87.3046 42.2037 87.4855 42.5906 87.4855 42.9991V48.5568H87.488Z"
				fill="#1D1D1F"
			/>
			<path
				d="M82.5419 9.34128L80.5218 7.20979C80.2183 6.89039 79.7936 6.70622 79.3549 6.70622H72.0079C71.9314 6.70622 71.8599 6.6766 71.8064 6.6225L71.448 6.2606C71.2797 6.0906 71.0552 5.99658 70.8167 5.99658H66.9551C66.3047 5.99658 65.6607 5.89741 65.0396 5.70422L58.8097 3.75562C58.5126 3.66289 58.2052 3.61523 57.894 3.61523H54.5923C54.4239 3.61523 54.2888 3.75304 54.2888 3.92176V4.32487H53.5312V2.76135C53.5312 2.17149 53.0568 1.69238 52.4727 1.69238H51.6004C51.3173 1.69238 51.0418 1.80958 50.8442 2.01307L49.3329 3.57016C49.0868 3.82387 48.9516 4.15744 48.9516 4.51291V5.0358H33.4847C33.3176 5.0358 33.1506 4.99716 33.0001 4.92504L31.9301 4.4073C31.4812 4.18964 30.9813 4.07502 30.4839 4.07502H24.3344C24.2936 4.07502 24.2527 4.06858 24.2132 4.0557L22.892 3.62296C22.7925 3.59076 22.6879 3.57402 22.5834 3.57402H21.1015L20.687 3.04984C20.5301 2.8515 20.2955 2.73817 20.0442 2.73817H18.8875C18.5827 2.73817 18.3353 2.98802 18.3353 3.29583V3.88441L17.8265 4.22699C17.523 4.43048 17.3419 4.77306 17.3419 5.14012V5.62566C17.3419 5.78536 17.2131 5.91415 17.0562 5.91415H16.1558C16.0474 5.91415 15.9467 5.97211 15.8931 6.06741L15.4378 6.86077C15.411 6.90713 15.397 6.96122 15.397 7.01403V7.54336H15.1024C14.98 7.54336 14.8652 7.59101 14.7785 7.67859L14.3921 8.06754C14.3054 8.15512 14.2582 8.27103 14.2582 8.39467V9.58212C14.2582 9.70576 14.3054 9.82167 14.3921 9.90925L14.6841 10.2042C14.7708 10.2918 14.8856 10.3394 15.008 10.3394H15.4365V10.5094H12.701C12.3439 10.5094 12.0085 10.6459 11.7586 10.8945C11.2688 11.38 10.9883 12.0549 10.9883 12.7478V15.2154C10.9883 15.9096 11.2561 16.5613 11.742 17.052L11.8147 17.1254C12.071 17.3843 12.4115 17.526 12.7737 17.526H16.481C16.8802 17.526 17.2041 17.1988 17.2041 16.7957V16.5536H18.2728C18.5636 16.5536 18.8378 16.6656 19.0469 16.8678L20.5505 18.327C20.6143 18.3889 20.6513 18.4751 20.6513 18.5653V20.9879C20.6513 21.3214 20.7737 21.6408 20.9969 21.8868L21.3399 22.2642C21.5886 22.5385 21.9432 22.6956 22.3105 22.6956H23.712C24.0079 22.6956 24.2948 22.5874 24.518 22.393L25.2743 21.7323C25.5178 21.5198 25.829 21.4026 26.1517 21.4026C26.1823 21.4026 26.2129 21.4039 26.2435 21.4051L43.2841 22.5797C44.247 22.6454 45.1333 23.1734 45.6575 23.9913L50.3952 31.38C50.8646 32.1128 51.6565 32.5546 52.5199 32.5675C52.8528 32.6512 53.1958 32.6924 53.5376 32.6924C54.0796 32.6924 54.6101 32.5894 55.1139 32.3846L75.7165 24.0312C76.0901 23.8792 76.4842 23.8032 76.8859 23.8032C76.9178 23.8032 76.9497 23.8032 76.9828 23.8045L80.9006 23.9269C80.9248 23.9282 80.949 23.9282 80.972 23.9282C81.2691 23.9282 81.5459 23.8715 81.7958 23.7594C82.5202 23.4323 82.9883 22.7072 82.9883 21.9113V10.4708C82.9908 10.0471 82.8314 9.64652 82.5419 9.34128ZM44.7367 12.8637C44.2011 12.8637 43.7675 12.4258 43.7675 11.8849V9.62462C43.7675 9.0837 44.2011 8.64581 44.7367 8.64581H48.203C48.7386 8.64581 49.1722 9.0837 49.1722 9.62462V11.8836C49.1722 12.4245 48.7386 12.8624 48.203 12.8624H44.7367V12.8637ZM56.3917 27.8279L54.1612 28.8351C53.9661 28.9227 53.7595 28.9677 53.5453 28.9677C53.3552 28.9677 53.169 28.9317 52.9918 28.8609C52.752 28.7655 52.5467 28.5878 52.4153 28.3637L45.9393 17.2632C45.8003 17.025 45.8258 16.7223 46.0044 16.5124L46.026 16.4866C46.1485 16.3424 46.3257 16.2599 46.5132 16.2599H50.746L50.6911 16.9953C50.6643 17.3534 50.5738 17.6985 50.422 18.0231L50.1682 18.5653C50.1351 18.6361 50.1172 18.716 50.1172 18.7945C50.1172 19.0908 50.3557 19.3316 50.649 19.3316H51.2038V19.7772C51.2038 19.9472 51.3402 20.0837 51.5073 20.0837H52.5123C52.5926 20.0837 52.6666 20.125 52.7087 20.1945L56.7118 26.7693C56.782 26.8852 56.8202 27.0191 56.8202 27.1557C56.8228 27.4467 56.6545 27.7107 56.3917 27.8279ZM69.2149 23.6448L67.0342 24.6571C66.6426 24.8387 66.209 24.9353 65.778 24.9353C65.5829 24.9353 65.3877 24.916 65.1965 24.8773C64.43 24.7254 63.763 24.2849 63.3154 23.6384L59.6501 18.3438C59.3951 17.9754 59.2943 17.5105 59.3747 17.0687C59.4767 16.5072 59.8478 16.0397 60.3669 15.8156L60.5046 15.7564C60.6959 15.6739 60.8987 15.6289 61.1065 15.6224L64.4657 15.5117C64.4848 15.5104 64.5027 15.5104 64.5218 15.5104C65.0498 15.5104 65.5395 15.7499 65.866 16.1698L69.7952 21.2042C70.0146 21.485 70.1344 21.8353 70.1344 22.1933C70.1357 22.8154 69.7748 23.3847 69.2149 23.6448Z"
				fill="#1D1D1F"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="91.0227"
					height="61.6154"
					fill="white"
					transform="translate(0.988281 0.692383)"
				/>
			</clipPath>
		</defs>
	</svg>
);
const inDoor = (
	<svg width="79" height="58" viewBox="0 0 79 58" fill="none">
		<path
			d="M77.7781 2.30937L77.303 2.26024L77.3457 1.72574C77.404 0.985779 76.8777 0.335148 76.1707 0.274104L73.0512 0.00462098C72.3443 -0.0564222 71.7226 0.494455 71.6643 1.23442L71.6287 1.67959L70.8208 1.5977C70.367 1.55154 69.9516 1.86718 69.8535 2.33171L68.1963 10.1408C68.0782 10.6946 67.7895 11.1934 67.3741 11.5597L64.1536 14.3989C63.2788 15.1701 62 15.1701 61.1237 14.3989L57.9033 11.5597C57.4879 11.1934 57.1991 10.6946 57.0811 10.1408L55.4239 2.33468C55.3257 1.86867 54.9104 1.55452 54.4566 1.60068L53.6486 1.68256L53.6131 1.2374C53.5547 0.497433 52.9345 -0.0534445 52.2262 0.00759869L49.1067 0.277082C48.3997 0.338125 47.8734 0.987268 47.9317 1.72872L47.9744 2.26322L47.4993 2.31235C47.0199 2.36148 46.6628 2.79474 46.6856 3.29798L46.8278 6.33822C46.835 6.50051 46.8606 6.65982 46.9032 6.81615L51.2887 22.811C51.3954 23.201 51.431 23.6075 51.394 24.011L51.0754 27.5038C51.128 27.5262 51.1792 27.55 51.2276 27.5783L52 28.0145H59.0711C59.2916 27.2507 59.7269 26.5733 60.3329 26.076L60.6031 26.4363C60.1024 26.8472 59.734 27.3951 59.5292 28.0145H60.5448C61.027 28.0145 61.4794 28.211 61.8193 28.5669L64.5121 31.3853C64.6188 31.497 64.7084 31.6205 64.7838 31.753C65.3727 31.223 65.7639 30.4979 65.8876 29.691L66.3229 29.7461L66.3201 29.7654C66.1735 30.7242 65.6928 31.5833 64.9673 32.1908C65.0142 32.3605 65.0398 32.5377 65.0398 32.7193V47.5067C65.0398 48.0248 64.8464 48.5131 64.4964 48.8794L64.1309 49.262C64.0768 49.3186 64.0185 49.3692 63.9602 49.4183C64.0597 49.4035 64.1607 49.3886 64.2603 49.3707L68.8137 48.5399C68.9687 48.5116 69.1252 48.4938 69.2817 48.4848L71.8862 48.3508C72.2518 48.3315 72.596 48.1677 72.8492 47.8908C72.9943 47.7315 73.1053 47.5409 73.1721 47.331L74.9218 41.8624C75.0967 41.3145 75.0626 40.7175 74.8265 40.1964L73.2802 36.7854C73.0185 36.2092 72.9673 35.5526 73.1337 34.9392L74.3386 30.5054C74.4054 30.2567 74.4282 29.9977 74.4054 29.7401L73.882 24.0125C73.845 23.609 73.8805 23.2025 73.9872 22.8124L78.3727 6.81764C78.4154 6.66131 78.441 6.502 78.4481 6.33971L78.5904 3.29946C78.616 2.79176 78.2575 2.35702 77.7781 2.30937ZM51.2077 2.2394L50.3912 2.31235L49.862 0.618031L50.66 0.548054L51.458 0.478078L51.2077 2.2394ZM57.8136 27.1376L56.8805 27.55C57.1707 26.3976 57.7695 25.3763 58.5775 24.5857L58.6714 25.6383L57.8136 27.1376ZM63.8634 25.9435C63.6387 25.8497 63.4026 25.7812 63.1622 25.741C62.5875 25.6443 62 25.7083 61.4595 25.9256L61.3016 25.4983C61.9146 25.2512 62.5804 25.1782 63.2319 25.2884C63.505 25.3346 63.7724 25.412 64.0256 25.5177L63.8634 25.9435ZM63.5548 23.7936L61.8862 23.7653L61.0797 23.1266C61.5775 22.9852 62.0996 22.9092 62.6387 22.9092C63.2447 22.9092 63.8307 23.0045 64.3812 23.1817L63.5548 23.7936ZM65.8976 28.6503C65.7795 27.7897 65.357 27.0125 64.7084 26.4631L64.9844 26.1073C65.7184 26.7296 66.1977 27.6095 66.3314 28.5847L65.8976 28.6503ZM66.7013 33.702L66.6074 32.6493L67.4652 31.1501L68.3983 30.7376C68.1081 31.89 67.5093 32.9114 66.7013 33.702ZM67.5235 27.2984L66.7127 25.7723L66.8378 24.7226C67.6202 25.5371 68.1864 26.5778 68.4424 27.7421L67.5235 27.2984ZM74.8876 2.31235L74.0711 2.2394L73.8208 0.476589L74.6188 0.546565L75.4168 0.616542L74.8876 2.31235Z"
			fill="#212121"
		/>
		<path
			d="M63.1227 32.4329L60.4957 29.777C60.2297 29.5067 60.0208 29.5373 59.6433 29.5373H51.3075C51.3604 29.5662 51.2474 29.5373 51.3075 29.5373L50.2422 28.9067C50.0892 28.8228 49.9147 28.778 49.7402 28.778H45.5345C43.7154 28.778 41.9364 28.431 40.2461 27.7486L35.956 26.0137C35.4368 25.804 34.8891 25.697 34.33 25.697H31.2711C31.2096 25.697 31.151 25.6725 31.1081 25.6291L30.313 24.8252C30.1385 24.6489 29.9054 24.5505 29.658 24.5505H28.2651C27.9648 24.5505 27.6659 24.6503 27.4243 24.831L26.0757 25.8402C25.9527 25.9327 25.8011 25.9833 25.6481 25.9833H22.8138C22.6636 25.9833 22.5163 25.9573 22.3762 25.9052L18.9154 24.6329C18.7681 24.5795 18.6137 24.552 18.4492 24.552L7.884 24.6185C7.33915 24.6214 6.81861 24.8599 6.45681 25.272L4.02858 28.0349C3.66106 28.4527 3.39364 28.9616 3.25778 29.5038L1.00688 38.482C0.915353 38.8464 0.936804 39.2252 1.0698 39.5765L2.55991 43.5365C2.76298 44.0758 3.21345 44.4864 3.76688 44.6324L17.494 48.2772C17.6441 48.3177 17.8 48.3379 17.9559 48.3379C18.515 48.3379 19.0527 48.0704 19.3945 47.6237L22.4763 43.5958C22.8252 43.1403 22.871 42.5201 22.5935 42.017L21.5124 40.0579L21.7026 39.7254H26.5019C26.5591 39.7254 26.5934 39.7572 26.6091 39.7775C26.6249 39.7963 26.6492 39.8382 26.6363 39.8946L26.6277 39.935C26.4676 40.6869 26.1801 41.3967 25.774 42.0473C25.6639 42.2223 25.6553 42.4377 25.7497 42.6227C25.844 42.8078 26.0228 42.9249 26.2273 42.935L27.3156 42.9958L27.2741 43.1042C27.204 43.2878 27.2283 43.4931 27.3385 43.655C27.4486 43.817 27.6302 43.9138 27.8232 43.9138C27.8433 43.9138 27.8647 43.9124 27.8862 43.9109L28.4753 43.8488C28.4868 43.8473 28.4968 43.8473 28.5082 43.8473C28.6212 43.8473 28.7242 43.9095 28.7785 44.0107L32.4609 50.8536C32.541 51.0025 32.541 51.1817 32.4609 51.3321L31.7645 52.6261C31.5957 52.9398 31.5886 53.3186 31.7473 53.6381L32.8942 55.9571C33.0215 56.2145 33.2389 56.4082 33.5077 56.5022L35.6156 57.241C35.73 57.2815 35.8487 57.3017 35.9703 57.3017C36.1161 57.3017 36.2577 57.2728 36.3907 57.215L44.2288 53.8723C44.5406 53.7393 44.7408 53.4328 44.7408 53.0916V53.0092C44.7408 52.9485 44.7765 52.895 44.8323 52.8733L54.5652 49.0261C54.8169 48.9263 54.98 48.6849 54.98 48.4116V48.2627L55.193 48.2165L55.5191 48.5461C55.6206 48.6487 55.7551 48.7153 55.8966 48.734L61.7041 49.2256H61.7184C62.1088 49.2256 62.4763 49.0724 62.7523 48.7933L63.1084 48.4333C63.3844 48.1543 63.536 47.7827 63.536 47.388V33.4507C63.536 33.0618 63.3901 32.7033 63.1227 32.4329ZM25.7511 35.3794C25.7511 35.6657 25.5209 35.8984 25.2377 35.8984H21.5525C21.2693 35.8984 21.0391 35.6657 21.0391 35.3794V31.976C21.0391 31.6898 21.2693 31.457 21.5525 31.457H25.2377C25.5209 31.457 25.7511 31.6898 25.7511 31.976V35.3794ZM32.5381 37.5495C31.8231 37.5495 31.2454 36.964 31.2454 36.2425C31.2454 35.5196 31.8245 34.9356 32.5381 34.9356C33.2532 34.9356 33.8309 35.5211 33.8309 36.2425C33.8309 36.964 33.2517 37.5495 32.5381 37.5495ZM48.6806 47.4748C48.489 47.8116 48.1858 48.0675 47.8254 48.2006L44.1459 49.5509C43.601 49.7504 43.0047 49.7663 42.4513 49.5928L41.7019 49.3586C41.1041 49.1721 40.5908 48.7803 40.2504 48.2497L35.9388 41.5326C35.4454 40.7649 35.6342 39.7413 36.3678 39.2035L36.6896 38.9678C36.9656 38.7654 37.2973 38.657 37.6391 38.657H42.2282C43.285 38.657 44.2717 39.189 44.8609 40.0753L48.6205 45.7355C48.9666 46.256 48.9909 46.9312 48.6806 47.4748Z"
			fill="#212121"
		/>
	</svg>
);
const schokBand = (
	<svg width="34" height="34" viewBox="0 0 34 34" fill="none">
		<path
			d="M33.4306 17.0262C33.4746 15.4115 33.3574 13.7993 33.0815 12.2095C32.9765 11.74 32.6176 11.3723 32.1586 11.263C31.7215 11.1736 29.5924 11.3872 28.3057 10.6122C28.0029 10.4308 27.141 9.85203 26.6015 9.48935C26.3573 9.32539 26.2132 9.04966 26.2132 8.75156L26.2084 4.81423C26.2059 2.15373 24.0866 0 21.4741 0H21.4692L12.6404 0.00993649C10.0303 0.0149047 7.90852 2.17858 7.91096 4.8341L7.91584 8.83851C7.91584 9.11176 7.79132 9.37011 7.5789 9.54151C7.49588 9.60858 7.41043 9.67317 7.32497 9.73031C6.58028 10.2271 5.7599 10.5923 4.89557 10.8084C3.96532 11.032 3.00089 10.9575 2.06331 11.1537C1.41628 11.2903 0.945055 11.8642 0.930405 12.5374C0.754609 14.0278 0.66427 15.5258 0.654504 17.0262C0.610555 18.6508 0.727752 20.2754 1.00365 21.8777C1.11841 22.3347 1.47488 22.6875 1.92658 22.7918C2.36363 22.8812 3.44038 22.9558 4.05566 23.0377C5.38878 23.1346 6.65353 23.6787 7.64971 24.5854C7.83283 24.7543 7.93782 24.9928 7.93782 25.2436L7.9427 28.6146C7.94514 31.2726 10.0645 33.4263 12.6794 33.4263H12.6843L21.5107 33.4164C22.8731 33.4139 24.1452 32.8326 25.0584 31.7843C25.8446 30.8801 26.2425 29.6902 26.2401 28.4829L26.2352 25.0698C26.2352 24.8288 26.3304 24.5978 26.4989 24.4313C27.2753 23.6637 28.291 23.1843 29.3849 23.0899C30.3249 22.9409 31.2796 23.0899 32.1854 22.8589C32.6542 22.7098 33.0009 22.3049 33.0839 21.8131C33.3598 20.2332 33.4746 18.6284 33.4306 17.0262ZM23.818 30.9472C23.2003 31.5757 22.3799 31.9235 21.5058 31.9235L12.6794 31.9334C12.677 31.9334 12.677 31.9334 12.6745 31.9334C10.8726 31.9334 9.40522 30.4429 9.40278 28.6096L9.37348 4.82913C9.37104 2.99337 10.836 1.50041 12.6404 1.49793L21.4692 1.49047C21.4716 1.49047 21.4716 1.49047 21.4741 1.49047C23.276 1.49047 24.7434 2.98095 24.7458 4.81423L24.7751 28.5947C24.7727 29.4816 24.4333 30.3187 23.818 30.9472Z"
			fill="#1D1D1F"
		/>
		<path
			d="M21.5869 16.125H17.461L19.8643 10L12.6455 17.875H16.7714L14.3682 24L21.5869 16.125Z"
			fill="#212121"
		/>
	</svg>
);
const scriptDevices = (
	<svg width="93" height="59" viewBox="0 0 93 59" fill="none">
		<g clipPath="url(#clip0)">
			<path
				d="M79.7383 32.0519C72.6351 32.0519 66.8545 37.8451 66.8545 44.967C66.8545 52.0889 72.6337 57.8821 79.7383 57.8821C86.8429 57.8821 92.6222 52.0889 92.6222 44.967C92.6222 37.8451 86.8429 32.0519 79.7383 32.0519ZM83.9316 55.114H75.5451L69.6159 49.1704V40.7635L75.5451 34.82H83.9316L89.8608 40.7635V49.1704L83.9316 55.114Z"
				fill="#1D1D1F"
			/>
			<path
				d="M81.4936 48.4821H79.7367H77.9799L75.8223 53.9622H79.7367H83.6512L81.4936 48.4821Z"
				fill="#1D1D1F"
			/>
			<path
				d="M77.9799 41.5148H79.7367H81.4936L83.6512 36.0347H79.7367H75.8223L77.9799 41.5148Z"
				fill="#1D1D1F"
			/>
			<path
				d="M76.2656 46.7591V44.9979V43.2368L70.7988 41.074V44.9979V48.9219L76.2656 46.7591Z"
				fill="#1D1D1F"
			/>
			<path
				d="M83.2158 43.2368V44.9979V46.7591L88.6826 48.9219V44.9979V41.074L83.2158 43.2368Z"
				fill="#1D1D1F"
			/>
			<path
				d="M71.8748 23.85L75.4979 18.9106L69.6892 8.77627L63.6088 9.42652L57.0982 5.64018L54.6422 0.0252797L42.9815 0L40.5016 5.60367L33.9742 9.36191L27.8966 8.68638L25.3691 13.0527H28.9376C29.477 13.0527 29.9813 13.3055 30.3246 13.7479C30.6958 14.2268 30.8247 14.8701 30.672 15.4684L30.312 16.877C30.1719 17.4261 29.7964 17.8741 29.3018 18.0876L28.2202 18.6705V46.3264L33.8986 45.7197L40.4092 49.5061L42.8652 55.121L54.5259 55.1462L57.0057 49.5426L63.5303 45.7843L65.7734 46.0343C65.7467 45.6818 65.7327 45.3265 65.7327 44.9684C65.7327 39.7383 68.6006 35.1669 72.8429 32.7512L71.858 31.3974L71.8748 23.85ZM63.3678 42.2241H34.1382V12.9235H63.3678V42.2241Z"
				fill="#1D1D1F"
			/>
			<path
				d="M28.5391 13.9109H21.0562C20.5448 13.9109 20.046 14.0921 19.6341 14.4291L18.8874 15.04C18.4755 15.3771 17.9781 15.5583 17.4653 15.5583H14.8188H12.1751C11.6637 15.5583 11.1649 15.3771 10.753 15.04L10.0063 14.4291C9.59438 14.0921 9.09701 13.9109 8.58424 13.9109H1.10276C0.375623 13.9109 -0.149762 14.6777 0.047783 15.4501L0.407847 16.8588C0.496111 17.2071 0.731484 17.4852 1.03971 17.6073L2.5206 18.4065V49.1283L1.05092 49.9246C0.402243 50.2757 0.339196 51.1858 0.933232 51.624L9.53834 57.958C10.4588 58.6363 11.5726 59.0014 12.7145 59.0014H14.8188H16.9231C18.0664 59.0014 19.1788 58.6363 20.0993 57.958L28.7044 51.624C29.2998 51.1858 29.2368 50.2771 28.5867 49.9246L27.117 49.1283V18.4065L28.5979 17.6073C28.9061 17.4852 29.1415 17.2057 29.2298 16.8588L29.5898 15.4501C29.793 14.6777 29.2662 13.9109 28.5391 13.9109ZM6.20249 51.6816H4.87852V16.3897H6.20249V51.6816ZM16.3235 55.8682H13.3183V20.6915H16.3235V55.8682ZM24.7633 51.6816H23.4393V16.3897H24.7633V51.6816Z"
				fill="#1D1D1F"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="92.6163"
					height="59"
					fill="white"
					transform="translate(0.00585938)"
				/>
			</clipPath>
		</defs>
	</svg>
);
const soft = (
	<svg width="78" height="44" viewBox="0 0 78 44" fill="none">
		<g clipPath="url(#clip0)">
			<path
				d="M69.743 35.6625V1.84059C69.7586 0.849526 68.9756 0.0157755 67.9891 4.43485e-05C67.9734 4.43485e-05 67.9421 4.43485e-05 67.9264 4.43485e-05H13.2418C12.2553 -0.0156868 11.441 0.786601 11.4253 1.77766C11.4253 1.79339 11.4253 1.82486 11.4253 1.84059V13.9221H13.1166V2.84738H68.13V35.6625H17.092V39.3594H68.9756C70.6513 39.3594 75.2866 38.6986 76.0696 37.4244V35.6625H69.743Z"
				fill="#1D1D1F"
			/>
			<path
				d="M15.5863 14.7086C16.5416 14.7086 17.3246 15.4952 17.3246 16.4548V40.6807C17.3246 41.6403 16.5416 42.4269 15.5863 42.4269H4.38946C3.4342 42.4269 2.6512 41.6403 2.6512 40.6807V16.4548C2.6512 15.4952 3.4342 14.7086 4.38946 14.7086H15.5863ZM15.5863 13.1355H4.38946C2.55724 13.1355 1.08521 14.63 1.08521 16.4548V40.6807C1.08521 42.5055 2.55724 44 4.38946 44H15.5863C17.4029 44 18.8906 42.5213 18.8906 40.6807V16.4548C18.8749 14.63 17.4029 13.1355 15.5863 13.1355Z"
				fill="#1D1D1F"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="77"
					height="44"
					fill="white"
					transform="translate(0.0852051)"
				/>
			</clipPath>
		</defs>
	</svg>
);
const accessories = (
	<svg width="46" height="33" viewBox="0 0 46 33" fill="none">
		<g clipPath="url(#clip0)">
			<path
				d="M19.8927 16H13.0654C12.5997 16 12.2005 16.266 12.0176 16.6529C11.2525 16.4272 10.4375 16.2982 9.59763 16.2982C5.04883 16.2982 1.35657 19.885 1.35657 24.2859C1.35657 28.6867 5.04883 32.2735 9.59763 32.2735C10.3876 32.2735 11.1693 32.1607 11.9178 31.9431V31.1048C11.1693 31.3466 10.396 31.4675 9.59763 31.4675C5.51452 31.4595 2.18816 28.2434 2.18816 24.2859C2.18816 20.3283 5.51452 17.1042 9.59763 17.1042C10.4043 17.1042 11.186 17.2332 11.9178 17.467V18.4261C11.1943 18.1601 10.4209 18.007 9.59763 18.007C6.0301 18.007 3.12785 20.82 3.12785 24.2778C3.12785 27.7356 6.0301 30.5487 9.59763 30.5487C9.99679 30.5487 10.3876 30.5084 10.7619 30.4439V29.6298C10.3876 29.7104 9.99679 29.7507 9.59763 29.7507C6.48748 29.7507 3.95944 27.3004 3.95944 24.2859C3.95944 21.2714 6.48748 18.8211 9.59763 18.8211C10.4209 18.8211 11.2109 18.9984 11.9178 19.3127V20.4895C11.2359 20.0946 10.4458 19.8689 9.59763 19.8689C7.08622 19.8689 5.04051 21.8517 5.04051 24.2859C5.04051 26.7201 7.08622 28.7029 9.59763 28.7029V27.8968C7.5436 27.8968 5.8721 26.2767 5.8721 24.2859C5.8721 22.295 7.5436 20.6749 9.59763 20.6749C10.4791 20.6749 11.2774 20.9893 11.9178 21.489V28.1225C11.9178 28.7351 12.4333 29.2348 13.0654 29.2348H14.0383V32.9909H14.8865V29.2348H18.0715V32.9909H18.9198V29.2348H19.8927C20.5247 29.2348 21.0403 28.7351 21.0403 28.1225V17.1123C21.0403 16.4997 20.5247 16 19.8927 16Z"
				fill="#1D1D1F"
			/>
			<path
				d="M44.0463 0H25.5995C24.8831 0 24.2987 0.566445 24.2987 1.2608V31.6844C24.2987 32.3787 24.8831 32.9452 25.5995 32.9452H44.0463C44.7627 32.9452 45.3471 32.3787 45.3471 31.6844V1.2608C45.3565 0.566445 44.7721 0 44.0463 0ZM28.7101 26.8331C27.8806 26.8331 27.2019 26.1844 27.2019 25.3713C27.2019 24.5673 27.8712 23.9095 28.7101 23.9095C29.5396 23.9095 30.2183 24.5581 30.2183 25.3713C30.2183 26.1844 29.5396 26.8331 28.7101 26.8331ZM28.7101 22.1462C27.8806 22.1462 27.2019 21.4975 27.2019 20.6844C27.2019 19.8804 27.8712 19.2226 28.7101 19.2226C29.5396 19.2226 30.2183 19.8713 30.2183 20.6844C30.2183 21.4975 29.5396 22.1462 28.7101 22.1462ZM28.7101 17.2126C27.8806 17.2126 27.2019 16.564 27.2019 15.7508C27.2019 14.9377 27.8712 14.289 28.7101 14.289C29.5396 14.289 30.2183 14.9377 30.2183 15.7508C30.2183 16.564 29.5396 17.2126 28.7101 17.2126ZM28.7101 10.6802C27.8806 10.6802 27.2019 10.0316 27.2019 9.21844C27.2019 8.40532 27.8712 7.75664 28.7101 7.75664C29.5396 7.75664 30.2183 8.40532 30.2183 9.21844C30.2183 10.0316 29.5396 10.6802 28.7101 10.6802ZM34.8653 26.8331C34.0358 26.8331 33.3571 26.1844 33.3571 25.3713C33.3571 24.5673 34.0264 23.9095 34.8653 23.9095C35.7042 23.9095 36.3735 24.5581 36.3735 25.3713C36.3735 26.1844 35.6948 26.8331 34.8653 26.8331ZM34.8653 22.1462C34.0358 22.1462 33.3571 21.4975 33.3571 20.6844C33.3571 19.8804 34.0264 19.2226 34.8653 19.2226C35.7042 19.2226 36.3735 19.8713 36.3735 20.6844C36.3735 21.4975 35.6948 22.1462 34.8653 22.1462ZM34.8276 15.76C32.9707 15.76 31.4625 14.2982 31.4625 12.4983C31.4625 10.6985 32.9707 9.23671 34.8276 9.23671C36.6845 9.23671 38.1927 10.6985 38.1927 12.4983C38.1927 14.2982 36.6845 15.76 34.8276 15.76ZM41.0205 26.8331C40.191 26.8331 39.5124 26.1844 39.5124 25.3713C39.5124 24.5673 40.1816 23.9095 41.0205 23.9095C41.8595 23.9095 42.5287 24.5581 42.5287 25.3713C42.5287 26.1844 41.85 26.8331 41.0205 26.8331ZM41.0205 22.1462C40.191 22.1462 39.5124 21.4975 39.5124 20.6844C39.5124 19.8804 40.1816 19.2226 41.0205 19.2226C41.8595 19.2226 42.5287 19.8713 42.5287 20.6844C42.5287 21.4975 41.85 22.1462 41.0205 22.1462ZM41.0205 17.2126C40.191 17.2126 39.5124 16.564 39.5124 15.7508C39.5124 14.9377 40.1816 14.289 41.0205 14.289C41.8595 14.289 42.5287 14.9377 42.5287 15.7508C42.5287 16.564 41.85 17.2126 41.0205 17.2126ZM41.0205 10.6802C40.191 10.6802 39.5124 10.0316 39.5124 9.21844C39.5124 8.40532 40.1816 7.75664 41.0205 7.75664C41.8595 7.75664 42.5287 8.40532 42.5287 9.21844C42.5287 10.0316 41.85 10.6802 41.0205 10.6802ZM41.1242 5.45432H28.5216C27.7486 5.45432 27.1171 4.84219 27.1171 4.09302C27.1171 3.34385 27.7486 2.73173 28.5216 2.73173H41.1148C41.8877 2.73173 42.5193 3.34385 42.5193 4.09302C42.5193 4.84219 41.8972 5.45432 41.1242 5.45432Z"
				fill="#1D1D1F"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="45"
					height="33"
					fill="white"
					transform="translate(0.356567)"
				/>
			</clipPath>
		</defs>
	</svg>
);
const sets = (
	<svg width="95" height="58" viewBox="0 0 95 58" fill="none">
		<g clipPath="url(#clip0)">
			<path
				d="M92.216 3.40182L82.8642 0.0448496C82.4984 -0.0857474 82.0928 0.077188 81.9211 0.425447L74.5648 15.3745C74.2463 16.0212 73.7798 16.5834 73.2038 17.015L70.7367 18.8633C70.3847 19.1269 69.9019 19.1269 69.5499 18.8633L67.0828 17.015C66.5056 16.5834 66.039 16.02 65.7218 15.3745L58.3655 0.426691C58.1938 0.0784317 57.7882 -0.0857474 57.4224 0.0460934L48.0706 3.40306C47.3577 3.65928 46.9857 4.44286 47.2383 5.15803L53.4613 22.7065C53.9278 24.02 54.2139 25.3919 54.3147 26.7824L54.4976 29.3048H57.7173C58.0445 29.3048 58.3518 29.4317 58.5832 29.663L58.944 30.0237H66.4558C66.9895 30.0237 67.5071 30.2451 67.8753 30.6294L69.943 32.7899C70.2951 33.1568 70.4879 33.6394 70.4879 34.1481V46.3645C70.4879 47.2936 69.9368 48.1394 69.0833 48.5212C68.7885 48.6531 68.4625 48.7202 68.1142 48.7202C68.0868 48.7202 68.0594 48.7202 68.0308 48.719L64.0199 48.5959C63.99 48.5946 63.9602 48.5946 63.9303 48.5946C63.5583 48.5946 63.1938 48.6655 62.8492 48.8036L56.3252 51.4217C56.5068 51.7638 56.7494 52.0747 57.048 52.3347L58.2062 53.3459C58.7499 53.821 59.4391 54.0983 60.1607 54.1332L69.5486 54.5822C69.943 54.6008 70.3374 54.6008 70.7318 54.5822L80.1197 54.1332C80.8413 54.0983 81.5305 53.821 82.0742 53.3459L83.2324 52.3347C83.8681 51.7787 84.26 50.9951 84.321 50.1531L85.9669 26.7837C86.0677 25.3931 86.3551 24.0225 86.8204 22.7078L93.0433 5.15928C93.3009 4.44286 92.9289 3.65803 92.216 3.40182ZM58.4837 7.84833L58.3816 8.43042C58.3381 8.67793 58.1813 8.89062 57.9562 9.00505L53.934 11.0523C53.771 11.1356 53.5869 11.1692 53.404 11.1506L53.1142 11.1195C52.7969 11.0859 52.517 10.8944 52.3702 10.6108L49.6991 5.43913C49.5312 5.1145 49.5697 4.72271 49.7949 4.4354L49.9342 4.25878C50.0811 4.07346 50.2913 3.95032 50.5252 3.91425L56.6822 2.9752C56.8016 2.95654 56.9236 2.97022 57.0355 3.01251L57.1127 3.04236C57.3291 3.12445 57.4909 3.30978 57.5444 3.53614L58.4737 7.52993C58.4998 7.6344 58.5023 7.74261 58.4837 7.84833ZM81.5093 34.2439L78.8557 44.7227C78.7972 44.9528 78.6566 45.1531 78.4613 45.2861L78.1043 45.5287C77.9438 45.6381 77.7534 45.6966 77.5593 45.6966H74.051C73.7835 45.6966 73.5272 45.5909 73.3381 45.4018L73.2548 45.3185C73.0657 45.1294 72.9599 44.8732 72.9599 44.6058V34.1157C72.9599 33.9105 73.042 33.714 73.1863 33.5685L73.3157 33.4391C73.4613 33.2936 73.6579 33.2128 73.8631 33.2128H80.7467C80.998 33.2128 81.2294 33.3483 81.3513 33.5685L81.4471 33.7401C81.5292 33.8931 81.5529 34.0735 81.5093 34.2439ZM90.5875 5.43913L87.9164 10.612C87.7696 10.8956 87.4897 11.0871 87.1725 11.1207L86.8826 11.1518C86.6997 11.1705 86.5156 11.1369 86.3526 11.0536L82.3304 9.00505C82.1065 8.89062 81.9485 8.67793 81.905 8.43042L81.8029 7.84833C81.7843 7.74261 81.788 7.6344 81.8117 7.52868L82.741 3.5349C82.7932 3.30853 82.955 3.12321 83.1727 3.04112L83.2498 3.01127C83.363 2.96774 83.485 2.9553 83.6031 2.97395L89.7602 3.91301C89.9941 3.94908 90.2056 4.07221 90.3511 4.25754L90.4904 4.43415C90.7181 4.72271 90.7554 5.1145 90.5875 5.43913Z"
				fill="#1D1D1F"
			/>
			<path
				d="M20.8371 4.23507C20.908 4.50995 21.0934 4.7301 21.3372 4.82711L22.5104 5.45771V28.5721H24.3778V3.86443H25.4253V28.5721H31.0598V7.26244H33.4385V28.5721H36.54C36.5674 28.1095 36.759 27.6779 37.0862 27.3445L38.5605 25.8408C38.7073 25.6903 38.8827 25.5721 39.073 25.4876V3.86443H40.1205V25.3445H40.5933C41.1793 25.3445 41.6943 25.6517 41.9879 26.1119V5.45771L43.1611 4.82711C43.405 4.7301 43.5916 4.50995 43.6612 4.23507L43.9461 3.12313C44.1029 2.51244 43.6861 1.90796 43.1101 1.90796H37.1845C36.7789 1.90796 36.3845 2.05099 36.0586 2.31716L35.4676 2.79975C35.1417 3.06592 34.7473 3.20895 34.3417 3.20895H32.2504H30.1554C29.7498 3.20895 29.3554 3.06592 29.0294 2.79975L28.4385 2.31716C28.1126 2.05099 27.7182 1.90796 27.3126 1.90796H21.387C20.811 1.90796 20.3954 2.51368 20.551 3.12313L20.8371 4.23507Z"
				fill="#1D1D1F"
			/>
			<path
				d="M20.8316 49.6628H19.2691H17.7065L15.7881 54.5235H19.2691H22.75L20.8316 49.6628Z"
				fill="#1D1D1F"
			/>
			<path
				d="M17.7065 43.4825H19.2691H20.8316L22.75 38.623H19.2691H15.7881L17.7065 43.4825Z"
				fill="#1D1D1F"
			/>
			<path
				d="M16.1805 48.1356V46.5734V45.0112L11.3186 43.0933V46.5734V50.0535L16.1805 48.1356Z"
				fill="#1D1D1F"
			/>
			<path
				d="M22.3624 45.0112V46.5734V48.1356L27.2231 50.0535V46.5734V43.0933L22.3624 45.0112Z"
				fill="#1D1D1F"
			/>
			<path
				d="M19.2723 58C12.9548 58 7.81543 52.8619 7.81543 46.546C7.81543 40.2301 12.9548 35.092 19.2723 35.092C25.5898 35.092 30.7291 40.2301 30.7291 46.546C30.7291 52.8619 25.5898 58 19.2723 58ZM22.8789 55.2799L27.9797 50.1804V42.9677L22.8789 37.8682H15.6644L10.5636 42.9677V50.1804L15.6644 55.2799H22.8789Z"
				fill="#1D1D1F"
			/>
			<path
				d="M69.9291 33.7264L67.9584 31.6679C67.6623 31.3594 67.2468 31.1816 66.8201 31.1816H59.6528C59.5782 31.1816 59.5085 31.153 59.4563 31.1007L59.1067 30.7512C58.9425 30.5871 58.7235 30.4963 58.4909 30.4963H54.7237C54.0893 30.4963 53.461 30.4005 52.8551 30.2139L46.7777 28.3321C46.4878 28.2425 46.188 28.1965 45.8845 28.1965H42.6635C42.4993 28.1965 42.3674 28.3296 42.3674 28.4925V28.8818H41.6284V27.3719C41.6284 26.8022 41.1656 26.3395 40.5958 26.3395H39.7449C39.4687 26.3395 39.1999 26.4527 39.0071 26.6492L37.5329 28.153C37.2927 28.398 37.1609 28.7201 37.1609 29.0634V29.5684H22.0713C21.9083 29.5684 21.7453 29.5311 21.5985 29.4614L20.5547 28.9614C20.1168 28.7512 19.6291 28.6405 19.1439 28.6405H13.1449C13.1051 28.6405 13.0653 28.6343 13.0267 28.6219L11.7378 28.204C11.6408 28.1729 11.5388 28.1567 11.4367 28.1567H9.99111L9.58677 27.6505C9.43375 27.4589 9.20484 27.3495 8.95975 27.3495H7.83136C7.53402 27.3495 7.29267 27.5908 7.29267 27.888V28.4565L6.79627 28.7873C6.50018 28.9838 6.32352 29.3147 6.32352 29.6691V30.138C6.32352 30.2923 6.19786 30.4167 6.04484 30.4167H5.16651C5.06076 30.4167 4.96248 30.4726 4.91023 30.5647L4.46608 31.3308C4.43996 31.3756 4.42627 31.4278 4.42627 31.4788V31.99H4.13889C4.01946 31.99 3.90749 32.0361 3.82289 32.1206L3.44717 32.4963C3.36257 32.5808 3.31654 32.6928 3.31654 32.8122V33.9589C3.31654 34.0783 3.36257 34.1903 3.44717 34.2749L3.73207 34.5597C3.81667 34.6443 3.92864 34.6903 4.04807 34.6903H4.46608V34.8545H1.7975C1.44916 34.8545 1.12196 34.9863 0.878118 35.2264C0.40163 35.6928 0.12793 36.3458 0.12793 37.0137V39.398C0.12793 40.0684 0.389189 40.6977 0.863189 41.1716L0.934102 41.2425C1.18417 41.4925 1.51634 41.6293 1.86966 41.6293H5.48624C5.87564 41.6293 6.19164 41.3134 6.19164 40.9241V40.6903H7.23419C7.51785 40.6903 7.78533 40.7985 7.98936 40.9938L8.09386 41.0933C10.118 36.9602 14.3678 34.107 19.272 34.107C26.122 34.107 31.6956 39.6704 31.7105 46.5149C32.6199 46.6007 33.4522 47.102 33.9499 47.8706L38.5704 55.0087C39.0283 55.7164 39.8008 56.143 40.6431 56.1555C40.9678 56.2363 41.3025 56.2761 41.6359 56.2761C42.1646 56.2761 42.6822 56.1766 43.1736 55.9788L63.2719 47.9117C63.6364 47.7649 64.0209 47.6915 64.4127 47.6915C64.4438 47.6915 64.475 47.6915 64.5073 47.6928L68.3292 47.8109C68.3528 47.8122 68.3764 47.8122 68.4001 47.8122C68.6899 47.8122 68.9599 47.7575 69.2038 47.6492C69.9104 47.3333 70.367 46.6331 70.367 45.8644V34.8147C70.367 34.4079 70.2115 34.0211 69.9291 33.7264ZM33.0491 37.1269C32.5266 37.1269 32.1036 36.704 32.1036 36.1816V34C32.1036 33.4776 32.5266 33.0547 33.0491 33.0547H36.4306C36.9531 33.0547 37.3761 33.4776 37.3761 34V36.1816C37.3761 36.704 36.9531 37.1269 36.4306 37.1269H33.0491ZM44.4189 51.5796L42.243 52.5522C42.0526 52.6368 41.8511 52.6803 41.6421 52.6803C41.4567 52.6803 41.2751 52.6455 41.1022 52.5771C40.8683 52.4851 40.668 52.3134 40.5398 52.097L34.2223 41.3769C34.0867 41.1468 34.1116 40.8545 34.2858 40.6517L34.3069 40.6269C34.4264 40.4876 34.5993 40.4079 34.7822 40.4079H38.9113L38.8578 41.1181C38.8317 41.4639 38.7434 41.7973 38.5953 42.1107L38.3477 42.6343C38.3154 42.7027 38.298 42.7798 38.298 42.8557C38.298 43.1418 38.5306 43.3744 38.8168 43.3744H39.3579V43.8047C39.3579 43.9689 39.4911 44.1007 39.654 44.1007H40.6344C40.7128 44.1007 40.7849 44.1405 40.826 44.2077L44.7312 50.5572C44.7996 50.6691 44.8369 50.7985 44.8369 50.9303C44.8394 51.2102 44.6752 51.4652 44.4189 51.5796ZM56.9283 47.7873L54.8009 48.5162C54.4189 48.6915 53.9959 48.7848 53.5754 48.7848C53.3851 48.7848 53.1948 48.7662 53.0081 48.7288C52.2604 48.5821 51.6098 48.1567 51.1731 47.5323L47.5976 42.4191C47.3488 42.0634 47.2505 41.6144 47.3288 41.1878C47.4284 40.6455 47.7904 40.194 48.2968 39.9776L48.4311 39.9204C48.6177 39.8408 48.8155 39.7973 49.0183 39.791L52.2953 39.6841C52.3139 39.6828 52.3314 39.6828 52.35 39.6828C52.8651 39.6828 53.3428 39.9142 53.6613 40.3196L57.4943 45.1816C57.7083 45.4527 57.8253 46.0398 57.8253 46.3856C57.8265 46.9876 57.4744 47.5373 56.9283 47.7873Z"
				fill="#1D1D1F"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="94"
					height="58"
					fill="white"
					transform="translate(0.12793)"
				/>
			</clipPath>
		</defs>
	</svg>
);
