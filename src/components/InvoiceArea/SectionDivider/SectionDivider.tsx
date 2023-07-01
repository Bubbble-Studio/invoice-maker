import { Divider } from "@chakra-ui/react";
import styles from "./sectionDivider.module.scss";

interface SectionDividerProps {
  heading: string;
  stepNumber: number;
}

const sectionDivider: React.FC<SectionDividerProps> = ({
  heading,
  stepNumber,
}) => {
  return (
    <div className={styles.divider}>
      <div className={styles.headingAndStepCounter}>
        <h3 className={styles.heading}>{heading}</h3>
        <div className={styles.steps}>
          <p>Step {stepNumber} of 3</p>
          <div className={styles.stepDots}>
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`${styles.stepDot} ${
                  step <= stepNumber ? styles.activeDot : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.dividerLine} />
    </div>
  );
};

export default sectionDivider;
