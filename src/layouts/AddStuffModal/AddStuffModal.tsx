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

const AddStuffModal = ({ employeeType }: { employeeType?: string }) => {
  const employeeData = useSelector(
    (state: SmartTrackState) => state.employeeData
  );
  const stuffModalParameters = useSelector(
    (state: SmartTrackState) => state.stuffModalParameters
  );

  const [addAllertIsOpen, setAddAllertIsOpen] = useState<boolean>(false);

  const onAddAnAllertClick = () => {
    setAddAllertIsOpen(true);
  };

  const dispatch = useDispatch();

  const isEdit = stuffModalParameters.type == "edit";

  const [addedAllerts, setAddedAllerts] = useState<any[]>(
    (isEdit && employeeData.allerts) || []
  );
  const [stuffData, setStuffData] = useState<Employee>({
    id: isEdit ? employeeData?.id : getRandomNumber(1000),
    countInLine: isEdit ? employeeData?.countInLine : 0,
    stopped: isEdit ? employeeData?.stopped : false,
    type: employeeType || employeeData.type,
    name: isEdit ? employeeData?.name : "",
    email: isEdit ? employeeData?.email : "",
    rooms: employeeData?.rooms,
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

  const additionalAllerts = [
    { title: "Allert", style: "allert1", value: "allert1" },
    { title: "Allert", style: "allert2", value: "allert2" },
    { title: "Allert", style: "allert3", value: "allert3" },
    { title: "Allert", style: "allert4", value: "allert4" },
    { title: "Allert", style: "allert5", value: "allert5" },
    { title: "Allert", style: "allert6", value: "allert6" },
    { title: "Allert", style: "allert7", value: "allert7" },
    { title: "Allert", style: "allert8", value: "allert8" },
    { title: "Allert", style: "allert9", value: "allert9" },
    { title: "Allert", style: "allert10", value: "allert10" },
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
            <div className={styles.additional_title}>Choose allert</div>
            {addAllertIsOpen ? (
              <div className={styles.additional_allerts_container}>
                {additionalAllerts.map((additionalAllert: any) => (
                  <div
                    onClick={() => handleAddAllert(additionalAllert?.value)}
                    className={styles.additional_allert}
                    style={{
                      border: addedAllerts.includes(additionalAllert.value)
                        ? "2px solid #6ac7be"
                        : " ",
                    }}
                  >
                    <div className={styles[additionalAllert.style]}></div>
                    <div
                      style={{
                        color: addedAllerts.includes(additionalAllert.value)
                          ? "#6ac7be"
                          : "#212121",
                        fontWeight: addedAllerts.includes(
                          additionalAllert.value
                        )
                          ? "700"
                          : "400",
                      }}
                      className={styles.allert_title}
                    >
                      {additionalAllert.title}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Button
                onClick={onAddAnAllertClick}
                type="add"
                title="Add an Allert"
              />
            )}
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
