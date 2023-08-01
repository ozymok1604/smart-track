import { createStore, Store } from "redux";
import { reducer } from "./reducer";

const store: Store<SmartTrackState> = createStore(reducer);

export { store };
