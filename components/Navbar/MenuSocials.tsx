import React from "react";
import { SOCIALS } from "@/app/constants";
import { motion } from "motion/react";
import { socialsVariants } from "@/app/variants";
import SocialLink from "./SocialLink";

const MenuSocials = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className="absolute -translate-y-1/2 right-4 top-1/2">
      <motion.div
        variants={socialsVariants}
        initial="initial"
        animate="visible"
        exit="initial"
        className="flex flex-col justify-center w-full gap-3"
      >
        {SOCIALS.map(({ icon: Icon, href }, i) => (
          <SocialLink key={i} Icon={Icon} href={href} toggleMenu={toggleMenu} />
        ))}
      </motion.div>
    </div>
  );
};

export default MenuSocials;
