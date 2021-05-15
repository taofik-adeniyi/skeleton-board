import * as React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import Card from '../../App/components/MainCard';
import Chart from 'react-apexcharts';
// import seoChart3 from '../Dashboard/default-seo-chart-3';
import powerCard1 from '../Dashboard/chart/default-power-card-1';
import powerCard2 from '../Dashboard/chart/default-power-card-2';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
const SamplePage = () => {
    return (<>
            
            <Row>
            <Col md={4}>
                <Card>
                    {/* <Card.Body> */}
                        <h5 className="mb-3">Total</h5>
                        <h2>
                            2789<span className="text-muted m-l-5 f-14">tk</span>
                        </h2>
                        <Chart {...powerCard1}/>
                        <Row>
                            <Col sm="auto">
                                <div className="map-area">
                                    <h6 className="m-0">
                                        2876 <span> tk</span>
                                    </h6>
                                    <p className="text-muted m-0">month</p>
                                </div>
                            </Col>
                            <Col sm="auto">
                                <div className="map-area">
                                    <h6 className="m-0">
                                        234 <span> tk</span>
                                    </h6>
                                    <p className="text-muted m-0">Today</p>
                                </div>
                            </Col>
                        </Row>
                    {/* </Card.Body> */}
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    {/* <Card.Body> */}
                        <h5 className="mb-3">Wining</h5>
                        <h2>
                            2789<span className="text-muted m-l-5 f-14">tk</span>
                        </h2>
                        <Chart {...powerCard2}/>
                        <Row>
                            <Col sm="auto">
                                <div className="map-area">
                                    <h6 className="m-0">
                                        2876 <span> tk</span>
                                    </h6>
                                    <p className="text-muted m-0">month</p>
                                </div>
                            </Col>
                            <Col sm="auto">
                                <div className="map-area">
                                    <h6 className="m-0">
                                        234 <span> tk</span>
                                    </h6>
                                    <p className="text-muted m-0">Today</p>
                                </div>
                            </Col>
                        </Row>
                    {/* </Card.Body> */}
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    {/* <Card.Body> */}
                        <h5 className="mb-3">Losing</h5>
                        <h2>
                            2789<span className="text-muted m-l-5 f-14">tk</span>
                        </h2>
                        <Chart {...powerCard1}/>
                        <Row>
                            <Col sm="auto">
                                <div className="map-area">
                                    <h6 className="m-0">
                                        2876 <span> tk</span>
                                    </h6>
                                    <p className="text-muted m-0">month</p>
                                </div>
                            </Col>
                            <Col sm="auto">
                                <div className="map-area">
                                    <h6 className="m-0">
                                        234 <span> tk</span>
                                    </h6>
                                    <p className="text-muted m-0">Today</p>
                                </div>
                            </Col>
                        </Row>
                    {/* </Card.Body> */}
                </Card>
            </Col>
            </Row>
            <Row>
                <Col>
                    <Card title="Listings of Tickets" >
                        {/* <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum."
                        </p> */}
                    </Card>
                </Col>
            </Row>
            <Row>
            <Col xl={12} md={12}>
                    <Card className="table-card" title="Tickets Played">
                        {/* <Card.Header>
                            <h5>Projects</h5>
                        </Card.Header> */}
                        {/* <Card.Body className="pb-0"> */}
                            <Table responsive hover className="mb-0">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            Assigned
                                        </th>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th className="text-right">Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar4} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>John Deo</h6>
                                                    <p className="text-muted m-b-0">Graphics Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Able Pro</td>
                                        <td>Jun, 26</td>
                                        <td className="text-right">
                                            <label className="badge badge-light-danger">Low</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>Jenifer Vintage</h6>
                                                    <p className="text-muted m-b-0">Web Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Mashable</td>
                                        <td>March, 31</td>
                                        <td className="text-right">
                                            <label className="badge badge-light-primary">high</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>William Jem</h6>
                                                    <p className="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Flatable</td>
                                        <td>Aug, 02</td>
                                        <td className="text-right">
                                            <label className="badge badge-light-success">medium</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>David Jones</h6>
                                                    <p className="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Guruable</td>
                                        <td>Sep, 22</td>
                                        <td className="text-right">
                                            <label className="badge badge-light-primary">high</label>
                                        </td>
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
