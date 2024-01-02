import styles from "../style"
import { logo } from "../../assets"
import { footerLinks, socialMedia } from "../../constants"
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`} >
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`} >
      <div className={`flex-1 flex flex-col justify-start mb-10`}>
        <img className='w-[266px] h-[72px] object-contain' src={logo} alt="logo" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((flink) => (
          <div key={flink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]" >

            <h4 className="font-poppins font-bold text-[20px] leading-7 text-white">
              {flink.title}
            </h4>
            <ul className="list-none mt-4">
              {flink.links.map((link, index) => (
                <li className={`font-poppins font-normal text-[16px] leading-6 text-dimWhite hover:text-secondary cursor-pointer ${index !== flink.links.length - 1 ? "mb-4" : "mb-0"} `} key={link.name}>
                  {link.name}


                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]" >
      <p className="font-poppins  font-normal text-center  text-[20px] leading-7 text-white">2021 Hoobank. All Right Reserved. </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social,index)=>(
          <img src={social.icon} alt={social.id} key={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!== socialMedia.length-1?"mr-6":"mr-0"}`} />
        ))}

      </div>

    </div>
  </section>

)

export default Footer