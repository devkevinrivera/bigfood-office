import React from 'react';
import { Button, Divider, Grid, Icon } from 'semantic-ui-react';

const CategoryHandler = () => {
    return (
        <Grid columns={16}>
            <Grid.Row>
                <Grid.Column computer={16} verticalAlign="middle">
                    <Divider />
                    <Button primary>
                        <Icon name="plus" />
                        Añadir Categoria
                    </Button>
                </Grid.Column>
                <Grid.Column computer={16}>
                    <Divider />
                    <div>
                        <div className='flex'>
                            <p>Finger y Guarniciones</p>
                            <Icon name="arrow alternate circle right" />
                        </div>
                        <div className='flex'>
                            <p>Postres Y bebidas</p>
                            <Icon name="arrow alternate circle right" />
                        </div>
                        <div className='flex'>
                            <p>Hamburguesas</p>
                            <Icon name="arrow alternate circle right" />
                        </div>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default CategoryHandler;