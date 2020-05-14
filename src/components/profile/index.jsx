import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/styles';
import Search from '../search';

const useStyles = theme => ({
    formControl: {
        margin: '2rem',
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: '2rem',
    },
});

class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={this.handleChange}
                        label="Age">
                        <MenuItem value={'planets'}>Planets</MenuItem>
                        <MenuItem value={'starships'}>Starships</MenuItem>
                    </Select>
                </FormControl> */}
                <Search
                    category={'planets'}/>
            </div>
        )
    }
}

export default withStyles(useStyles)(Profile);