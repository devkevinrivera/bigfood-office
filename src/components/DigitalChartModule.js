import React from 'react';
import { Divider, Grid, Header, Icon } from 'semantic-ui-react';
import CategoryHandler from './DigitalChartModule/CategoryHandler';
import SubCategoryHandler from './DigitalChartModule/SubCategoryHandler';

const DigitalChartModule = () => {
    return (
        <Grid columns={16}>
            <Grid.Row>
                <Grid.Column computer={16} className="flex">
                    <Header>Carta Digital</Header>
                    <div>
                        <Icon name="sitemap" size="big" />
                        <Icon name="bars" size="big" />
                    </div>
                </Grid.Column>
                <Divider />
                <Grid.Column computer={16}>
                    <Grid columns={16}>
                        <Grid.Row>
                            <Grid.Column computer={4}>
                                <CategoryHandler />
                            </Grid.Column>
                            <Grid.Column computer={6}>
                                <SubCategoryHandler />
                            </Grid.Column>
                            <Grid.Column computer={6}>
                                <SubCategoryHandler />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default DigitalChartModule;