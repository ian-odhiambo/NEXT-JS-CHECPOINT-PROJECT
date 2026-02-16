import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="odhiamboian096@gmail.com">odhiamboian096@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ian-odhiambo-9467b1247?utm_source=share_via&utm_content=profile&utm_medium=member_android">https://www.linkedin.com/in/ian-odhiambo-9467b1247?utm_source=share_via&utm_content=profile&utm_medium=member_android</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ian-odhiambo">https://github.com/ian-odhiambo</a>
        </li>
      </ul>
    </footer>
  );
};
