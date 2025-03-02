import Image from "next/image"

// const Features = () => {
//     return (
//         <section>
//             <div>
//                 {/* <span className="relative w-3xs h-2">
//                 <Image fill src="/assets/images/code-icon.webp" alt="icon representing coding"/>
//                 </span> */}
//                 <h2>Ask any questions</h2>
//             </div>
//         </section>
//     )
// }


const TBD = ({src, altText, heading, description}) => (
    <>
    <div className="flex flex-col items-center justify-center gap-5 pb-16">
    <div className="flex flex-row items-center justify-center w-fit gap-2.5 md:gap-5 p-5 relative rounded-md bg-gradient-to-r from-white/10 to-white/10 bg-[length:18px_2px,18px_2px,2px_18px,2px_18px] bg-[position:0_0,0_100%,0_0,100%_0] bg-no-repeat bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_50%,transparent_50%),linear-gradient(90deg,rgba(255,255,255,0.1)_50%,transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.1)_50%,transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.1)_50%,transparent_50%)]">
      <Image
        src="/assets/images/code-icon.webp" 
        alt= "code icon"
        width={20} 
        height={20} 
        className="w-5 h-5"
      />
      <h2 className="font-['Roboto_Mono',_monospace] font-extralight">{heading}</h2>
    </div>
    
    <div className="demo-ss-subheader">
      <h3 className="text-lg font-semibold text-white/80 text-center">
        {description}
      </h3>
    </div>
    
    <div className="flex items-center justify-center w-full">
      <Image 
        src={src}
        alt={altText}
        width={1200} 
        height={800} 
        className="w-[calc(100%-4rem)]"
      />
    </div>
  </div>
  </>
)

const features_descriptions = [
    {
        src: "/assets/images/chat-demo-ss.png",
        altText: "preview",
        heading: "Ask any question",
        description: "Camel uses your live data.<br />Get tables and charts instantly."
    },
    {
        src: "/assets/images/dashboard-demo-ss.png",
        altText: "preview",
        heading: "Powerful Dashboards",
        description: "Save any graph to a live dashboard.<br>Start a chat to answer ad hoc questions."
    }
]

const Features = () => {
  return (
   <section>
    {features_descriptions.map((obj, index) => (
        <TBD 
        key={`features_section_${index}`}
        src={obj.src}
        altText={obj.altText}
        heading={obj.heading}
        description={obj.description}
        />
    ))}
   </section>
  );
};

export default Features