import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from '../../App/components/MainCard';
const SamplePage = () => {
    return (<>
            <Row>
                <Col>
                    <Card title="Remove POS" isOption>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum."
                        </p>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default SamplePage;