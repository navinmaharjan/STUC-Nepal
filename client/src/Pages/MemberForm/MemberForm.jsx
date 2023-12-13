import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from "@chakra-ui/react";

const MemberForm = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-4 flex justify-center">
            <div className="flex gap-4">
              <h1 className="text-2xl text-white tracking-wider">
                STUC MEMBERSHIP FORM
              </h1>
              <h3 className="text-center text-2xl font-extralight text-white">
                (सदस्यता दर्ता विवरण)
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="container mx-auto py-14">
          <div className="mx-60 border p-10 rounded-lg shadow-xl bg-white">
            <FormControl isRequired className="pb-4">
              <FormLabel>Full name (पुरा नाम)</FormLabel>
              <Input placeholder="First name" />
            </FormControl>

            <FormControl isRequired className="pb-4">
              <FormLabel>Mobile Number (मोवाईल नं.)</FormLabel>
              <Input placeholder="Mobile Number" />
            </FormControl>

            <FormControl isRequired className="pb-4">
              <FormLabel>Gender (लिङ्ग)</FormLabel>
              <Select placeholder="छान्नुहोस्">
                <option>पुरुष</option>
                <option>महिला</option>
              </Select>
            </FormControl>

            <FormControl isRequired className="pb-4">
              <FormLabel>Date Of Birth (जन्म मिति)</FormLabel>
              <Input placeholder="Ex- 2041-04-05" />
            </FormControl>

            <FormControl isRequired className="pb-4">
              <FormLabel>Citizenship No.(नागरिकता नं. )</FormLabel>
              <Input placeholder="Citizenship Number" />
            </FormControl>

            <FormControl isRequired className="pb-4">
              <FormLabel>
                Citizenship Issued District (नागरिकता जारी जिल्ला)
              </FormLabel>
              <Input placeholder="Citizenship Issued District" />
            </FormControl>

            <div className="bg-offWhite py-2 mb-4 pl-2">
              <h3 className="text-xl font-medium">Address (ठेगाना) </h3>
            </div>

            <FormControl isRequired className="pb-4">
              <FormLabel>Province(प्रदेश)</FormLabel>
              <Select placeholder="छान्नुहोस्">
                <option>प्रदेश 1 </option>
                <option>मधेश</option>
                <option>बाग्मती</option>
                <option>गण्डकी</option>
                <option>लुम्बिनी</option>
                <option>कर्णाली</option>
                <option>सुदरपश्चिम</option>
              </Select>
            </FormControl>

            <FormControl isRequired className="pb-4">
              <FormLabel>District(जिल्ला)</FormLabel>
              <Input placeholder="District" />
            </FormControl>

            <FormControl isRequired className="pb-4">
              <FormLabel>Muncipality(गा.पा /न.पा.)</FormLabel>
              <Input placeholder="Muncipality" />
            </FormControl>

            <FormControl isRequired className="pb-4">
              <FormLabel>Ward(वडा न.)</FormLabel>
              <Input placeholder="Ward" />
            </FormControl>

            <div className="py-2 mb-4 pl-2">
              <FormControl isRequired className="pb-4">
                <FormLabel>Father's Name(बुवाको नाम)</FormLabel>
                <Input placeholder="Father's Name" />
              </FormControl>
            </div>

            <button className="bg-redbrand py-2 px-4 text-sm font-medium text-white mt-2 hover:opacity-80">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberForm;
