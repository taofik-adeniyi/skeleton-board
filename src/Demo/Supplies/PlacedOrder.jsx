import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Form, Button, Table, Badge } from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import AnimatedModal from '../../App/components/AnimatedModal';
import Card from '../../App/components/MainCard';
import Select from 'react-select';
import UcFirst from '../../App/components/UcFirst';

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
export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E', isFixed: true },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' }
];
const SamplePage = () => {
    const orderOptions = (values) => {
        return values.filter((v) => v.isFixed).concat(values.filter((v) => !v.isFixed));
    };
    const [value, setValue] = useState(orderOptions([colourOptions[3], colourOptions[6], colourOptions[8]]));

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
                <Card title="List of orders" as="h5">
                        {/* <Card.Header>
                            <Card.Title as="h5">Responsive Table</Card.Title>
                        </Card.Header> */}
                        {/* <Card.Body> */}
                            <Table striped hover responsive bordered className="table table-condensed" id="data-table-responsive">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {/* <Button variant="info" size="sm"> */}
                                            <Badge variant="success" className="ml-1">
                                                <UcFirst text={'Fullfill Order'}/> 
                                            </Badge>
                                            {/* </Button> */}

                                            {/* <Badge key={2} variant={info} className="mr-1">
                                            <UcFirst text={info}/> 
                                            Info
                                            </Badge> */}
                                        </td>
                                        <td>Mesh</td>
                                        <td>Developer</td>
                                        <td>Remote</td>
                                        <td>76</td>
                                        <td>01/05/1876</td>
                                        <td>#100,00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {/* <Button variant="info" size="sm"> */}
                                            <Badge variant="success" className="ml-1">
                                                <UcFirst text={'Fullfill Order'}/> 
                                            </Badge>
                                            {/* </Button> */}

                                            {/* <Badge key={2} variant={info} className="mr-1">
                                            <UcFirst text={info}/> 
                                            Info
                                            </Badge> */}
                                        </td>
                                        <td>Mesh</td>
                                        <td>Developer</td>
                                        <td>Remote</td>
                                        <td>76</td>
                                        <td>01/05/1876</td>
                                        <td>#100,00</td>
                                    </tr><tr>
                                        <td>
                                            {/* <Button variant="info" size="sm"> */}
                                            <Badge variant="danger" className="ml-1">
                                                <UcFirst text={'Fullfill Order'}/> 
                                            </Badge>
                                            {/* </Button> */}

                                            {/* <Badge key={2} variant={info} className="mr-1">
                                            <UcFirst text={info}/> 
                                            Info
                                            </Badge> */}
                                        </td>
                                        <td>Mesh</td>
                                        <td>Developer</td>
                                        <td>Remote</td>
                                        <td>76</td>
                                        <td>01/05/1876</td>
                                        <td>#100,00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Status</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Date</th>
                                        <th>Salary</th>
                                    </tr>
                                </tfoot>
                            </Table>
                        {/* </Card.Body> */}
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card title={`"${"Select the supply and quantity you want:"}" to place an order ???`}
                        // isOption
                    >
                        <p>
                            Once and order is paid it sends the agent the receipt
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        {/* <Card.Header>
                            <Card.Title as="h5">Form Validation</Card.Title>
                        </Card.Header> */}
                        {/* <Card.Body> */}
                            <ValidationForm onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="firstName">Agent ID</Form.Label>
                                        <TextInput name="firstName" id="firstName" placeholder="First Name" required value={data.firstName} onChange={handleChange} autoComplete="off"/>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="lastName">Order Name</Form.Label>
                                        <TextInput name="lastName" id="lastName" placeholder="Last Name" minLength="4" value={data.lastName} onChange={handleChange} autoComplete="off"/>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="email">Supplier</Form.Label>
                                        <TextInput name="email" id="email" type="email" placeholder="Email Address" validator={validator.isEmail} errorMessage={{ validator: 'Please enter a valid email' }} value={data.email} onChange={handleChange} autoComplete="off"/>
                                    </Form.Group>
                                    {/* <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="password">Password</Form.Label>
                                        <TextInput name="password" id="password" type="password" placeholder="Password" required pattern="(?=.*[A-Z]).{6,}" errorMessage={{
            required: 'Password is required',
            pattern: 'Password should be at least 6 characters and contains at least one upper case letter'
        }} value={data.password} onChange={handleChange} autoComplete="off"/>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                                        <TextInput name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirm Password" required validator={matchPassword} errorMessage={{
            required: 'Confirm password is required',
            validator: 'Password does not match'
        }} value={data.confirmPassword} onChange={handleChange} autoComplete="off"/>
                                    </Form.Group> */}
                                    {/* <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="phone">Phone</Form.Label>
                                        <MaskWithValidation name="phone" id="phone" placeholder="Contact Number" className="form-control" required validator={(value) => value === '(123) 456-7890'} value={data.phone} onChange={handleChange} successMessage="Looks good!" errorMessage={{ validator: 'Please enter (123) 456-7890' }} mask={[
            '(',
            /[1-9]/,
            /[0-9]/,
            /[0-9]/,
            ')',
            ' ',
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            '-',
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/
        ]} autoComplete="off"/>
                                    </Form.Group> */}
                                    {/* <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="url">URL</Form.Label>
                                        <TextInput name="url" id="url" type="url" placeholder="Website" required pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$" errorMessage={{ required: 'URL is required', pattern: 'URL is invalid.' }} value={data.url} onChange={handleChange} autoComplete="off"/>
                                    </Form.Group> */}
                                    {/* <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="upload_avatar">Upload Avatar</Form.Label>
                                        <div className="custom-file">
                                            <FileInput name="avatar" id="avatar" required fileType={['png', 'jpg', 'jpeg']} maxFileSize="100 kb" errorMessage={{
            required: 'Please upload a file',
            fileType: 'Only .png or .jpg file is allowed',
            maxFileSize: 'Max file size is 100 kb'
        }}/>
                                        </div>
                                    </Form.Group> */}
                                    <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="gear">Supply</Form.Label>
                                        {/* <SelectGroup name="gear" id="gear" value={data.gear} required errorMessage="Please select a gear." onChange={handleChange}>
                                            <option value="">Please select a gear...</option>
                                            <optgroup label="Climbing">
                                                <option value="pitons">Pitons</option>
                                                <option value="cams">Cams</option>
                                                <option value="nuts">Nuts</option>
                                                <option value="bolts">Bolts</option>
                                                <option value="stoppers">Stoppers</option>
                                                <option value="sling">Sling</option>
                                            </optgroup>
                                            <optgroup label="Skiing">
                                                <option value="skis">Skis</option>
                                                <option value="skins">Skins</option>
                                                <option value="poles">Poles</option>
                                            </optgroup>
                                        </SelectGroup> */}
                            <Select className="basic-single" classNamePrefix="select" defaultValue={colourOptions[0]} name="color" options={colourOptions}/>

                                    </Form.Group>
                                    
                                    <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="gear">Quantity</Form.Label>
                                    <Select className="basic-single" classNamePrefix="select" defaultValue={colourOptions[0]} name="color" options={colourOptions}/>

                                    </Form.Group>
                                    {/* <Form.Group as={Col} sm="12">
                                        <Form.Label htmlFor="description">Description</Form.Label>
                                        <TextInput name="description" id="description" placeholder="About Us" multiline required value={data.description} onChange={handleChange} rows={3} autoComplete="off"/>
                                    </Form.Group> */}
                                    {/* <Form.Group as={Col} sm="6" className="mb-5">
                                        <Form.Label htmlFor="description">Switch</Form.Label>
                                        <div className="switch">
                                            <Checkbox name="check-me" label="" id="check-me" defaultValue={data.checkMeSwitch} required inline onChange={handleCheckboxChange}/>
                                            <Form.Label>Check me</Form.Label>
                                        </div>
                                    </Form.Group> */}

                                    

                                    {/* <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="basic">Radios</Form.Label>
                                        <Radio.RadioGroup name="basic" required valueSelected={data.basic} inline={false} onChange={handleCheckboxChange}>
                                            <Radio.RadioItem id="radio1" label="Option one is this and that—be sure to include why it's great" value="1"/>
                                            <Radio.RadioItem id="radio2" label="Option two can be something else and selecting it will deselect option one" value="2"/>
                                            <Radio.RadioItem id="radio3" label="Option three is disabled" value="3"/>
                                        </Radio.RadioGroup>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="custom">Custom Radios</Form.Label>
                                        <div className="custom-controls-stacked radio">
                                            <Radio.RadioGroup name="custom" required valueSelected={data.custom} inline={false} onChange={handleChange}>
                                                <Radio.RadioItem id="radio4" label="Option one is this and that—be sure to include why it's great" value="1"/>
                                                <Radio.RadioItem id="radio5" label="Option two can be something else and selecting it will deselect option one" value="2"/>
                                                <Radio.RadioItem id="radio6" label="Option three is disabled" value="3"/>
                                            </Radio.RadioGroup>
                                        </div>
                                    </Form.Group> */}

                                    {/* <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="chkBasic">Basic Checkbox</Form.Label>
                                        <Checkbox name="chkBasic" label="Check me out" id="chkBasic" value={data.chkBasic} required onChange={handleCheckboxChange}/>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="chkCustom">Custom Checkbox</Form.Label>
                                        <div className="checkbox">
                                            <Checkbox name="chkCustom" label="Check me" id="chkCustom" value={data.chkCustom} required onChange={handleCheckboxChange}/>
                                        </div>
                                    </Form.Group> */}

                                    <Form.Group as={Col} sm={12} className="mt-3">
                                        <Button type="submit">Submit</Button>
                                    </Form.Group>
                                </Form.Row>
                            </ValidationForm>
                            {/* <AnimatedModal animation="slideInDown" visible={data.showModal} onClose={() => setData({ ...data, showModal: false })}>
                                <Card>
                                    <Card.Header className="bg-c-purple">
                                        <Card.Title as="h5">User Information</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul>
                                            <li>
                                                <strong>Full Name:</strong> {data.firstName} {data.lastName}
                                            </li>
                                            <li>
                                                <strong>Email:</strong> {data.email}
                                            </li>
                                            <li>
                                                <strong>Password:</strong> Yes
                                            </li>
                                            <li>
                                                <strong>Phone:</strong> {data.phone}
                                            </li>
                                            <li>
                                                <strong>Website:</strong> {data.url}
                                            </li>
                                            <li>
                                                <strong>Gear:</strong> {data.gear}
                                            </li>
                                            <li>
                                                <strong>About:</strong> {data.description}
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <button onClick={() => setData({ ...data, showModal: false })} className="btn btn-theme2 md-close">
                                            Close Me!!
                                        </button>
                                    </Card.Footer>
                                </Card>
                            </AnimatedModal> */}
                        {/* </Card.Body> */}
                    </Card>
                </Col>
                
            </Row>
           
        </>);
};
export default SamplePage;
