import {
  Col,
  InputGroup,
  OverlayTrigger,
  Row,
  Tooltip,
  Form,
} from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { TestHeaderInput } from "@/types/tests";

interface TestHeaderFormProps {
  isEditing?: boolean;
  isVersioning?: boolean;
  showErrors: boolean;
  testHeader: TestHeaderInput;
  setTestHeader: (value: TestHeaderInput) => void;
}

function TestHeaderForm(props: TestHeaderFormProps) {
  const { isEditing, isVersioning, testHeader, showErrors, setTestHeader } =
    props;
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <InputGroup className="mt-2">
          <InputGroup.Text id="label-test-tes">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>{t("page_tests.tip_tes")}</Tooltip>
              }
            >
              <span className="me-2 d-flex align-items-center">
                <FaInfoCircle />
              </span>
            </OverlayTrigger>
            <span>{t("fields.tes").toUpperCase()} (*):</span>
          </InputGroup.Text>
          <Form.Control
            aria-describedby="label-metric-mtr"
            id="input-test-tes"
            disabled={isEditing || isVersioning}
            onChange={(e) => {
              setTestHeader({
                ...testHeader,
                tes: e.target.value,
              });
            }}
            value={testHeader.tes}
          />
        </InputGroup>
        {showErrors && testHeader.tes === "" && (
          <span className="text-danger">{t("required")}</span>
        )}
        <InputGroup className="mt-2">
          <InputGroup.Text id="label-test-label">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>
                  {t("page_tests.tip_label")}
                </Tooltip>
              }
            >
              <span className="me-2 d-flex align-items-center">
                <FaInfoCircle />
              </span>
            </OverlayTrigger>
            <span>{t("fields.label")} (*):</span>
          </InputGroup.Text>
          <Form.Control
            id="input-test-label"
            aria-describedby="label-test-label"
            value={testHeader.label}
            onChange={(e) => {
              setTestHeader({
                ...testHeader,
                label: e.target.value,
              });
            }}
          />
        </InputGroup>
        {showErrors && testHeader.label === "" && (
          <span className="text-danger">{t("required")}</span>
        )}
      </Row>
      <Row className="mt-2">
        <Col>
          <div className="d-flex">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>
                  {t("page_tests.tip_test_description")}
                </Tooltip>
              }
            >
              <span className="ms-1 me-2 d-flex align-items-center">
                <FaInfoCircle />
              </span>
            </OverlayTrigger>
            <span>{t("fields.description")} (*):</span>
          </div>
          <Form.Control
            className="mt-1"
            as="textarea"
            rows={2}
            value={testHeader.description}
            onChange={(e) => {
              setTestHeader({
                ...testHeader,
                description: e.target.value,
              });
            }}
          />
          {showErrors && testHeader.description === "" && (
            <span className="text-danger">{t("required")}</span>
          )}
        </Col>
      </Row>
    </>
  );
}

export default TestHeaderForm;
