import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewEmployee, editEmployee, openAddStuffModal } from "../../store";
import { Field } from "../../Components/Field";
import { Button } from "../../Components/Button";
import Close from "../../assets/Close.svg";
import Delete from "../../assets/AllertDelete.svg";
import { getRandomNumber } from "../../utils/getRandomNumber";
import styles from "./styles.module.scss";

const AddStuffModal = ({
  actionType,
  employeeType,
}: {
  employeeType?: string;
  actionType?: string;
}) => {
  const employeeData = useSelector(
    (state: SmartTrackState) => state.employeeData
  );
  const stuffModalParameters = useSelector(
    (state: SmartTrackState) => state.stuffModalParameters
  );
  const dispatch = useDispatch();

  const isEdit = stuffModalParameters.type == "edit";

  const [addedAllerts, setAddedAllerts] = useState<any[]>(
    (isEdit && employeeData.allerts) || []
  );
  const [stuffData, setStuffData] = useState<Employee>({
    id: isEdit ? employeeData?.id : getRandomNumber(1000),
    type: employeeType || employeeData.type,
    name: isEdit ? employeeData?.name : "",
    email: isEdit ? employeeData?.email : "",
    phone: isEdit ? employeeData?.phone : "",
    allerts: isEdit ? employeeData?.allerts : [],
  });

  const handleStuffDataChange = (event: any) => {
    const { value, name } = event.target;
    setStuffData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    dispatch(openAddStuffModal({ type: "close", isOpen: false }));
  };

  const allerts = [
    { title: "Assistant", value: "assistant" },
    { title: "Doctor", value: "doctor" },
    { title: "Finances", value: "financial" },
    { title: "Patient", value: "patient" },
    { title: "Emergency", value: "emergency" },
    { title: "Empty", value: "empty" },
  ];

  const handleAddAllert = (allert: string) => {
    const filteredAllerts = addedAllerts.filter(
      (addedAllert) => addedAllert != allert
    );

    if (addedAllerts.includes(allert)) {
      setAddedAllerts([...filteredAllerts]);
    } else {
      setAddedAllerts([...addedAllerts, allert]);
    }
  };

  const handleSaveForm = () => {
    stuffModalParameters.type == "add"
      ? dispatch(addNewEmployee(stuffData))
      : dispatch(editEmployee(stuffData));
    handleCloseModal();
  };

  useEffect(() => {
    setStuffData((prevState) => ({
      ...prevState,
      allerts: addedAllerts,
    }));
  }, [addedAllerts]);

  return (
    <div onClick={handleCloseModal} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.close_container}>
          <img
            onClick={handleCloseModal}
            className={styles.close}
            alt="close"
            src={Close}
          />
        </div>
        <div className={styles.header}>
          <div className={styles.header_title}>
            Add new {stuffData?.type?.slice(0, -1)}
          </div>
        </div>
        <Field
          name="name"
          value={stuffData?.name}
          onChange={handleStuffDataChange}
          placeholder="Name"
          title="Name"
        />
        <Field
          name="email"
          value={stuffData?.email}
          onChange={handleStuffDataChange}
          placeholder="example@mail.com"
          title="Email"
        />
        <Field
          name="phone"
          value={stuffData?.phone}
          onChange={handleStuffDataChange}
          placeholder="+380967970607"
          title="Phone number"
        />

        {stuffData.type == "Doctors" && (
          <>
            <div className={styles.title}>Allerts</div>
            <div className={styles.allerts_line}>
              {allerts.map((allert) => (
                <div
                  onClick={() => handleAddAllert(allert?.value)}
                  className={styles.allert_container}
                >
                  <div
                    style={{
                      border: addedAllerts.includes(allert?.value)
                        ? "4px solid"
                        : "",
                    }}
                    className={styles[allert.value]}
                  >
                    {addedAllerts.includes(allert?.value) && (
                      <img src={Delete} alt="Delete" />
                    )}
                  </div>

                  <div
                    style={{
                      fontWeight: addedAllerts.includes(allert.value)
                        ? "700"
                        : "",
                    }}
                    className={styles.allert_name}
                  >
                    {allert?.title}
                  </div>
                </div>
              ))}
            </div>
            <Button type="add" title="Add an Allert" />
          </>
        )}

        <div className={styles.footer}>
          <Button onClick={handleSaveForm} type="primary" title="Save" />
        </div>
      </div>
    </div>
  );
};

export { AddStuffModal };
