import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editEmployee, openWardOptionsModal } from "../../store";
import Close from "../../assets/Close.svg";
import styles from "./styles.module.scss";
const OptionsModal = () => {
  const dispatch = useDispatch();
  const selectedRoom = useSelector((state: SmartTrackState) => state.room);
  const selectedDoctor = useSelector(
    (state: SmartTrackState) => state.employeeData
  );
  const allerts = JSON.parse(localStorage.getItem("allerts") || "[]");

  const leftColumn = allerts.slice(0, allerts.length / 2);
  const rightColumn = allerts.slice(allerts.length / 2);

  const [selectedOptions, setSelectedOptions] = useState<any>(
    selectedRoom?.options || []
  );

  const settedNames = selectedRoom?.options.map((option: any) => option?.title);

  const [selectedOptionsNames, setSelectedOptionsNames] =
    useState<any>(settedNames);

  const handleChangeSelectedOptions = (selectedOption: any) => {
    const filteredOptions = selectedOptions.filter(
      (option: any) => option.id != selectedOption.id
    );
    const filteredOptionsNames = selectedOptionsNames.filter(
      (title: any) => title != selectedOption.title
    );
    if (selectedOptionsNames.includes(selectedOption.title)) {
      setSelectedOptions([...filteredOptions]);
      setSelectedOptionsNames([...filteredOptionsNames]);
    } else {
      setSelectedOptions([...selectedOptions, selectedOption]);
      setSelectedOptionsNames([...selectedOptionsNames, selectedOption.title]);
    }
  };

  const handleCloseModal = () => {
    dispatch(openWardOptionsModal(false));
    const newRooms = selectedDoctor?.rooms?.map((room: any) => {
      if (room.id == selectedRoom.id) {
        return {
          id: selectedRoom.id,
          name: selectedRoom.name,
          doctor: selectedRoom.doctor,
          options: selectedOptions,
        };
      } else {
        return room;
      }
    });
    dispatch(editEmployee({ ...selectedDoctor, rooms: newRooms }));
  };
  return (
    <div onClick={handleCloseModal} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.left_column}>
          {leftColumn?.map((item: Option) => {
            return (
              <div
                style={{
                  backgroundColor: selectedOptionsNames.includes(item.title)
                    ? "#6AC7BE66"
                    : "",
                }}
                onClick={() => handleChangeSelectedOptions(item)}
                className={styles.option_container}
              >
                <div className={styles[item.style]}>{item.title[0]}</div>
                <div className={styles.title}>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.right_column}>
          {rightColumn?.map((item: Option) => {
            return (
              <div
                style={{
                  backgroundColor: selectedOptionsNames.includes(item.title)
                    ? "#6AC7BE66"
                    : "",
                }}
                onClick={() => handleChangeSelectedOptions(item)}
                className={styles.option_container}
              >
                <div className={styles[item.style]}>{item.title[0]}</div>
                <div className={styles.title}>{item.title}</div>
              </div>
            );
          })}
        </div>
        <img
          onClick={handleCloseModal}
          className={styles.close}
          alt="close"
          src={Close}
        />
      </div>
    </div>
  );
};

export { OptionsModal };
