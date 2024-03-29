import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer  } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={0}
            className={`${styles.padding} max-w-7xl mx-auto
            relative z-0`}
            // {``} şeklinde yaptığım tanımlamalar dinamik
        >
            <span className='hash-span' id={idName}>
             &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

//Bu class return olarka bir fonksiyon döndürecek

export default SectionWrapper