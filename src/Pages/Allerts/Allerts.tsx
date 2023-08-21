import { useDispatch, useSelector } from "react-redux";
import { AllertOption } from "../../Components/AllertOption";
import { Button } from "../../Components/Button";
import { SideBarMenu } from "../../layouts/SideBarMenu";
import { openAllertModal } from "../../store";
import { AllertModal } from "../../layouts/AllertModal";
import styles from "./styles.module.scss";

const options = [
  { id: "1", title: "Assistant In", style: "assistantIn" },
  { id: "2", title: "Assistant Required", style: "assistantRequired" },
  { id: "3", title: "Doctor Required", style: "doctorRequired" },
  { id: "4", title: "Doctor In", style: "doctorIn" },
  { id: "5", title: "Patient In", style: "patientIn" },
  { id: "6", title: "Financial In", style: "financialIn" },
  { id: "7", title: "Financial Required", style: "financialRequired" },
  { id: "8", title: "Emergency", style: "emergency" },
  { id: "9", title: "Empty", style: "empty" },
];

const Allerts = () => {
  const isOpenAllertModal = useSelector(
    (state: SmartTrackState) => state.allertModalParameters?.isOpen
  );
  const dispatch = useDispatch();
  const allerts = JSON.parse(
    localStorage.getItem("allerts") || JSON.stringify(options)
  );
  const storageAllerts = JSON.parse(localStorage.getItem("allerts") || "[]");
  storageAllerts.length < 8 &&
    window.localStorage.setItem("allerts", JSON.stringify(options));

  const handleOpenAllertModal = () => {
    dispatch(openAllertModal({ type: "add", isOpen: true }));
  };
  return (
    <div className={styles.page}>
      {isOpenAllertModal && <AllertModal />}
      <SideBarMenu />
      <div className={styles.page_content}>
        <div className={styles.header}>
          <Button
            onClick={handleOpenAllertModal}
            title="Add New"
            type="primary"
          />
        </div>
        <div className={styles.options_wrapper}>
          {allerts?.map((option: any, index: number) => (
            <AllertOption index={index} allert={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Allerts };
