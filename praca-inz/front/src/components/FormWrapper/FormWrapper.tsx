import styles from "./FormWrapper.module.scss";

const FormWrapper = ({ children }:any) => {
    return <div className={styles.formDiv}>{children}</div>;
};

export default FormWrapper;
