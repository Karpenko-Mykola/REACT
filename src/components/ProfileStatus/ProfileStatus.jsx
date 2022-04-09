import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        text: "My status"
    }

    changeStatus(){
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        if (this.state.editMode)
            return <input type="text" autoFocus={true} onBlur={this.changeStatus.bind(this)} value={this.state.text}/>
        else return <div onDoubleClick = {this.changeStatus.bind(this)}>{this.state.text} </div>
    }
}

export default ProfileStatus