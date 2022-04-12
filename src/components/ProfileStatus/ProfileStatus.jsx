import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        text: this.props.status
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                text: this.props.status,
            })
        }
    }

    changeStatus = () =>{
        this.setState({
            editMode: !this.state.editMode
        })
    }
    updateStatus = () =>{
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.setStatusTHUNK(this.state.text)
    }

    onChange(e){
        this.setState({
            text: e.target.value
        });
    }

    render() {
        if (this.state.editMode)
            return <input type="text" onChange = {(e) =>this.onChange(e)} autoFocus={true} onBlur={this.updateStatus} value={this.state.text}/>
        else return <div onDoubleClick = {this.changeStatus}>{this.props.status ||  "----"} </div>
    }
}

export default ProfileStatus