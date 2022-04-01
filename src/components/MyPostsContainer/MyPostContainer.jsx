import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, postInputChangeActionCreator} from "../../redux/profile-reducer";

const MyPostContainer = (props) => {
    const onClick = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const changeInputValue = (value) => {
        props.store.dispatch(postInputChangeActionCreator(value))
    }
    return (
        <MyPosts onClick={onClick} changeInputValue={changeInputValue} data={props.store.getState().profilePage}/>
    )
}


export default MyPostContainer