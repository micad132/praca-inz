import styles from "./AuthWrapper.module.scss";

const FormWrapper = ({ children }:any) => {
    return <div className={styles.formDiv}>{children}</div>;
};

export default FormWrapper;
