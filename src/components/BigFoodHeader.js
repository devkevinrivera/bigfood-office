import React from 'react';
import { Dropdown, Grid, Icon } from "semantic-ui-react";
import PropTypes from 'prop-types';

const BigFoodHeader = props => {
    return (
        <Grid columns={16}>
            <Grid.Row>
                <Grid.Column computer={4} verticalAlign='middle'>
                    <p>LOGO</p>
                </Grid.Column>
                <Grid.Column computer={12} textAlign="right" verticalAlign='middle'>
                    <Dropdown />
                    <Icon size="big" name="bullhorn" />
                    <Icon size="big" name="configure" />
                    <Icon size="big" name="user" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

BigFoodHeader.propTypes = {
    
};

export default BigFoodHeader;