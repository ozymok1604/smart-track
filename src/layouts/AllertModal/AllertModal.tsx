import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Close from "../../assets/Close.svg";
import { addAllert, editAllert, openAllertModal } from "../../store";
import { Field } from "../../Components/Field";
import { Button } from "../../Components/Button";
import { getRandomNumber } from "../../utils/getRandomNumber";
import styles from "./styles.module.scss";

const AllertModal = ({ actionType }: { actionType?: any }) => {
  const parametersType = useSelector(
    (state: SmartTrackState) => state.allertModalParameters?.type
  );
  const type = actionType ? actionType : parametersType;
  const allertData = useSelector((state: SmartTrackState) => state.allertData);
  const dispatch = useDispatch();
  const handleCloseAllertModal = () => {
    dispatch(openAllertModal({ type: "", isOpen: false }));
  };

  const allerts = [
    "allert1",
    "allert2",
    "allert3",
    "allert4",
    "allert5",
    "allert6",
  ];
  const id = getRandomNumber(100);
  const [name, setName] = useState(type == "edit" ? allertData?.title : "");
  const [orderedStyle, setOrderedStyle] = useState(
    type == "edit" ? allertData?.style : ""
  );

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onSaveClick = () => {
    type == "add"
      ? dispatch(
          addAllert({ id: id.toString(), title: name, style: orderedStyle })
        )
      : dispatch(
          editAllert({ id: allertData?.id, title: name, style: orderedStyle })
        );

    dispatch(openAllertModal({ type: "", isOpen: false }));
  };

  return (
    <div onClick={handleCloseAllertModal} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.close_container}>
          <img
            onClick={handleCloseAllertModal}
            className={styles.close}
            alt="Close"
            src={Close}
          />
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.header_title}>
            {type == "edit" ? allertData?.title : "Add New"}
          </div>
          <Field
            onChange={handleChangeName}
            value={name}
            title="Name"
            placeholder="Name"
          />
          <div className={styles.title}>Color</div>
          <div className={styles.allerts_container}>
            {allerts.map((allert: string) => (
              <div
                title={allert}
                onClick={() => setOrderedStyle(allert)}
                className={`${styles[allert]} ${
                  orderedStyle === allert ? styles.ordered : ""
                }`}
              ></div>
            ))}
          </div>
          <Button onClick={onSaveClick} title="Save" type="primary" />
        </div>
      </div>
    </div>
  );
};

export { AllertModal };
