import { ClassType, SelectedPage } from "@/shared/types";
import React from "react";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htextx";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "weight training classes",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quisquam.",
    image: image1,
  },
  {
    name: "Fitness classes",

    image: image2,
  },
  {
    name: "Morning  classes",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quisquam.",
    image: image3,
  },
  {
    name: "Yoga classes",
    image: image4,
  },
  {
    name: "Morning classes",
    image: image5,
  },
  {
    name: "Adventure classes",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quisquam.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <div className="mx-auto w-5/6">
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt, similique repellendus. Magnam unde odit architecto!
            </p>
          </div>
        </div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}}`}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
