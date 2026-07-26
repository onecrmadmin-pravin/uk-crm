// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";

// const prisma = new PrismaClient();

// async function main() {
//   console.log("🌱 Seeding started...");

//   /**
//    * 🔐 Create Admin User
//    */
//   const hashedPassword = await bcrypt.hash("admin123", 10);

//   await prisma.user.upsert({
//     where: { email: "pt322947@gmail.com" },
//     update: {
//       role:"ADMIN",
//       isVerified:true,
//     },
//     create: {
//       email: "pt322947@gmail.com",
//       password: hashedPassword,
//       role: "ADMIN",
//       isVerified: true,
//     },
//   });

//   /**
//    * 🧱 Create Default Stages
//    */
//   const stages = [
//   //   { name: "New", order: 1 },
//   //   { name: "Contacted", order: 2 },
//   //   { name: "Proposal", order: 3 },
//   //   { name: "Negotiation", order: 4 },
//   //   { name: "Closed Won", order: 5 },
//   //   { name: "Closed Lost", order: 6 },
//   // ];
//     { name: "Pre-Lead", order: 1 },
//     { name: "Lead Generated", order: 2 },
//     { name: "Rejected Lead", order: 3 },
//     { name: "Pre-Warm Prospect", order: 4 },
//     { name: "Warm Prospect", order: 5 },
//     { name: "Meeting Completed", order: 6 },
//     { name: "Enquiry Received", order: 7 },
//     { name: "Hot Opportunity", order: 8 },

//     { name: "Enquiry Processing", order: 9 },
//     { name: "Quotation Sent", order: 10 },
//     { name: "Purchase Order Received", order: 11 },
//     { name: "Dispatch In Progress", order: 12 },
//     { name: "Challan Generated", order: 13 },
//     { name: "Invoice Generated", order: 14 },
//     { name: "Delivery Completed", order: 15 },
//     { name: "MTC Shared", order: 16 },
//     { name: "Order Successfully Closed", order: 17 },
//   ];
//   for (const stage of stages) {
//     await prisma.stage.upsert({
//       where: { order: stage.order },
//       update: {},
//       create: stage,
//     });
//   }

//   /**
//    * 🏢 Sample Companies
//    */
//   const companies = [
//     "Acme Corp",
//     "Tech Solutions",
//     "Global Industries",
//   ];

//   for (const name of companies) {
//     await prisma.company.upsert({
//       where: { name },
//       update: {},
//       create: { name },
//     });
//   }

//   console.log("✅ Seeding completed successfully");
// }

// main()
//   .catch((err) => {
//     console.error("❌ Seeding failed:", err);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding started...");


  /**
   * 🔐 Create Admin User
   */

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: {
      email: "pt322947@gmail.com",
    },
    update: {
      role: "ADMIN",
      isVerified: true,
    },
    create: {
      email: "pt322947@gmail.com",
      password: hashedPassword,
      role: "ADMIN",
      isVerified: true,
    },
  });



  /**
   * 🧱 Create CRM Stages
   */

  const stages = [

    { name: "Pre-Lead", order: 1 },
    { name: "Lead Generated", order: 2 },
    { name: "Rejected Lead", order: 3 },
    { name: "Pre-Warm Prospect", order: 4 },
    { name: "Warm Prospect", order: 5 },
    { name: "Meeting Completed", order: 6 },
    { name: "Enquiry Received", order: 7 },
    { name: "Hot Opportunity", order: 8 },

    { name: "Enquiry Processing", order: 9 },
    { name: "Quotation Sent", order: 10 },
    { name: "Purchase Order Received", order: 11 },
    { name: "Dispatch In Progress", order: 12 },
    { name: "Challan Generated", order: 13 },
    { name: "Invoice Generated", order: 14 },
    { name: "Delivery Completed", order: 15 },
    { name: "MTC Shared", order: 16 },
    { name: "Order Successfully Closed", order: 17 },

  ];


  for (const stage of stages) {

    await prisma.stage.upsert({

      where:{
        order:stage.order
      },

      update:{},

      create:stage

    });

  }



  /**
   * 🏢 Companies
   */

  const companies = [

    "Tata Steel",
    "JSW Steel",
    "Mahindra & Mahindra",
    "Larsen & Toubro",
    "Godrej Aerospace",
    "Reliance Industries",
    "AMNS India",
    "Jindal Steel",
    "Kirloskar",
    "BHEL"

  ];


  for(const name of companies){

    await prisma.company.upsert({

      where:{
        name
      },

      update:{},

      create:{
        name
      }

    });

  }




  /**
   * 📌 Create CRM Cards
   */


  const stageList = await prisma.stage.findMany();


  const getStage = (name)=>{

    const stage = stageList.find(
      s=>s.name===name
    );

    return stage.id;

  };



  const cards = [


    {
      title:"AMNS India - IS2062 Plate Requirement",
      description:
      "Customer requires 100 MT MS Plate. Grade IS2062. RFQ received from purchase department.",
      stage:"Enquiry Received"
    },


    {
      title:"JSW Steel - HR Coil Monthly Supply",
      description:
      "Monthly requirement 250 MT HR Coil. Commercial discussion completed.",
      stage:"Hot Opportunity"
    },


    {
      title:"Mahindra Chakan - Fabrication Material",
      description:
      "Automotive fabrication material requirement. Technical meeting completed.",
      stage:"Meeting Completed"
    },


    {
      title:"L&T Heavy Engineering - Structural Steel",
      description:
      "Quotation submitted. Waiting for purchase approval.",
      stage:"Quotation Sent"
    },


    {
      title:"Godrej Aerospace - Aluminium Sheet Supply",
      description:
      "PO received. Material arranging from supplier.",
      stage:"Purchase Order Received"
    },


    {
      title:"Reliance Industries - Stainless Steel Supply",
      description:
      "Order delivered. Invoice completed. Payment received.",
      stage:"Order Successfully Closed"
    },


    {
      title:"BHEL Vendor Lead",
      description:
      "New lead generated from industrial visit.",
      stage:"Lead Generated"
    },


    {
      title:"MIDC Ambernath Fabricator",
      description:
      "Small fabricator requirement identified during cold visit.",
      stage:"Pre-Warm Prospect"
    },


    {
      title:"Kirloskar Engineering",
      description:
      "Customer enquiry processing for alloy steel.",
      stage:"Enquiry Processing"
    },


    {
      title:"Small Trader Enquiry",
      description:
      "Customer rejected due to payment terms.",
      stage:"Rejected Lead",
      rejected:true
    }

  ];




  for(const item of cards){


    const card = await prisma.card.create({

      data:{

        title:item.title,

        description:item.description,


        stage:{
          connect:{
            id:getStage(item.stage)
          }
        },


        user:{
          connect:{
            id:admin.id
          }
        }

      }

    });



    /**
     * 💬 Comments
     */

    await prisma.comment.create({

      data:{

        text:

        item.stage==="Quotation Sent"

        ?

        "Quotation shared. Follow-up scheduled with customer."

        :

        "Customer discussion completed and updated.",


        cardId:card.id,

        userId:admin.id

      }

    });



    /**
     * ❌ Rejection
     */

    if(item.rejected){


      await prisma.rejectedCard.create({

        data:{

          reason:
          "Payment terms and credit limit not approved.",

          cardId:card.id,

          userId:admin.id

        }

      });


    }


  }



  console.log("✅ CRM Seed Data Created Successfully");

}



main()

.catch((error)=>{

  console.error(
    "❌ Seed Failed:",
    error
  );

  process.exit(1);

})

.finally(async()=>{

  await prisma.$disconnect();

});