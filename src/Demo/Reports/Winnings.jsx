import * as React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import Card from '../../App/components/MainCard';
const SamplePage = () => {
    return (<>
            <Row>
                <Col>
                    <Card title="Winnings">
                        <p>
                            "Total winnings on the netork filterable by date, game type, cashiers, locations etc."
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card title="Total Winnings on the network">
                        {/* <Card.Header>
                            <Card.Title as="h5">Contextual Classes</Card.Title>
                            <span className="d-block m-t-5">
                                use props <code>className="table-*"</code> with <code>tr</code> element
                            </span>
                        </Card.Header> */}
                        {/* <Card.Body> */}
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-active">
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr className="table-success">
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr className="table-warning">
                                        <th scope="row">5</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr className="table-danger">
                                        <th scope="row">7</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr className="table-info">
                                        <th scope="row">9</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">11</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        {/* </Card.Body> */}
                    </Card>
                </Col>
            </Row>
        </>);
};
export default SamplePage;
