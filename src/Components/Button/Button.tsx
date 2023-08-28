import { useState } from "react";
import Add from "../../assets/PrimaryAdd.svg";
import HoverAdd from "../../assets/SecondaryAdd.svg";
import ActiveAdd from "../../assets/BorderedAdd.svg";
import Out from "../../assets/SignOut.svg";
import ActiveOut from "../../assets/ActiveSignOut.svg";
import styles from "./styles.module.scss";

const Button = ({
  onMouseDown,
  onMouseUp,
  onMouseOver,
  onMouseOut,
  onClick,
  title,
  type,
}: {
  onMouseDown?: any;
  onMouseUp?: any;
  onMouseOver?: any;
  onMouseOut?: any;
  onClick?: any;
  title: string;
  type: string;
}) => {
  const [isHover, setHover] = useState(false);
  const [isActive, setActive] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseOver={onMouseOver ? onMouseOver : () => setHover(true)}
      onMouseOut={onMouseOut ? onMouseOut : () => setHover(false)}
      onMouseDown={onMouseDown ? onMouseDown : () => setActive(true)}
      onMouseUp={onMouseUp ? onMouseUp : () => setActive(false)}
    >
      {type === "primary" ? (
        <button onClick={onClick} className={styles.primary}>
          {title}
        </button>
      ) : type === "add" ? (
        <div className={styles.add_container}>
          <img
            className={styles.svg}
            alt="add"
            src={isActive ? ActiveAdd : isHover ? HoverAdd : Add}
          />
          <div className={styles.add}>{title}</div>
        </div>
      ) : type === "addRoom" ? (
        <div className={styles.add_room_container}>
          <img
            className={styles.svg}
            alt="add"
            src={isActive ? ActiveAdd : isHover ? HoverAdd : Add}
          />
          <div className={styles.add_room}>{title}</div>
        </div>
      ) : type === "secondary" ? (
        <button className={styles.secondary}>{title}</button>
      ) : type === "reset" ? (
        <button className={styles.reset}>{title}</button>
      ) : type === "stop" ? (
        <button className={styles.stop}>{title}</button>
      ) : type === "signOut" ? (
        <div
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          className={styles.out_container}
        >
          <img alt="out" src={isActive ? ActiveOut : Out} />
          <div className={styles.sign_out}>{title}</div>
        </div>
      ) : type === "connect" ? (
        <button className={styles.connect}>{title}</button>
      ) : (
        <button className={styles.small}>{title}</button>
      )}
    </div>
  );
};

export { Button };
