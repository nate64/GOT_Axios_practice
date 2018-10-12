import React from 'react'
import { Card, Header, Container } from 'semantic-ui-react'
import axios from 'axios'
//import { Link } from 'react-router-dom'

class Characterlocations extends React.Component {
    state = { characterlocations: [] }
  
  componentDidMount() {
    axios.get('https://api.got.show/api/characters/locations')
    .then( res => {
      this.setState({ characterlocations: res.data })
      //debugger
    })
      .catch( err => {
        console.log(err)
      })
  }

  displayCharloc = () => {
    return this.state.characterlocations.map( c => (
      <Card key={c.id} >
        <Card.Content>
          <Card.Header>{c.name}</Card.Header>          
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Container>
          <Header as="h2" textAlign='center'> 
            What is GOT
          </Header>
          <Card.Group itemsPerRow={1}>
            {this.displayCharloc()} 
          </Card.Group>
        </Container>
      </div>
    )
  }
}

export default Characterlocations





// const ReviewStyles = styled.div`
//   margin-top: 100px;
// `

// const mapStateToProps = (state) => {
//   return {
//     reviews: state.reviews
//   }
// }




// export const getCharloc = () => {
  //   return (dispatch) => {
  //     axios.get('https://api.got.show/api/characters/locations')
  //     .then( res => {
  //       dispatch({ type: REVIEWS, reviews: res.data })
  //       }
  //     )
  //   }
  // }