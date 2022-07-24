import styles from "./Authorization.module.scss";

const AuthWrapper = ({ children }) => {
  return <div className={styles.formDiv}>{children}</div>;
};

export default AuthWrapper;
