import styles from "./styles.module.scss";

import { useDispatch } from "react-redux";

import { addNewStuff, openAddStuffModal } from "../../store";
import Close from "../../assets/Close.svg";
import Delete from "../../assets/AllertDelete.svg";
import { Field } from "../../Components/Field";
import { Button } from "../../Components/Button";
import { useEffect, useState } from "react";

const AddStuffModal = ({ type }: { type?: string }) => {
  const dispatch = useDispatch();

  const [addedAllerts, setAddedAllerts] = useState<string[]>([]);
  const [stuffData, setStuffData] = useState<Doctor>({
    type: type,
    name: "",
    email: "",
    phone: "",
    allerts: [],
  });

  const handleStuffDataChange = (event: any) => {
    const { value, name } = event.target;
    setStuffData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    dispatch(openAddStuffModal(false));
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
    dispatch(addNewStuff(stuffData));
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
        <div className={styles.header}>
          <div></div>
          <div className={styles.header_title}>
            Add new {type?.slice(0, -1)}
          </div>
          <img
            onClick={handleCloseModal}
            className={styles.close}
            alt="close"
            src={Close}
          />
        </div>
        <Field
          name="name"
          value={stuffData.name}
          onChange={handleStuffDataChange}
          placeholder="Name"
          title="Name"
        />
        <Field
          name="email"
          value={stuffData.email}
          onChange={handleStuffDataChange}
          placeholder="example@mail.com"
          title="Email"
        />
        <Field
          name="phone"
          value={stuffData.phone}
          onChange={handleStuffDataChange}
          placeholder="+380967970607"
          title="Phone number"
        />

        {type == "Doctors" && (
          <>
            <div className={styles.title}>Allerts</div>
            <div className={styles.allerts_line}>
              {allerts.map((allert) => (
                <div
                  onClick={() => handleAddAllert(allert.value)}
                  className={styles.allert_container}
                >
                  <div
                    style={
                      addedAllerts.includes(allert.value)
                        ? { border: "4px solid" }
                        : {}
                    }
                    className={styles[allert.value]}
                  >
                    {addedAllerts.includes(allert.value) && (
                      <img src={Delete} alt="Delete" />
                    )}
                  </div>

                  <div
                    style={
                      addedAllerts.includes(allert.value)
                        ? { fontWeight: "700" }
                        : {}
                    }
                    className={styles.allert_name}
                  >
                    {allert.title}
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
