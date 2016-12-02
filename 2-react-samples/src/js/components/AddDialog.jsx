import React, { Component } from 'react';
import Dialog from './shared/Dialog';

class AddDialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialog 
                title="Confirmation Dialog"
                dialogButtons={<Buttons/>}>
                <p>Do you wand to add ... ?</p>
            </Dialog>
        );
    }
}

let Buttons = (prop) => <div>
    <button type="button">Yes</button>
    <button type="button">No</button>
</div>

export default AddDialog;