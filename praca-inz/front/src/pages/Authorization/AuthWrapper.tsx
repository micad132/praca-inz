import styles from "./AuthWrapper.module.scss";

const AuthWrapper = ({ children }:any) => {
    return <div className={styles.formDiv}>{children}</div>;
};

export default AuthWrapper;
