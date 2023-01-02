import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import React from "react";
import Htext from "@/shared/Htextx";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white `;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <div className="md:w-3/5">
          <Htext>
            <span className="text-primary-500"> JOIN IN</span> NOW TO GET SHAPE
          </Htext>

          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor
            accusamus debitis non hic temporibus quo labore, voluptas eligendi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            mollitia? rerum?
          </p>
        </div>

        {/* form and image */}

        <div className="mt-10 justify-between gap-8 md:flex">
          <div className="mt-10 basis-3/5 md:mt-0">
            <form onSubmit={onSubmit} method="POST">
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "Max length is 100 word"}
                </p>
              )}

              <input
                type="email"
                className={inputStyles}
                placeholder="yourEmail@gmail.com"
                {...register("email", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "maxLength" &&
                    "Max length is 100 word"}
                </p>
              )}

              <textarea
                rows={4}
                className={inputStyles}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 100 word"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="mt-16 basis-2/5  md:mt-0">
            <img src={ContactUsPageGraphic} className="w-full" alt="" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
