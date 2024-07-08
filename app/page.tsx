import PaneGrid from "@/components/pane-grid";
import PaneGridPicture from "@/components/pane-grid-picture";
import PaneGridText from "@/components/pane-grid-text";
import ArrowLink from "@/components/ArrowLink";
import { assets } from "@/lib/utils";
import styles from "./page.module.css";
import paneStyles from "../components/pane-grid.module.css";
import picStyles from "../components/pane-grid-picture.module.css";
import textStyles from "../components/pane-grid-text.module.css";
import flowStyles from "../components/layout/flowiser.module.css";
import Heading from "@/components/typographic/heading";
import Flowiser from "@/components/layout/flowiser";

export default function Home() {
  return (
    <>
      {/* Hero card */}
      <section className={styles.rightpic}>
        <div className="wrapper">
          <PaneGrid bgDark>
            <picture className={picStyles.picture}>
              <source
                media="(min-width: 900px)"
                srcSet="/assets/home/desktop/create-and-share.jpg"
              />
              <source
                media="(min-width: 550px)"
                srcSet="/assets/home/tablet/create-and-share.jpg"
              />
              <img
                src="/assets/home/mobile/create-and-share.jpg"
                alt="create and share"
                className={picStyles.img}
              />
            </picture>
            {/* <PaneGridPicture */}
            {/*   imgProps={{ */}
            {/*     src: { */}
            {/*       desktop: assets.home.desktop.hero, */}
            {/*       tablet: assets.home.tablet.hero, */}
            {/*       mobile: assets.home.mobile.hero, */}
            {/*     }, */}
            {/*     alt: "create and share", */}
            {/*     // imgClasses: "", */}
            {/*   }} */}
            {/*   className="outline outline-4 outline-lime-500" */}
            {/* /> */}
            <PaneGridText className={styles.edging}>
              <Flowiser sideText>
                <Heading>Create and share your photo Stories.</Heading>
                <p>
                  Photosnap is a platform for photographers and visual
                  storytellers. We make it easy to share photos, tell stories
                  and connect with others.
                </p>
                <div>
                  <ArrowLink>get an invite</ArrowLink>
                </div>
              </Flowiser>
            </PaneGridText>
          </PaneGrid>
        </div>
      </section>
      {/* <section className={styles.rightpic}> */}
      {/*   <div className="wrapper"> */}
      {/*     <div className={paneStyles.gridwise}> */}
      {/*       <PaneGridPicture */}
      {/*         imgProps={{ */}
      {/*           src: { */}
      {/*             desktop: assets.home.desktop.hero, */}
      {/*             tablet: assets.home.tablet.hero, */}
      {/*             mobile: assets.home.mobile.hero, */}
      {/*           }, */}
      {/*           alt: "create and share", */}
      {/*           // imgClasses: "", */}
      {/*         }} */}
      {/*         picArea="right" */}
      {/*         className="outline outline-4 outline-lime-500" */}
      {/*       /> */}
      {/*       <div className={textStyles.wrapper}> */}
      {/*         <div className={flowStyles.flowiser}> */}
      {/*           <h1 className="capitalize text-4xl font-bold max-w-[15ch] sm:text-5xl"> */}
      {/*             Create and share your photo Stories. */}
      {/*           </h1> */}
      {/*           <p> */}
      {/*             Photosnap is a platform for photographers and visual */}
      {/*             storytellers. We make it easy to share photos, tell stories */}
      {/*             and connect with others. */}
      {/*           </p> */}
      {/*           <div> */}
      {/*             <ArrowLink>get an invite</ArrowLink> */}
      {/*           </div> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}
      {/* <section className={styles.rightpic}> */}
      {/*   <div className="wrapper"> */}
      {/*     <PaneGrid bgDark className="outline outline-4 outline-cyan-400 "> */}
      {/*       <PaneGridPicture */}
      {/*         imgProps={{ */}
      {/*           src: { */}
      {/*             desktop: assets.home.desktop.hero, */}
      {/*             tablet: assets.home.tablet.hero, */}
      {/*             mobile: assets.home.mobile.hero, */}
      {/*           }, */}
      {/*           alt: "create and share", */}
      {/*           // imgClasses: "", */}
      {/*         }} */}
      {/*         picArea="right" */}
      {/*         className="outline outline-4 outline-lime-500" */}
      {/*       /> */}
      {/*       <PaneGridText */}
      {/*         textArea="left" */}
      {/*         className={`outline outline-4 outline-yellow-400 ${styles.edging}`} */}
      {/*       > */}
      {/*         <Flowiser */}
      {/*           textArea="left" */}
      {/*           className="outline outline-4 outline-orange-500" */}
      {/*         > */}
      {/*           <Heading>Create and share your photo Stories</Heading> */}
      {/*           <p> */}
      {/*             Photosnap is a platform for photographers and visual */}
      {/*             storytellers. We make it easy to share photos, tell stories */}
      {/*             and connect with others. */}
      {/*           </p> */}
      {/*           <div> */}
      {/*             <ArrowLink>get an invite</ArrowLink> */}
      {/*           </div> */}
      {/*         </Flowiser> */}
      {/*       </PaneGridText> */}
      {/*     </PaneGrid> */}
      {/*   </div> */}
      {/* </section> */}
      {/* Left card */}
      {/* <section> */}
      {/*   <div className="wrapper"> */}
      {/*     <PaneGrid className="outline outline-4 outline-cyan-400 "> */}
      {/*       <PaneGridPicture */}
      {/*         imgProps={{ */}
      {/*           src: { */}
      {/*             desktop: assets.home.desktop.first, */}
      {/*             tablet: assets.home.tablet.first, */}
      {/*             mobile: assets.home.mobile.first, */}
      {/*           }, */}
      {/*           alt: "beautiful stories", */}
      {/*           // imgClasses: "", */}
      {/*         }} */}
      {/*         picArea="left" */}
      {/*         className={`outline outline-4 outline-lime-500 ${styles.left}`} */}
      {/*       /> */}
      {/*       <PaneGridText */}
      {/*         textArea="right" */}
      {/*         className={`outline outline-4 outline-yellow-400 ${styles.edging}`} */}
      {/*       > */}
      {/*         <Flowiser */}
      {/*           textArea="right" */}
      {/*           className="outline outline-4 outline-orange-500" */}
      {/*         > */}
      {/*           <Heading heading="h2">Beautiful Stories Every Time</Heading> */}
      {/*           <p> */}
      {/*             We provide design templates to ensure your stories look */}
      {/*             terrific. Easily add photos, text, embed maps and media from */}
      {/*             other networks. Then share your story with everyone. */}
      {/*           </p> */}
      {/*           <div> */}
      {/*             <ArrowLink>view stories</ArrowLink> */}
      {/*           </div> */}
      {/*         </Flowiser> */}
      {/*       </PaneGridText> */}
      {/*     </PaneGrid> */}
      {/*   </div> */}
      {/* </section> */}
      {/* Right card */}
      {/* <section> */}
      {/*   <div className="wrapper"> */}
      {/*     <PaneGrid className="outline outline-4 outline-cyan-400 "> */}
      {/*       <PaneGridPicture */}
      {/*         imgProps={{ */}
      {/*           src: { */}
      {/*             desktop: assets.home.desktop.second, */}
      {/*             tablet: assets.home.tablet.second, */}
      {/*             mobile: assets.home.mobile.second, */}
      {/*           }, */}
      {/*           alt: "designed for everyone", */}
      {/*           // imgClasses: "", */}
      {/*         }} */}
      {/*         picArea="right" */}
      {/*         className={`outline outline-4 outline-lime-500 ${styles.right}`} */}
      {/*       /> */}
      {/*       <PaneGridText */}
      {/*         textArea="left" */}
      {/*         className={`outline outline-4 outline-yellow-400 ${styles.edging}`} */}
      {/*       > */}
      {/*         <Flowiser */}
      {/*           textArea="left" */}
      {/*           className="outline outline-4 outline-orange-500" */}
      {/*         > */}
      {/*           <Heading heading="h2">designed for everyone</Heading> */}
      {/*           <p> */}
      {/*             Photosnap can help you create stories that resonate with your */}
      {/*             audience. Our tool is designed for photographers of all */}
      {/*             levels, brands, businesses you name it. */}
      {/*           </p> */}
      {/*           <div> */}
      {/*             <ArrowLink>view stories</ArrowLink> */}
      {/*           </div> */}
      {/*         </Flowiser> */}
      {/*       </PaneGridText> */}
      {/*     </PaneGrid> */}
      {/*   </div> */}
      {/* </section> */}
      {/* Gallery */}
      <section></section>
      {/* Features */}
      <section></section>
    </>
  );
}
