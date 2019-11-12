import React from 'react';
import { connect } from 'react-redux';
import { FETCH_DATA_REQUETS } from './action';
import { Form, Button, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import './style.scss';
import { fetchData } from './action';

class GithubInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  };
  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getDataSaga(this.state.username);
  }
  render() {
    return (
      <div>
        <div className='fetch-data-form'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group >
              <Row>
                <Col md={10}>
                  <Form.Control type='string' placeholder='Enter your github username'
                    onChange={this.handleChange} value={this.state.username} />
                </Col>
                <Col>
                  <Button size='md' type='submit' className='button'>Fetch</Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>

          <div>
            {!_.isEmpty(this.props.githubInfo) &&
              <div className='user-info-container'>
                <img src={this.props.githubInfo.avatar_url} alt='avatar'
                  width='250' height='250' />
                <h3>{this.props.githubInfo.name}</h3>
                <p>{this.props.githubInfo.login}</p>
                <p>{this.props.githubInfo.bio}</p>
                <p><b>Company: </b>{this.props.githubInfo.company}</p>
              </div>
            }
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    githubInfo: state.githubInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataSaga: (params) => dispatch({ type: FETCH_DATA_REQUETS, params })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubInfo);