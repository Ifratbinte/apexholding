import phone, { PhoneInterface } from "@/__mocks__/phone";
function PhoneContact() {
  return (
    <>
      <div>
        {phone.map((item: PhoneInterface, i: number) => {
          return (
            <div key={i} className="flex items-center text-gray-500">
              <span>{item.Icon ? <item.Icon className="w-5 h-5 me-2" /> : null}</span>
              <span className="text-sm tracking-wide">{item.phone}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default PhoneContact;
