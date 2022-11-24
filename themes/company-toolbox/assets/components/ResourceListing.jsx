import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ResourceCard from './ResourceCard';

export default class ResourceListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resources : []
    }
  }

  readDataLink() {
    return fetch(this.props.dataLink)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          resources: responseJson.data.resources
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
          {this.state.resources.map((resource) => (
            <Grid item key={resource.title} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ResourceCard itemData={resource}/>
            </Grid>
          ))}
        </Grid>
      </Container>

    );
  }
}


