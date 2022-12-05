import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Grid } from "semantic-ui-react";
import BigFoodHeader from '../src/components/BigFoodHeader';
import BigFoodMenuLateral from '../src/components/BigFoodMenuLateral';


export default function Home() {
  return (
    <Container>
      <Grid columns={16}>
        <Grid.Row>
          <Grid.Column computer={16}>
            <BigFoodHeader />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={3}>
            <BigFoodMenuLateral />
          </Grid.Column>
          <Grid.Column computer={13}>
            <p>ZONA DEL MENU PRINCIPAL</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
