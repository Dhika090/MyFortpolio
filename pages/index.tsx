
import ServiceCard from "../Components/ServiceCard"
import { services } from "../data"

const index = () => {
  return(
    <div className="flex flex-col flex-grow px-6 pt-1">
      
      <h5 className="my-3 font-medium">Hello, My name is Andika Bagus Pambudi. And I am a developer from Jakarta, Indonesia. I am a student from Muhammadiyah University Prof. Dr. Hamka, East Jakarta in July 2021. I am an Active Student and a year of studying hard at university, I end up learning more new things every day by myself
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
          <h6 className="my-3 text-xl font-bold tracking-wide">What i Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(service =>(
            <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1" 
            key={service.title}>
              
            <ServiceCard service={service} />
            </div>
          ))}
       </div>
      </div>
    </div>
  )
}

export default index

  // export const getServerSideProps = async (context:GetServerSidePropsContext) => {
  //   //calculation

  //   const res  = await fetch('http://localhost:3000/api/services')
  //   const data = await res.json()

  //   console.log("SERVER",services)
  //   return {
  //     props:{
  //       services:data.services,
  //     }
      
  //   }
  // }
  
//   export const  getStaticProps = async (context:GetStaticPropsContext) => {
//   //calculation

//   const res  = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log("SERVER",services)
  
//   return {
//     props:{
//       services: data.services,
//     },    
//   }
// }