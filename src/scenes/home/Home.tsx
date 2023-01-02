import useMediaQuery from "@/hooks/UseMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image and main header */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* main header */}

        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <div className="md:-mt-20">
            <div>
              <div>
                <img src={HomePageText} alt="homePage" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              officiis quos, alias nihil et aliquid quo odio dolores voluptas
              explicabo.
            </p>
          </div>

          {/* ACTIONS */}

          <div className="mt-8 flex items-center gap-8 md:justify-start">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* image */}

        <div className="z-10 flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="homePage" />
        </div>
      </div>

      {/* sponsors */}

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redBull" />
              <img src={SponsorForbes} alt="Forbes" />
              <img src={SponsorFortune} alt="Fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
