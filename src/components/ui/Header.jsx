import { memo } from "react";
import { motion } from "framer-motion";

const Header = memo(({ content: { title, subtitle } }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-[#ffffff]"
    >
        <h1 className="text-7xl font-medium w-[300px] text-wrap font-['Kanit']">
            {title}
        </h1>
        <h1 className="text-5xl font-bold w-[350px] text-wrap font-['Kanit'] text-center">
            {subtitle}
        </h1>
    </motion.div>
));

export default Header;
