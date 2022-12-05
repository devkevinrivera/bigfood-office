import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Icon, Image } from 'semantic-ui-react';

const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ')

const SubCategoryHandler = props => {
    return (
        <Grid columns={16}>
            <Grid.Row>
                <Grid.Column computer={16}>
                    <Card fluid>
                        <Image src="https://i.picsum.photos/id/631/200/100.jpg?blur=2&hmac=Y4YdX_cq6PtMmVw52-Skx0h0Bx9crgMcGEXNDPcT78k" />
                        <div className='flex'>
                            <Card.Content description="Finger y Guarniciones" />
                            <div>
                                <Icon name="plus" size="big" />
                                <Icon name="bars" size="big" />
                            </div>
                        </div>
                        <div>
                            <p>Para empezar, picotear o simplemente acompañar una birra</p>
                        </div>
                        <div>
                            <h4>SubCategorias</h4>
                            <div>
                                <div className='flex'>
                                    <p>Finger y Guarniciones</p>
                                    <Icon name="arrow alternate circle right" />
                                </div>
                                <div className='flex'>
                                    <p>Finger y Guarniciones</p>
                                    <Icon name="arrow alternate circle right" />
                                </div>
                                <div className='flex'>
                                    <p>Finger y Guarniciones</p>
                                    <Icon name="arrow alternate circle right" />
                                </div>
                                <div className='flex'>
                                    <p>Finger y Guarniciones</p>
                                    <Icon name="arrow alternate circle right" />
                                </div>
                                
                            </div>
                        </div>
                        
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

SubCategoryHandler.propTypes = {
    
};

export default SubCategoryHandler;