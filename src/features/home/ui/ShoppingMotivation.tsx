import Container from "@/components/ui/Container";
import Image from "next/image";


export default function ShoppingMotivation() {
  return (
    <Container  className="" >
      <div className=" mx-auto flex flex-cols gap-10 items-center justify-center px-5 py-10 border-2 border-secondary">
        <h2 className="font-bold text-2xl ">FREE SHIPPING</h2>
        <p className="">Free Delivery Now On Your First Order and over $200</p>
        <p className="font-bold">- Only $200*</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-100 mt-10">
        <div className="  w-full h-full relative">
            <Image src="/images/women.jpg" alt="" fill className="object-cover"/> 
        </div>
          <div className=" w-full h-full relative">
            <Image src="/images/women.jpg" alt="" fill className="object-cover"/> 
        </div> 
        <div className="  w-full h-full relative">
            <Image src="/images/women.jpg" alt="" fill className="object-cover"/> 
        </div>
          <div className=" w-full h-full relative">
            <Image src="/images/women.jpg" alt="" fill className="object-cover"/> 
        </div>  
      </div>
          
    </Container>
    
  );
}