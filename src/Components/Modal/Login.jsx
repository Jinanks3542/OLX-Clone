import { Carousel, Modal, ModalBody } from "flowbite-react";
import mobile from '../../assets/mobile.svg'
import guitar from '../../assets/guita.png'
import love from '../../assets/love.png'
import avatar from '../../assets/avatar.png'
import close from '../../assets/close.svg'
import google from '../../assets/google.png'
import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "../Firebase/Firebase";

const Login = ({ toggleModal, status }) => {
  const handleClick = async()=>{
    try {
      const result = await signInWithPopup(auth,provider);
      toggleModal(); 
      console.log('User', result.user);
      

    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <Modal
      show={status}
      onClick={toggleModal}
      size="md"
      position="center"
      popup
      className="z-50"
      theme={{
        content: {
          base: "relative w-full max-w-md p-0 md:h-auto",
          inner:
            "relative flex flex-col rounded-lg bg-white shadow dark:bg-gray-700",
        },
      }}
    >
      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-t-lg relative"
      >
        {/* Close button */}
        <img
          onClick={toggleModal}
          src={close}
          alt="close"
          className="w-6 absolute top-4 right-4 z-10 cursor-pointer"
        />

        {/* Carousel */}
        <Carousel
          slide={false}
          onClick={(e) => e.stopPropagation()}
          className="w-full h-56 rounded-t-lg"
          theme={{
            indicators: {
              active: {
                off: "bg-gray-300",
                on: "bg-teal-300",
              },
              base: "h-2 w-2 rounded-full",
              wrapper:
                "absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3",
            },
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
              snap: "snap-x",
            },
            control: {
              base: "inline-flex items-center justify-center bg-transparent",
              icon: "w-8 text-black dark:text-black",
            },
          }}
        >
          {/* Slide 1 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <img className="w-20 pb-3" src={guitar} alt="Image 1" />
            <p className="text-xs sm:text-sm font-medium text-[#002f34] break-words">
              Help us become one of the safest places to buy and sell.
            </p>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <img className="w-20 pb-3" src={love} alt="Image 2" />
            <p className="text-xs sm:text-sm font-medium text-[#002f34] break-words">
              Close deals from the comfort of your home.
            </p>
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <img className="w-20 pb-3" src={avatar} alt="Image 3" />
            <p className="text-xs sm:text-sm font-medium text-[#002f34] break-words">
              Keep all your favorites in one place.
            </p>
          </div>
        </Carousel>
      </div>

      {/* Modal Body */}
      <ModalBody
        onClick={(e) => e.stopPropagation()}
        className="bg-white px-6 py-5 max-h-[70vh] overflow-y-auto rounded-b-lg"
      >
        <div className="space-y-5">
          {/* Continue with Phone */}
          <div className="flex items-center justify-start border-2 border-black p-3 rounded-md cursor-pointer">
            <img className="w-5 mr-2" src={mobile} alt="mobile" />
            <p className="text-sm font-bold">Continue with phone</p>
          </div>

          {/* Continue with Google */}
          <div className="relative flex items-center justify-center border border-gray-300 p-3 rounded-md cursor-pointer hover:bg-gray-100" onClick={handleClick}>
            <img src={google} alt="google" className="w-5 h-5 absolute left-3" />
            <p className="text-sm text-gray-700">Continue with Google</p>
          </div>

          {/* OR */}
          <div className="text-center">
            <p className="text-sm font-semibold">OR</p>
            <p className="text-sm font-bold pt-2 underline underline-offset-4">
              Login with Email
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center text-[10px] text-gray-600 space-y-2">
            <p>All your personal details are safe with us.</p>
            <p>
              If you continue, you are accepting{" "}
              <span className="text-blue-600">
                OLX terms and conditions and privacy policy
              </span>.
            </p>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default Login;
