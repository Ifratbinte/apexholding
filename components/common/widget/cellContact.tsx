import contactItem, { PhoneInterface } from "@/__mocks__/contacts";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile2 } from "react-icons/im";

function CellContact() {
  console.log({ contactItem });
  return (
    <>
      <div className="flex items-start text-gray-500 gap-3">
        <span className="w-5 h-5 text-xl mt-1"><ImMobile2/></span>
        <div className="space-y-2">
            {contactItem.map((item: PhoneInterface, i: number) => {
                return (
                    <div className="text-sm tracking-wide" key={i}>{item.phone}</div>
                );
            })}
        </div>
      </div>
    </>
  );
}
export default CellContact;
