import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Menu } from 'semantic-ui-react'

const BigFoodMenuLateral = props => {
    let activeItem = "span";

    const handleItemClick = () => {
        console.log('kevin')
    };

    return (
        <Menu vertical>
            <Menu.Item
                name='inbox'
                active={activeItem === 'inbox'}
                onClick={handleItemClick}
            >
            <Label color='teal'>1</Label>
            Inbox
            </Menu.Item>
            <Menu.Item
                name='inbox'
                active={activeItem === 'inbox'}
                onClick={handleItemClick}
            >
            <Label color='teal'>1</Label>
            Inbox
            </Menu.Item>
            <Menu.Item
                name='inbox'
                active={activeItem === 'inbox'}
                onClick={handleItemClick}
            >
            <Label color='teal'>1</Label>
            Inbox
            </Menu.Item>

            <Menu.Item
                name='spam'
                active={activeItem === 'spam'}
                onClick={handleItemClick}
            >
            <Label>51</Label>
            Spam
            </Menu.Item>

            <Menu.Item
                name='updates'
                active={activeItem === 'updates'}
                onClick={handleItemClick}
            >
            <Label>1</Label>
            Updates
            </Menu.Item>
            <Menu.Item>
            <Input icon='search' placeholder='Search mail...' />
            </Menu.Item>
      </Menu>
    );
};

BigFoodMenuLateral.propTypes = {
    
};

export default BigFoodMenuLateral;