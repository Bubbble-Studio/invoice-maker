/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Image,
  Select,
  Textarea,
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./detailSection.module.scss";
import { AttachmentIcon, MinusIcon } from "@chakra-ui/icons";
import { useInvoiceContext } from "@/utils/contexts/InvoiceContext";
import SectionDivider from "../SectionDivider/SectionDivider";
import { UploadStream } from "cloudinary";
import UploadLogo from "../../../../public/assets/UploadLogo";

const DetailsSection = () => {
  const { details, setDetails } = useInvoiceContext();

  const {
    type,
    invoiceNumber,
    invoiceDate,
    dueDate,
    logo,
    billedBy,
    billedTo,
  } = details;

  const handleTypeChange = (event: any) => {
    setDetails({ ...details, type: event.target.value });
  };

  const handleInvoiceNumberChange = (event: any) => {
    setDetails({ ...details, invoiceNumber: event.target.value });
  };

  const handleInvoiceDateChange = (event: any) => {
    setDetails({ ...details, invoiceDate: event.target.value });
  };

  const handleDueDateChange = (event: any) => {
    setDetails({ ...details, dueDate: event.target.value });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setDetails({
        ...details,
        logo: reader.result as string,
      });
    };
  };

  const handleReplaceClick = () => {
    setDetails({
      ...details,
      logo: null,
    });
  };

  const handleBilledByInputChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      billedBy: {
        ...details.billedBy,
        [name]: value,
      },
    });
  };

  const handleBilledToInputChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      billedTo: {
        ...details.billedTo,
        [name]: value,
      },
    });
  };

  return (
    <Box width={"100%"} margin={"0 auto"}>
      <SectionDivider heading="Enter you company information" stepNumber={1} />

      <div className={styles.companyDetails}>
        <div className={styles.inputBoxes}>
          <div className={styles.inputBox}>
            <span className={styles.inputText}>Type:</span>
            <Select w={"225px"}>
              <option value="option1 size='xs'">Invoice</option>
              <option value="option2 size='sm'">Quote</option>
              <option value="option3 size='sm'">Estimate</option>
            </Select>
          </div>

          <div className={styles.inputBox}>
            <span className={styles.inputText}>Invoice No.</span>
            <Input
              type="number"
              placeholder="invoice number"
              fontSize={"sm"}
              w={"225px"}
              onChange={handleInvoiceNumberChange}
              value={invoiceNumber}
            />
          </div>

          <div className={styles.inputBox}>
            <span className={styles.inputText}>Invoice Date</span>
            <Input
              type="date"
              placeholder="Select Date"
              fontSize={"sm"}
              w={"225px"}
              onChange={handleInvoiceDateChange}
              value={invoiceDate}
            />
          </div>

          <div className={styles.inputBox}>
            <span className={styles.inputText}>Due Date</span>
            <Input
              type="date"
              placeholder="Select Date"
              fontSize={"sm"}
              w={"225px"}
              onChange={handleDueDateChange}
              value={dueDate}
            />
          </div>
        </div>
        <div className={styles.logoInput}>
          <span>Upload Logo</span>
          {logo ? (
            <Box borderColor="gray.200">
              <Box maxW={"198"} mx="auto">
                <Image src={logo} alt="logo" />
              </Box>
              <Button mt={1} onClick={handleReplaceClick} color="red.500">
                <MinusIcon mr={"0.5rem"} />
                Replace Logo
              </Button>
            </Box>
          ) : (
            <Button
              variant="outline"
              marginTop={"0.5rem"}
              width={"100%"}
              minWidth={"fit-content"}
              height={"100%"}
              bgColor={"whiteAlpha.600"}
              border={"2px dashed"}
              borderColor={"gray.300"}
              boxShadow={"sm"}
              _hover={{ bg: "gray.100" }}
              padding={"0.5rem"}
              colorScheme="gray"
              onClick={onOpen}
            >
              <div className={styles.logoContent}>
                <UploadLogo width={40} height={40} />
                <h4>
                  <span className={styles.clickToUpload}>Click to upload</span>
                  <span> or drag and drop</span>
                </h4>

                <p>Maximum file size 5MB</p>
                <p>jpg, jpeg, png, svg</p>
              </div>
            </Button>
          )}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Upload Logo</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <input type="file" onChange={handleImageUpload} />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <SectionDivider
        heading="Enter Customer and Invoice information"
        stepNumber={2}
      />
      {/* Billed By */}

      <div className={styles.infoContainer}>
        <div className={styles.billed}>
          <h2>BILLED BY</h2>
          <div className={styles.infoInputBoxes}>
            <div className={styles.infoInputBox}>
              <span className={styles.inputText}>Business Name</span>
              <Input
                type="text"
                placeholder="Business Name"
                fontSize={"sm"}
                w={"100%"}
                onChange={handleBilledByInputChange}
                value={billedBy.businessName}
              />
            </div>
            <div className={styles.infoInputBox}>
              <span className={styles.inputText}>Address</span>
              <Textarea
                placeholder="Address"
                fontSize={"sm"}
                w={"100%"}
                onChange={handleBilledByInputChange}
                value={billedBy.address}
              />
            </div>
            <div className={styles.infoTaxInputBox}>
              <span className={styles.inputText}>Tax Details</span>
              <div className={styles.taxInputs}>
                <Input
                  type="text"
                  placeholder="GST IN"
                  fontSize={"sm"}
                  w={"100%"}
                  onChange={handleBilledByInputChange}
                  value={billedBy.gstIn}
                />
                <Input
                  type="text"
                  placeholder="TAN (optional)"
                  fontSize={"sm"}
                  w={"100%"}
                  onChange={handleBilledByInputChange}
                  value={billedBy.tan}
                />
              </div>
            </div>

            <div className={styles.infoInputBox}>
              <span className={styles.inputText}>Email</span>
              <Input
                type="email"
                placeholder="Email"
                fontSize={"sm"}
                w={"100%"}
                onChange={handleBilledByInputChange}
                value={billedBy.email}
              />
            </div>
            <div className={styles.infoInputBox}>
              <span className={styles.inputText}>Phone No.</span>
              <Input
                type="phone"
                placeholder="Phone No."
                fontSize={"sm"}
                w={"100%"}
                onChange={handleBilledByInputChange}
                value={billedBy.phone}
              />
            </div>
            <div />
          </div>
        </div>
        <div className={styles.billed}>
          <h2>BILLED TO</h2>
          <div className={styles.infoInputBoxes}>
            <div className={styles.infoInputBox}>
              <span className={styles.inputText}>Business Name</span>
              <Input
                type="text"
                placeholder="Business Name"
                fontSize={"sm"}
                w={"100%"}
                onChange={handleBilledToInputChange}
                value={billedBy.businessName}
              />
            </div>
            <div className={styles.infoInputBox}>
              <span className={styles.inputText}>Address</span>
              <Textarea
                placeholder="Address"
                fontSize={"sm"}
                w={"100%"}
                onChange={handleBilledToInputChange}
                value={billedBy.address}
              />
            </div>
            <div className={styles.infoTaxInputBox}>
              <span className={styles.inputText}>Tax Details</span>
              <div className={styles.taxInputs}>
                <Input
                  type="text"
                  placeholder="GST IN"
                  fontSize={"sm"}
                  w={"100%"}
                  onChange={handleBilledByInputChange}
                  value={billedBy.gstIn}
                />
                <Input
                  type="text"
                  placeholder="TAN (optional)"
                  fontSize={"sm"}
                  w={"100%"}
                  onChange={handleBilledByInputChange}
                  value={billedBy.tan}
                />
              </div>
            </div>

            <div className={styles.infoInputBox}>
              <span className={styles.inputText}>Email</span>
              <Input
                type="email"
                placeholder="Email"
                fontSize={"sm"}
                w={"100%"}
                onChange={handleBilledToInputChange}
                value={billedBy.email}
              />
            </div>
            <div className={styles.infoInputBox}>
              <span className={styles.inputText}>Phone No.</span>
              <Input
                type="phone"
                placeholder="Phone No."
                fontSize={"sm"}
                w={"100%"}
                onChange={handleBilledToInputChange}
                value={billedBy.phone}
              />
            </div>
            <div />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default DetailsSection;
