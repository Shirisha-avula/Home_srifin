import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import SRIFINFeature from "../../components/SRIFINFeature";
import image from "../../assets/images/logo.png.png";
import image1 from "../../assets/images/cover.png.jpeg";
import { NavLink } from "react-router-dom";
export default function SRIFINPage() {
  return (
    <>
      <Helmet>
        <title>Srifin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[69px] md:pb-5 bg-white-A700">
        <div className="flex flex-col items-end">
          <div className="h-[500px] w-[94%] relative">
          <div>
        <nav className="bg-white text-white">
            <div className="container mx-auto flex items-center justify-between py-4">
                <div className="flex items-center">
                    <NavLink to="/" className="flex items-center">
                        <img src={image} alt="Logo" className="h-8 mr-2" />
                        <span className="text-lg color-[#005e8d] font-bold">SRIFIN</span>
                    </NavLink>
                </div>
                <div className="flex-grow"></div> {/* This will take up all the available space */}
                <div className="flex flex-row justify-center w-[800px]">
                <ul className="flex items-center justify-center gap-[70px] space-x-4">
                    <li>
                        <NavLink to="/" className="text-[#005E8D] hover:text-gray-300"><b>Home</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-gray-300">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className="hover:text-gray-300">Services Provided</NavLink>
                    </li>
                </ul>    
                </div>
                <NavLink to="/contact" className="mr-5 text-center bg-sky-900 hover:bg-white rounded-md p-3 w-[126px] h-[36] transition duration-300" style={{color: 'white'}}>Contact Us</NavLink>
                
            </div>
        </nav>
        <div className=" flex flex-row justify-between w-[98%]">
        <div className="mt-[100px] flex flex-col flex-center ">
              <div  className=" flex flex-col md:flex-col justify-center items-start">
              <Heading size="" as="h1" className=" text-[63px] w-[470px]  mb-[20px] mr-[90px] !text-black-900 z-[1]">
                <>
                  <b>Chase Your Dream with us</b>
                </>
              </Heading>
              <div  className="flex flex-col w-full gap-5   md:p-5 w-[361px]">
              <div className="flex flex-col w-[380px]   ">
                <Text size="md" as="p">
                The harder you work for something, the greater you’ll feel when you achieve it.
              </Text>
              </div>
              <div className="flex flex-row gap-[40px]">
              <Button size="sm" shape="round" className="sm:px-5 tracking-[2.00px] uppercase font-bold min-w-[157px]">
                  Login
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  shape="round"
                  className="sm:px-5 tracking-[2.00px] uppercase font-bold min-w-[184px]"
                >
                  Register
                </Button>
                </div>
              </div>
              </div>
        </div>
        <div>
        <Img
                src={image1}
                className="pt-20 pl-20 w-[50%] md:w-full w-[670px]  h-[450px]  ml-[-39px] object-cover"
              />
        </div>
        </div>
        </div>               
            
            
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col items-center justify-center gap-[76px] px-14 py-[72px] md:p-5">
              <div className="flex flex-col items-center w-[62%] md:w-full mt-[25px] gap-[11px]">
                <Heading size="xl" as="h2" className="!text-blue_gray-900 text-center">
                  Creating Extraordinary Customer Experience
                </Heading>
                <Text size="md" as="p" className="w-[81%] md:w-full !text-gray-500 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu
                  pharetra consequat montes, sagittis.
                </Text>
              </div>
              <div className="w-full mx-auto md:p-5 max-w-[1230px]">
                <div className="justify-center gap-16 grid-cols-4 md:grid-cols-[1fr] grid">
                  <SRIFINFeature className="flex flex-col items-start w-full gap-[15px] p-6 sm:p-5 shadow-xs rounded-lg" />
                  <SRIFINFeature
                    technologyOne="images/img_bag.svg"
                    className="flex flex-col items-start w-full gap-[15px] p-6 sm:p-5 shadow-xs rounded-lg"
                  />
                  <SRIFINFeature
                    technologyOne="images/img_cube.svg"
                    className="flex flex-col items-start w-full gap-3.5 p-6 sm:p-5 shadow-xs rounded-lg"
                  />
                  <SRIFINFeature
                    technologyOne="images/img_user_arrows.svg"
                    className="flex flex-col items-start w-full gap-3 p-6 sm:p-5 shadow-xs rounded-lg"
                  />
                  <SRIFINFeature
                    technologyOne="images/img_circle_layer.svg"
                    className="flex flex-col items-start w-full gap-[11px] p-6 sm:p-5 shadow-xs rounded-lg"
                  />
                  <SRIFINFeature
                    technologyOne="images/img_circle_layer.svg"
                    className="flex flex-col items-start w-full gap-3.5 p-6 sm:p-5 shadow-xs rounded-lg"
                  />
                  <SRIFINFeature
                    technologyOne="images/img_scenery.svg"
                    className="flex flex-col items-start w-full gap-3 p-6 sm:p-5 shadow-xs rounded-lg"
                  />
                  <SRIFINFeature
                    technologyOne="images/img_object_ungroup.svg"
                    className="flex flex-col items-start w-full gap-3.5 p-6 sm:p-5 shadow-xs rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[89px] px-14 py-[76px] md:p-5 bg-green-50_7f">
              <Text size="xl" as="p" className="!text-blue_gray-900 tracking-[2.10px]">
                BUSINESS PARTNERS
              </Text>
              <Img
                src="images/img_frame_16.svg"
                alt="image"
                className="h-[110px] w-full mb-[73px] mx-auto md:p-5 max-w-[1170px]"
              />
            </div>
            <div>
              <div className="ml-5 flex md:flex-col justify-center items-center pr-[152px] gap-5 md:pr-5 bg-white-A700">
                <div className="flex  justify-center  w-[52%] md:w-full">
                  <Img src="images/img_image.png" alt="image_two" className="p-5 h-[510px] w-full object-cover" />
                </div>
                <div className="flex self-end justify-center w-[39%] md:w-full pb-[67px] md:pb-5">
                  <div className="flex flex-col p-5 mt-20 h-[510px]  gap-[5px]">
                    <Heading size="xl" as="h3" className=" ml-40   w-[600px] !text-blue_gray-900">
                      SRIFIN AT A GLANCE
                    </Heading>
                    <Text size="md" as="p" className="ml-40  w-[600px] !font-normal !leading-[29px]">
                      SRIFIN Finance Limited (previously known as &quot;Industrial Promotion and Development Company of
                      Bangladesh Limited&quot;) is the first private sector financial institution of the country
                      established in 1981 by a distinguished group of shareholders namely International Finance
                      Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan
                      Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK
                      and the Government of Bangladesh
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-14 py-[85px] md:p-5 bg-green-50_99">
              <Heading size="2xl" as="h4" className="mt-3.5 !text-blue_gray-900 text-center">
                Our Services
              </Heading>
              <Text size="md" as="p" className="mt-4 !text-gray-500 text-center !font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor
                eleifend.
              </Text>
              <div className="w-full mt-[117px] mb-[135px] mx-auto md:p-5 max-w-[1270px]">
                <div className="flex md:flex-col gap-[70px]">
                  <div className="flex flex-col items-center w-full mt-6 gap-[23px]">
                    <Img
                      src="images/img_image_229x265.png"
                      alt="fintech"
                      className="self-stretch h-[229px] w-full object-cover rounded-[9px]"
                    />
                    <Text size="lg" as="p" className="!text-gray-800 tracking-[1.00px] uppercase text-center">
                      fintech services
                    </Text>
                  </div>
                  <div className="flex flex-col items-center w-full mt-[23px] gap-[23px]">
                    <Img
                      src="images/img_man_hand_hold_wallet.png"
                      alt="manhandhold_one"
                      className="self-stretch h-[230px] w-full object-cover"
                    />
                    <Text size="lg" as="p" className="!text-gray-800 tracking-[1.00px] uppercase text-center">
                      Digital lending
                    </Text>
                  </div>
                  <div className="flex flex-col items-center w-full mt-[23px] gap-[23px]">
                    <Img
                      src="images/img_businesspeople_working.png"
                      alt="businesspeople"
                      className="self-stretch h-[230px] w-full object-cover"
                    />
                    <Text size="lg" as="p" className="!text-gray-800 tracking-[1.00px] uppercase text-center">
                      Digital trading
                    </Text>
                  </div>
                  <div className="flex flex-col w-full gap-[22px]">
                    <Img src="images/img_image_1x265.png" alt="image_one" className="h-px object-cover rounded-[1px]" />
                    <div className="flex flex-col items-center gap-[23px]">
                      <Img
                        src="images/img_working_process.png"
                        alt="workingprocess"
                        className="self-stretch h-[230px] w-full object-cover"
                      />
                      <Text size="lg" as="p" className="!text-gray-800 tracking-[1.00px] uppercase text-center">
                        Digital trading
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between w-full mt-[62px] gap-5 mx-auto md:p-5 max-w-[914px]">
              <div className="flex flex-col w-[20%] md:w-full gap-[21px] py-0.5">
                <Heading as="h5" className="!text-black-900">
                  About the company
                </Heading>
                <Text as="p" className="mb-[37px] !leading-[22px]">
                  Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch{" "}
                </Text>
              </div>
              <div className="flex md:flex-row sm:flex-col w-[70%] md:w-full gap-[97px]">
                <div className="flex flex-col items-start justify-center">
                  <Heading as="h6">Products</Heading>
                  <a href="#" className="mt-[26px]">
                    <Text as="p">CSR Activities</Text>
                  </a>
                  <a href="#" className="mt-[19px]">
                    <Text as="p">Green Banking</Text>
                  </a>
                  <a href="#" className="mt-[17px]">
                    <Text as="p">News</Text>
                  </a>
                  <a href="#" className="mt-[18px]">
                    <Text as="p">Ongoing Campgain</Text>
                  </a>
                  <a href="#" className="mt-[18px] mb-0.5">
                    <Text as="p">Updates</Text>
                  </a>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <Heading as="h6">Get Started</Heading>
                  <a href="#" className="mt-[26px]">
                    <Text as="p">Career</Text>
                  </a>
                  <a href="#" className="mt-[18px]">
                    <Text as="p">Contact Us</Text>
                  </a>
                  <a href="#" className="mt-[17px]">
                    <Text as="p">Government Securities</Text>
                  </a>
                  <a href="#" className="mt-[19px]">
                    <Text as="p">Examples</Text>
                  </a>
                  <a href="#" className="mt-4 mb-1">
                    <Text as="p">NIS</Text>
                  </a>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <Heading as="h6">About</Heading>
                  <a href="#" className="mt-[26px]">
                    <Text as="p">IPDC at a Glance</Text>
                  </a>
                  <a href="#" className="mt-[18px]">
                    <Text as="p">Mission, VIsion & Values</Text>
                  </a>
                  <a href="#" className="mt-[18px]">
                    <Text as="p">Corporate Governanace</Text>
                  </a>
                  <a href="#" className="mt-4">
                    <Text as="p">Shareholders</Text>
                  </a>
                  <a href="#" className="mt-[17px] mb-1">
                    <Text as="p">Investor Relations</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
