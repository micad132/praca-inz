import styles from "./FormWrapper.module.scss";

const FormWrapper = ({ children }:any) => {
    return <form className={styles.formDiv}>{children}</form>;
};

export default FormWrapper;
