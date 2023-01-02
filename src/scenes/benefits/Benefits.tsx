import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Htext from "@/shared/Htextx";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of The Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, assumenda?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100s of diverse classes",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. consectetur adipisicing elit. Error, assumenda?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainer",
    description:
      "Lorem ipsum dolor sit amet, Lorem, ipsum dolor. consectetur adipisicing elit. Error, assumenda?",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <Htext>MORE THAN JUST A GYM.</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            odit dolor, modi eius dignissimos maiores voluptas nemo obcaecati
            perspiciatis magnam?
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>

        {/* GRAPHICS AND DESC */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}

          <img
            src={BenefitsPageGraphic}
            className="mx-auto"
            alt="page graphic"
          />

          {/* DESC */}
          <div>
            {/* title */}

            <div className="relative">
              <div>
                <Htext>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </Htext>
              </div>
            </div>

            {/* desc */}
            <div>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, reiciendis voluptate. Tempore itaque, enim impedit
                porro quae labore deserunt repellendus! Dolorum enim adipisci
                doloremque repellendus?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                commodi porro sint, earum necessitatibus impedit ad explicabo!
              </p>
            </div>

            {/* BUTTON */}

            <div>
              <ActionButton setSelectedPage={setSelectedPage}>
                Action Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
