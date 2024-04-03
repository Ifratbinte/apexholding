import Footer from "@/components/layout/Footer/page";
import Header from "@/components/layout/Header/page";
import AppHead from "@/containers/AppHead";

interface Props {
  children: JSX.Element | JSX.Element[];
}
const MasterLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppHead />
      <Header />
        <div>{children}</div>
      <Footer />
    </>
  );
};

export default MasterLayout;
