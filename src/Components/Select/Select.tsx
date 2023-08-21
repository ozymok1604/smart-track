import { useState } from "react";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg";
import { selectDoctor } from "../../store";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

const Select = ({ doctors }: { doctors: Doctor[] }) => {
  const [value, setValue] = useState<any>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleOpenOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeValue = (option: Doctor) => {
    setValue(option.name);
    dispatch(selectDoctor(option));
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.select}>
      <div onClick={handleOpenOptions} className={styles.value_container}>
        {value ? (
          <div className={styles.value}>{value}</div>
        ) : (
          <div className={styles.placeholder}>Select</div>
        )}
        <img
          className={styles.arrow}
          src={isOpen ? ArrowUp : ArrowDown}
          alt="arrow"
        />
      </div>
      {isOpen && (
        <div className={styles.options_box}>
          {doctors?.map((option: any) => (
            <div
              onClick={() => handleChangeValue(option)}
              className={styles.option}
            >
              {option?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
