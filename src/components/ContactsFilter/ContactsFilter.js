import css from "./ContactsFilter.module.css";
import { setFilterValue } from "Redux/filterSlise";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "Redux/selector";

export const Filter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getFilter)
  return(<label className={css.filter} htmlFor="">
    Find contacts by name:
    <input className={css.filter__input} type="text" value={value} onChange={(e) => {
      dispatch(setFilterValue(e.target.value))
    }} />
  </label>
)};

export default Filter;