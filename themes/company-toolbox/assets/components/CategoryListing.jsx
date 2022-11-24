import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CategoryCard from './CategoryCard';

export default class CategoryListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories : []
    }
  }

  readDataLink() {
        console.log(this.props.dataLink)
    return fetch(this.props.dataLink)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          categories: responseJson.data
        })


      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.readDataLink();
  }

  render() {
    return (

      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {this.state.categories.map((catData) => (
            <Grid item key={catData.title} xs={12} sm={6} md={4} lg={3} xl={2}>
              <CategoryCard itemData={catData} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}


