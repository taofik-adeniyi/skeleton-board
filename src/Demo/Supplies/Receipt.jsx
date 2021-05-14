import * as React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import AnimatedModal from '../../App/components/AnimatedModal';
import Card from '../../App/components/MainCard';
import ReactToPrint from 'react-to-print';
import darkLogo from '../../assets/images/logo-dark.png';
import DEMO from '../../store/constant';
class MaskWithValidation extends BaseFormControl {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            this.checkError();
            if (this.props.onChange)
                this.props.onChange(e);
        };
        this.inputRef = React.createRef();
    }
    getInputRef() {
        return this.inputRef.current.inputElement;
    }
    render() {
        return (<React.Fragment>
                <MaskedInput ref={this.inputRef} {...this.filterProps()} onChange={this.handleChange}/>
                {this.displayErrorMessage()}
                {this.displaySuccessMessage()}
            </React.Fragment>);
    }
}

const SamplePage = () => {
    const componentRef = useRef(null);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        description: '',
        url: '',
        gear: '',
        basic: '',
        custom: '',
        chkBasic: false,
        chkCustom: false,
        checkMeSwitch: false,
        showModal: false
    });
    const handleCheckboxChange = (e, value) => {
        setData({ ...data, [e.target.name]: value });
    };
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        //alert(JSON.stringify(formData, null, 2));
        setData({ ...data, showModal: true });
    };
    const handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };
    const matchPassword = (value) => {
        return value && value === data.password;
    };

    return (<>
            <Row>
                <Col>
                    <Card title="Do you want to message a Receipt ???" 
                        // isOption
                    >
                        <p>
                            "Get in touch with a Customer Support drop a message with all the required details!."
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card title="List of receipts issued" as="h5">
                        
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Agent Name</th>
                                        <th>Agent ID</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
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
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="" id="printTable">
                <div>
                    <div className="card" ref={componentRef}>
                        <div className="row invoice-contact">
                            <div className="col-md-8">
                                <div className="invoice-box row">
                                    <div className="col-sm-12">
                                        <table className="table table-responsive invoice-table table-borderless p-l-20">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href={DEMO.BLANK_LINK} className="b-brand">
                                                            <img className="img-fluid" src={darkLogo} alt="Able Pro Logo"/>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Company name </td>
                                                </tr>
                                                <tr>
                                                    <td>1065 Mandan Road, Columbia MO, Missouri. (123)-65202</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a className="text-secondary" href="mailto:demo@gmail.com" target="_top">
                                                            demo@gmail.com
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+91 919-91-91-919</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4"/>
                        </div>
                        <div className="card-body">
                            <div className="row invoive-info">
                                <div className="col-md-4 col-xs-12 invoice-client-info">
                                    <h6>Client Information :</h6>
                                    <h6 className="m-0">Josephin Villa</h6>
                                    <p className="m-0 m-t-10">1065 Mandan Road, Columbia MO, Missouri. (123)-65202</p>
                                    <p className="m-0">(1234) - 567891</p>
                                    <p>
                                        <a className="text-secondary" href="mailto:demo@gmail.com" target="_top">
                                            demo@gmail.com
                                        </a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <h6>Order Information :</h6>
                                    <table className="table table-responsive invoice-table invoice-order table-borderless">
                                        <tbody>
                                            <tr>
                                                <th>Date :</th>
                                                <td>November 14</td>
                                            </tr>
                                            <tr>
                                                <th>Status :</th>
                                                <td>
                                                    <span className="label label-warning">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Id :</th>
                                                <td>#146859</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <h6 className="m-b-20">
                                        Invoice Number <span>#125863478945</span>
                                    </h6>
                                    <h6 className="text-uppercase text-primary">
                                        Total Due :<span>$950.00</span>
                                    </h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table invoice-detail-table">
                                            <thead>
                                                <tr className="thead-default">
                                                    <th>Description</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h6>Logo Design</h6>
                                                        <p className="m-0">
                                                            lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                            incididunt{' '}
                                                        </p>
                                                    </td>
                                                    <td>6</td>
                                                    <td>$200.00</td>
                                                    <td>$1200.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6>Logo Design</h6>
                                                        <p className="m-0">
                                                            lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                            incididunt{' '}
                                                        </p>
                                                    </td>
                                                    <td>7</td>
                                                    <td>$100.00</td>
                                                    <td>$700.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6>Logo Design</h6>
                                                        <p className="m-0">
                                                            lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                            incididunt{' '}
                                                        </p>
                                                    </td>
                                                    <td>5</td>
                                                    <td>$150.00</td>
                                                    <td>$750.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table table-responsive invoice-table invoice-total">
                                        <tbody>
                                            <tr>
                                                <th>Sub Total :</th>
                                                <td>$4725.00</td>
                                            </tr>
                                            <tr>
                                                <th>Taxes (10%) :</th>
                                                <td>$57.00</td>
                                            </tr>
                                            <tr>
                                                <th>Discount (5%) :</th>
                                                <td>$45.00</td>
                                            </tr>
                                            <tr className="text-info">
                                                <td>
                                                    <hr />
                                                    <h5 className="text-primary m-r-10">Total :</h5>
                                                </td>
                                                <td>
                                                    <hr />
                                                    <h5 className="text-primary">$ 4827.00</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h6>Terms and Condition :</h6>
                                    <p>
                                        lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center btn-page">
                        <div className="col-sm-12 invoice-btn-group text-center">
                            <ReactToPrint trigger={() => (<button type="button" className="btn btn-primary btn-print-invoice m-b-10">
                                        Print
                                    </button>)} content={() => componentRef.current}/>
                            <button type="button" className="btn waves-effect waves-light btn-secondary m-b-10 ">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                </Col>
            </Row>
            
        </>);
};
export default SamplePage;
