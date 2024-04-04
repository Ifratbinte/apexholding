import email, { EmailInterface } from "@/__mocks__/email";
function Email() {
  return (
    <>
      <div className="email">
        {email.map((item: EmailInterface, i: number) => {
          return (
            <div key={i} className="flex items-center text-gray-500 gap-2">
              <span>{item.email ? <item.Icon className="w-5 h-5 me-2" /> : null}</span>
              <span className="text-sm tracking-wide"> {item.email}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Email;
