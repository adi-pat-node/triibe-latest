export type Founder = {
  id: number;
  name: string;
  org: string;
  bio: string;
  description?: string;
  image?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
};

const firstTen: Founder[] = [
  {
    id: 1,
    name: "Zoe Terry",
    org: "",
    bio: "Founder and CEO - Zoe's Dolls",
    description:
      "Co-founded Zoe's Dolls at age five, alongside her mother, after being bullied for the color of her skin and the texture of her hair, determined to help other Black and brown girls love their own image. The organization has collected and given away more than 50,000 dolls of color to girls across the United States and around the world, reaching communities from Haiti and Zambia to the Netherlands and London.\n\nHer empowerment-driven model pairs the signature doll giveaway with programs in self-expression, entrepreneurship, and fitness that build confidence and counter bullying. Zoe's Dolls has grown chapters across several states and internationally, and its founder is a Nickelodeon HALO Award recipient and a published children's book author.",
    image: "/images/triibe100/Zoe Terry.png",
    website: "https://zoesdolls.com/",
    linkedin: "https://www.linkedin.com/in/zoe-terry-01b14235b/",
  },
  {
    id: 2,
    name: "Varuni Chopra",
    org: "",
    bio: "Founder - Bridge The Gap",
    description:
      "Founded Bridge the Gap Initiative to equip seniors with digital skills and strengthen intergenerational connections. The organization has reached 2,000+ seniors internationally through free technology sessions.\n\nHer student-led model builds digital confidence, reduces isolation, and fosters meaningful connections between generations. Bridge the Gap has expanded across multiple states and countries and earned the 2023 Prudential Emerging Visionaries Societal Solution award.",
    image: "/images/triibe100/VaruniChopra.png",
    website: "https://bridgethegapinitiative.org/",
    linkedin: "https://www.linkedin.com/in/varuni-chopra1/",
  },
  {
    id: 3,
    name: "Trisha Prabhu",
    org: "",
    bio: "Founder and CEO - ReThink Citizens",
    description:
      "Founded ReThink at 13, after reading about a young girl who died by suicide following relentless cyberbullying, building a patented technology that stops online hate before the damage is done. Operating as a keyboard across apps, ReThink detects offensive messages and gives users a second chance to reconsider, a nudge that leads teens to change their minds the vast majority of the time.\n\nHer research-backed model has reached more than 5 million students and 1,500 schools across 134 countries, with the app downloaded over 500,000 times and available in several languages. ReThink has been featured on TED, Shark Tank, and at the White House, and earned her a place as the youngest honoree on the Forbes 30 Under 30 Social Impact list and selection as a Rhodes Scholar.",
    image: "/images/triibe100/Trisha Prabhu.png",
    website: "https://rethinkcitizens.org/",
    linkedin: "https://www.linkedin.com/in/trishaprabhu/",
  },
  {
    id: 4,
    name: "Shrusti Amula",
    org: "",
    bio: "Founder - Rise N Shine Foundation",
    description:
      "Founded Rise N Shine Foundation in 2019 at 13, after a STEM competition asked her to solve a local problem and she landed on food waste. The youth-led nonprofit runs composting and food recovery across Montgomery County Public Schools, Maryland's largest district, turning cafeteria scraps into compost and surplus food into meals, and pairing school programs with legislative advocacy.\n\nRise N Shine has diverted more than 222,000 pounds of waste from landfills and contributed over 350,000 meals, with food recovery now operating in more than 100 schools. It helped move Maryland's SB 124 through a 17,000-postcard campaign, and its founder is a L'Oréal Paris Women of Worth honoree recognized by Points of Light.",
    image: "/images/triibe100/Shrusti Amula.png",
    website: "https://www.risenshinefoundation.org/",
    linkedin: "https://www.linkedin.com/in/shrusti-amula/",
  },
  {
    id: 5,
    name: "Sharona Shnayder",
    org: "",
    bio: "Founder - Tuesdays for Trash",
    description:
      "Co-founded Tuesdays for Trash in May 2020, two friends picking up litter in Portland's Park Blocks during lockdown who decided on day one to do it every Tuesday and invite the world along. The grassroots movement asks people to clean their local area weekly and share it, turning scattered individual acts into something visibly collective.\n\nTuesdays for Trash has spread to six continents, bringing people in more than 50 countries together to remove over 57,000 pounds of litter. Its co-founder is a National Geographic Young Explorer, chairwoman of the Portland nonprofit OurstreetsPDX, and a Nigerian-Israeli voice for intersectional climate justice.",
    image: "/images/triibe100/Sharona Shnayder.png",
    website: "https://tuesdaysfortrash.com/",
    linkedin: "https://www.linkedin.com/in/sharona-s/",
  },
  {
    id: 6,
    name: "Sayed Zubaer Hasan",
    org: "",
    bio: "Founder and CEO - Krishi Shwapno",
    description:
      "Co-founded Krishi Shwapno in 2019 in Bangladesh, where more than three quarters of farmers are smallholders selling to middlemen at a fraction of fair value. The blockchain-powered agri-supply chain platform shortens the distance between farm and buyer through village collection hubs, logging every batch so consumers can see where food came from and farmers can prove what theirs is worth.\n\nKrishi Shwapno serves over 27,000 smallholder farmers, has lifted incomes by 10 to 15 percent, and has cut post-harvest losses to near zero. UNDP has profiled its youth-run collection points, and its founder was named to the Forbes 30 Under 30 Asia Social Impact list in 2025.",
    image: "/images/triibe100/Sayed-Zubaer-Hasan 2.png",
    website: "https://krishishwapno.com/",
    linkedin: "https://www.linkedin.com/in/sayed-zubaer-hasan/",
  },
  {
    id: 7,
    name: "Samin Bhan",
    org: "",
    bio: "Founder - Lookupp",
    description:
      "Co-founded Lookupp in high school with his brother, sparked by watching friends who once talked over Sunday breakfast fall silent behind their phones. The youth-led nonprofit and mobile app rewards people for putting their screens down and being present, tackling loneliness by making real-world connection the goal.\n\nHis community-powered model helps schools and campuses create phone-free 'Lookupp Zones' where face-to-face time is celebrated rather than screen time. Lookupp won a Congressional App Challenge, drew hundreds of sign-ups within days of launching, and earned him recognition as a 2024 Cameron Impact Scholar and a place in the Young Futures innovator community.",
    image: "/images/triibe100/SaminBhan.jpg",
    website: "https://www.lookupp.net/",
    linkedin: "https://www.linkedin.com/in/samin-bhan/",
  },
  {
    id: 8,
    name: "Rimza Razaque",
    org: "",
    bio: "Founder - Al Arzen",
    description:
      "Co-founded Al Arzen with three friends to build a youth-led community for social impact in Karachi. What began as an idea to give back has grown into a network of more than 100 volunteers working across food security, women’s economic empowerment, community service, and youth engagement.\n\nIn its first year, Al Arzen served more than 400 people through its Arz-e-Khair iftar drive, raised PKR 20,000 through Project Hunar while supporting underprivileged women, and organized initiatives spanning beach cleanups, orphanage visits, and elderly care. Rimza later helped launch Project Uraan, which combined menstrual-health education with a sanitary-pad dispenser at an orphanage, and recently planned, directed, and hosted Arz-e-Noor, a fundraiser mushaira featuring established Pakistani artists.",
    image: "/images/triibe100/Rimza Razaque.png",
    website: "https://www.linkedin.com/company/al-arzen/",
    linkedin: "https://www.linkedin.com/in/rimza-razaque-1bb851316/",
  },
  {
    id: 9,
    name: "Rachel Parent",
    org: "",
    bio: "Founder - Kids Right to Know",
    image: "/images/triibe100/Rachel Parent.png",
    description:
      "Founded Kids Right to Know in 2012 at 12, after a school research project on genetically modified food left her alarmed that Canada required no labeling at all. The Toronto-based nonprofit campaigns for mandatory GMO labeling and pairs public advocacy with youth education on food production, regenerative agriculture, and climate.\n\nShe went viral at 14 debating Kevin O'Leary on CBC, a clip that drew millions of views, then won a meeting with Canada's Minister of Health after a year of campaigning. She has moderated a panel between Jane Goodall and Robert Bateman and carried the work to TEDx, COP28, and SXSW.",
    website: "https://www.kidsrighttoknow.com/",
    linkedin: "https://www.linkedin.com/in/rachel-parent-1633a415b/",
  },
  {
    id: 10,
    name: "Olivia Zhang",
    org: "",
    bio: "Founder - Cancer Kids First",
    description:
      "Founded Cancer Kids First at 14 to support pediatric cancer patients by normalizing the hospital experience and building a community of hope for children and families. The nonprofit has grown into the world’s largest youth-led force against childhood cancer, uniting 40,000+ volunteers across 80 countries and donating over $600,000 in supplies to 72 hospitals, reaching 10,000+ patients in 22 countries.\n\nHer volunteer-driven model combines direct patient support with storytelling that has reached millions, turning young people into a global network of care. Cancer Kids First has expanded across six continents and earned a place on the Forbes 30 Under 30 Social Impact list, along with The Diana Award and recognition from L’Oréal Paris.",
    image: "/images/triibe100/Olivia Zhang.png",
    website: "https://www.cancerkidsfirst.org/",
    linkedin: "https://www.linkedin.com/in/olivia-zhang-a792b8229/",
  },
];

const restOverrides: Partial<Founder>[] = [
  {
    name: "Nils Rauscher",
    org: "",
    bio: "Co-Founder - Zukunftsforum Baden-Baden",
    description:
      "Co-founded Liberating Education Organization in 2023 in Germany to bring high-quality university education to young people in remote and underserved regions. The youth-led nonprofit builds community-based hybrid learning centers that pair world-class digital coursework with local support.\n\nIts model fuses digital learning from leading universities, on-site facilitation, AI-driven personalization, and entrepreneurship training, powered by solar energy and satellite internet. The organization opened its first center in the Maasai region of Kenya and is building a network of centers across several countries, in partnership with universities including William & Mary.",
    image: "/images/triibe100/Nils Rauscher.png",
    website: "https://zkfbb.de/",
    linkedin: "https://www.linkedin.com/in/nils-rauscher/",
  },
  {
    name: "Nayla Jimenez",
    org: "",
    bio: "Executive Director - Philippine Health Initiative",
    description:
      "Founded the Philippine Health Initiative at age 12, inspired by a family tradition of shipping Balikbayan boxes of goods 'home' to Cebu, Philippines. The student-run nonprofit connects underserved pediatric medical and educational facilities in the Philippines with material and financial resources in the United States.\n\nThe grassroots model links youth volunteers in Orlando, Florida with communities in Cebu, channeling donations and support to pediatric patients and underserved families. What started in middle school has grown into a registered nonprofit led by an executive board of undergraduate students, bridging two communities across an ocean.",
    image: "/images/triibe100/NaylaJimenez.jpg",
    website: "https://www.philippinehealthinitiative.org/",
    linkedin: "https://www.linkedin.com/in/naylajimenez/",
  },
  {
    name: "Mirus Ponon",
    org: "",
    bio: "Founder - ASEAN Youth Advocates Network",
    description:
      "Founded the ASEAN Youth Advocates Network in 2020, inspired by the poverty he saw growing up, to bring young people across Southeast Asia into policymaking, peacebuilding, and sustainable development. The youth-led nonprofit invites the region's youth into civic life while exploring a shared ASEAN identity.\n\nHis volunteer-driven model builds national chapters and advocacy programs that make service a lifestyle. AYAN has grown across eight Southeast Asian countries, mobilized tens of thousands of youth advocates to reach more than 350,000 people, and earned him a place on the Forbes 30 Under 30 Asia Social Impact list, along with recognition from Tatler Asia and the United Nations.",
    image: "/images/triibe100/Mirus Ponon.png",
    website:
      "https://wps.asean.org/organization/asean-youth-advocates-network/",
    linkedin: "https://www.linkedin.com/in/mirusssp/",
  },
  {
    name: "Mathias Charles Yabe",
    org: "",
    bio: "CEO - AkoFresh",
    description:
      "Founded AkoFresh after a 2018 volunteer trip to Akumadan, where a 56-year-old farmer named Mary walked him through her fields and showed him a third of her tomatoes rotting. The Ghanaian venture builds off-grid, IoT-enabled solar cold rooms in farming communities the electricity grid never reached, extending the shelf life of perishable crops from five days to twenty-one.\n\nAkoFresh has trained more than 8,000 farmers in Ghana and won the 2024 Anzisha Prize along with a TotalEnergies grand prize at the company's Paris headquarters. Its founder was a Global Student Prize finalist and has been recognized as a top innovator by the World Economic Forum.",
    image: "/images/triibe100/Mathias Charles Yabe.png",
    website: "https://www.akofresh.com/",
    linkedin: "https://www.linkedin.com/in/mathias-charles-yabe-266b7415a/",
  },
  {
    name: "Maria Keller",
    org: "",
    bio: "Founder - Read Indeed",
    description:
      "Founded Read Indeed at age eight, setting out to collect and distribute one million books to children in need by the time she turned eighteen, a goal she reached at thirteen. What began with a single elementary-school book drive has grown into a nationwide literacy movement.\n\nHer volunteer-powered model gathers, sorts, and ships donated books to children who often have none at home. Read Indeed has now given away nearly four million books to kids in every U.S. state and 17 countries, and earned her the Jefferson Award for Public Service, the Prudential Spirit of Community Award, and recognition as a CNN Heroes Young Wonder.",
    image: "/images/triibe100/Maria Keller.png",
    website: "https://www.linkedin.com/company/readindeed/",
    linkedin: "https://www.linkedin.com/in/maria-keller/",
  },
  {
    name: "Josh Fields",
    org: "",
    bio: "Executive Director - The Next Step Programs",
    description:
      "Co-founded The Next Step Programs at 16 to support young adults with intellectual and developmental disabilities after they age out of the school system, inspired by his lifelong friendship with a classmate who has Down syndrome. The nonprofit offers vocational training, employment coaching, life skills classes, and independent-living experiences, and has worked with more than 1,000 families across southeastern Pennsylvania.\n\nHis inclusion-focused model partners with local employers to open real pathways to work and independence, and recently secured approval to tap state Medicaid funding. The Next Step has expanded across Pennsylvania and earned him a place on the Forbes 30 Under 30 Social Impact list and recognition as a 2025 Philadelphia Titan 100 honoree.",
    image: "/images/triibe100/Josh Fields.png",
    website: "https://tnsprograms.org/",
    linkedin: "https://www.linkedin.com/in/josh-fields-26966593/",
  },
  {
    name: "Jared Fenton",
    org: "",
    bio: "Founder - The Reflect Organization",
    description:
      "Founded The Reflect Organization in 2015 at the University of Pennsylvania, after producing the first mixed-methods research into 'Penn Face', the mask of effortless perfection that left students hiding loneliness and distress. The national mental wellness nonprofit gives college students a safe forum to speak openly and honestly, and empowers them to build a campus culture of authenticity, self-love, and allyship.\n\nHis chapter-based model brings students together for facilitated, proactive conversations that de-stigmatize care and strengthen connection. Reflect has expanded to campuses across the country and internationally, raised more than $1 million, and earned him a place on the Forbes 30 Under 30 Social Impact list and a President's Volunteer Service Award.",
    image: "/images/triibe100/Jared Fenton.png",
    website: "https://www.reflecteffect.org/",
    linkedin: "https://www.linkedin.com/in/jaredfenton/",
  },
  {
    name: "Jahnavi Rao",
    org: "",
    bio: "President and Founder - New Voters",
    description:
      "Founded New Voters in 2017 as a high school club, after feeling voiceless at 16 during a presidential election, then registering 85% of her senior class to vote. The nonpartisan nonprofit mobilizes high school students to run their own voter registration drives and find their voice in democracy.\n\nHer near-peer mentorship model trains student leaders to register their classmates, supported by youth-led research into what actually drives civic participation. New Voters has expanded to hundreds of high schools across dozens of states, registered more than 80,000 students, and earned her a place on the Forbes 30 Under 30 Social Impact list and recognition as a L'Oréal Paris Woman of Worth.",
    image: "/images/triibe100/Jahnavi Rao.png",
    website: "https://www.new-voters.org/",
    linkedin: "https://www.linkedin.com/in/jahnavirao/",
  },
  {
    name: "Stanley Anigbogu",
    org: "",
    bio: "Founder - LightED Impact Foundation",
    description:
      "Founded LightEd in Nigeria in 2020, out of a childhood spent in blackouts in a country where more than 90 million people still lack reliable electricity. The organization recovers electronic and plastic waste and rebuilds it into solar-powered products like the Glow Lamp and the LightHouse Charging Station, each designed alongside the communities that use them.\n\nLightEd has reached over 30,000 people including more than 10,000 refugees, trained over 6,000 young people, and recycled more than 20,000 kilograms of waste. Its founder holds the UN-Habitat Scroll of Honour, the Sharjah International Award for Refugee Advocacy, an Echoing Green Fellowship, and the 2025 Commonwealth Young Person of the Year Award.",
    image: "/images/triibe100/Stanley Anigbogu.png",
    website: "https://lightedimpact.org/",
    linkedin: "https://www.linkedin.com/in/stanley-anigbogu/",
  },
  {
    name: "Hikaru (Wakeel) Hayakawa",
    org: "",
    bio: "Executive Director - Climate Cardinals",
    description:
      "A founding director and now the first full-time Executive Director of Climate Cardinals, one of the world's largest youth-led climate organizations, working to make climate education accessible to people who do not speak English. He built the organization's signature translation program through partnerships with Translators Without Borders and Google.\n\nHis accessibility-focused model mobilizes a global volunteer network to translate climate information into more than 100 languages, handling millions of words of climate content. Climate Cardinals has grown to more than 16,000 volunteers across 134 countries, and in 2023 became one of the first youth-led organizations to secure six-figure funding from Google's philanthropic arm.",
    image: "/images/triibe100/Hikaru Wakeel Hayakawa.png",
    website: "https://www.climatecardinals.org/",
    linkedin: "https://www.linkedin.com/in/hikaruhayakawa/",
  },
  {
    name: "Hayfa Sdiri",
    org: "",
    bio: "Co-Founder and CIO - RIVET | BBC 100 2019",
    description:
      "Founded Entr@crush in 2016, an online platform built to give young Tunisians a route into entrepreneurship the formal economy was not offering. She is now Chief Impact Officer at RIVET, the first global micro-financing platform channeling the economic power of young people into youth-led solutions across climate, health, education, mental health, and economic empowerment.\n\nHer work designing these mechanisms has spanned the MENA region, Europe, North America, and East and West Africa, with earlier posts at UNDP, the ITU, and UN-Habitat. She was named to the BBC's 100 Women list in 2019 and curates the Global Shapers hub in Tunis.",
    image: "/images/triibe100/Hayfa Sdiri.png",
    website: "https://www.rivet.org/",
    linkedin: "https://www.linkedin.com/in/hayfa-sdiri/",
  },
  {
    name: "Grace Liu",
    org: "",
    bio: "Founder - Research To Empower",
    description:
      "Founded Research to Empower at 13, after discovering that most research programs were expensive and out of reach, with a mission to make research education free, engaging, and accessible to K-12 students everywhere. The student-led nonprofit lowers the barrier to a skill she believes every young person deserves.\n\nHer model delivers a cost-free, entry-level curriculum through workbooks, podcasts, and videos that students can complete in 10 to 20 hours before launching their own projects. Research to Empower has reached more than 200,000 people across 141 countries, and its founder is a published author and a Global Student Prize finalist.",
    image: "/images/triibe100/Grace Liu.png",
    website: "https://www.research2empower.org/",
    linkedin: "https://www.linkedin.com/in/grace-chenxin-liu/",
  },
  {
    name: "Gitanjali Rao",
    org: "",
    bio: "Global Keynote - Vervient Foundation",
    description:
      "Founded the Vervient Foundation to put hands-on innovation and STEM learning in front of as many students as possible, extending a mission she began as a child inventor. Best known as TIME's first-ever Kid of the Year, she has taught her five-step innovation process to tens of thousands of students across more than 45 countries and six continents.\n\nHer student-centered model turns curiosity into problem-solving, guiding young people to build real solutions to real problems. The inventor behind Tethys, a lead-detection tool for water, along with devices addressing opioid addiction and cyberbullying, she has been honored as a Forbes 30 Under 30 in Science recipient and an EPA Presidential award winner.",
    image: "/images/triibe100/Gitanjali Rao.png",
    website: "https://vervient.org/",
    linkedin: "https://www.linkedin.com/in/gitanjalirao/",
  },
  {
    name: "Esha Venkat",
    org: "",
    bio: "COO, Speaker and Founder - NEST4US",
    description:
      "Co-founded NEST4US with her older sister, turning a shared childhood of community service into a nonprofit built on kindness, generosity, and social good. As COO she runs five programs spanning hunger relief, tutoring, mentorship, kindness campaigns, and birthday boxes for children who would otherwise go without.\n\nShe has personally contributed 7,500 hours of service while helping grow NEST4US into a global volunteer network advancing more than 14 of the UN Sustainable Development Goals across six continents. She has spoken at the United Nations, the King Center, and the U.S. Department of Education while studying public policy at Georgia Tech.",
    image: "/images/triibe100/Esha Venkat.png",
    website: "https://nest4us.org/",
    linkedin: "https://www.linkedin.com/in/eshavenkat/",
  },
  {
    name: "Dr. Khadija Serwaah Owusu",
    org: "",
    bio: "Founder - AKAYA",
    description:
      "Founded AKAYA in 2023, a British-Ghanaian doctor raised by a single mother in North London who wanted to reach the girls back home. The nonprofit supports the personal and professional development of the next generation of African female leaders, growing out of The Like Her Project, a school outreach initiative encouraging girls to dream, think, and work like the women they admire.\n\nA founding member and Director of Programmes at Melanin Medics, she has been a guest of Michelle Obama at the White House and received the Women in STEM Award presented by HRH Princess Anne. She is a Princess Diana Award recipient and an internationally recognized speaker on health equity and representation in medicine.",
    image: "/images/triibe100/Dr. Khadija Serwaah Owusu.png",
    website: "https://www.akayafoundation.com/",
    linkedin: "https://www.linkedin.com/in/khadijaowusu/",
  },
  {
    name: "Diana Chao",
    org: "",
    bio: "Founder - Letters to Strangers",
    description:
      "Founded Letters to Strangers at 14, after bipolar disorder and a blinding eye condition nearly ended her life and she began to heal through writing. Over the past decade, the organization has grown into the largest global youth-for-youth mental health nonprofit, exchanging more than 60,000 letters and reaching over half a million people in more than 70 countries.\n\nHer youth-led model pairs therapy-informed letter exchanges and peer education with grassroots advocacy for treatment reform. Letters to Strangers published the world's first free youth-for-youth mental health guidebook, now taught to more than 100,000 students, and its founder has been honored by two U.S. presidents at the White House, named a Princess Diana Legacy Award winner, and recognized as a L'Oréal Paris Woman of Worth.",
    image: "/images/triibe100/Diana Chao.png",
    website: "https://www.letterstostrangers.org/",
    linkedin: "https://www.linkedin.com/in/diana-chao/",
  },
  {
    name: "Cole Mattox",
    org: "",
    bio: "Co-Founder and Co-Chairman - First Generation Investors",
    description:
      "Co-founded First Generation Investors in 2018 at the University of Pennsylvania, after he and his co-founders realized how little investing education reached students in underserved communities. The nonprofit teaches high schoolers the power of long-term investing, and brings the lessons to life with real money.\n\nIts near-peer model pairs college-student tutors with high schoolers for a free course, then gives graduates real funds to invest in the market. First Generation Investors has grown from three students to well over a thousand across dozens of campuses, partnering with major civil rights organizations and financial firms, and its co-founder is an Obama Foundation Leader.",
    image: "/images/triibe100/Cole Mattox.png",
    website: "https://www.firstgenerationinvestors.com/",
    linkedin: "https://www.linkedin.com/in/cole-b-m-6575a2126/",
  },
  {
    name: "Claire Chi",
    org: "",
    bio: "Founder and Executive Director - Dancing Against Hunger",
    description:
      "Founded Dancing Against Hunger in March 2022 at 16, after federal COVID relief for free school meals ended and she watched classmates lose the most reliable food in their day. The 501(c)(3) runs dance workshops that double as donation events, giving young people somewhere to belong while filling local food bank shelves.\n\nDancing Against Hunger has engaged more than 1,100 participants across 40 community partners and grown from State College to nationwide operations with Stanford and Penn State partnerships. Its founder served on the Pennsylvania State Board of Education, delivered a TEDx talk, and earned a Hormel 10 Under 20 Food Heroes honor and the Stephen J. Brady Stop Hunger Scholarship.",
    image: "/images/triibe100/Claire Chi.png",
    website: "https://www.dancingagainsthunger.org/",
    linkedin: "https://www.linkedin.com/in/claire-chi/",
  },
  {
    name: "Chethan Manchegowda",
    org: "",
    bio: "Founder - Khoon",
    description:
      "Founded Khoon in 2016 at 15, after losing a beloved teacher to a preventable blood shortage, with a vision that no life should be lost for want of blood. Based in Bengaluru, the youth-led organization has grown into one of India's leading blood-donation networks, connecting more than 150,000 donors and helping save over 120,000 lives through 50+ campaigns and a team of 300+ volunteers.\n\nHis donor-matching model blends a 24/7 response system, mobile donation units, and creative, theme-based drives that make giving blood feel human and urgent. Khoon partners with hospitals, blood banks, and global platforms, and its founder has been recognized as an Ashoka Youth Venturer and among The Hindu's 30 Under 30 in social impact.",
    image: "/images/triibe100/Chethan M.png",
    website: "https://www.khoon.org/",
    linkedin: "https://www.linkedin.com/in/whereischethan/",
  },
  {
    name: "Ben Erler",
    org: "",
    bio: "Former Chairman and Board Member for Education - Young Founders Network",
    description:
      "A founder and leader within the Young Founders Network, Germany's largest community of young entrepreneurs, which began as a group of friends and grew into a nationwide nonprofit. Having started his own venture at sixteen, he helps build the network that connects and empowers the next generation of founders.\n\nThe community brings young founders together through local chapters, an incubator, a web platform, and an annual conference that gathers hundreds of aspiring entrepreneurs, investors, and speakers. Open to founders under 25, it now spans well over a thousand members across cities throughout Germany.",
    image: "/images/triibe100/Ben Erler.png",
    website: "https://youngfounders.network/",
    linkedin: "https://www.linkedin.com/in/ben-erler/",
  },
  {
    name: "Anna Luísa Beserra",
    org: "",
    bio: "CEO - Sustainable Development & Water For All",
    description:
      "Invented Aqualuz at 15, a device that uses nothing but sunlight to disinfect rainwater held in cisterns, then founded Sustainable Development & Water For All two years later. The organization designs for the places public policy has skipped, combining frugal water and sanitation technology with territorial management and measured impact.\n\nSDW has directly benefited more than 41,000 people across 16 Brazilian states plus communities in Ecuador and Puerto Rico. Its founder is the only Brazilian ever named a UN Young Champion of the Earth, the youngest person to receive Bahia's Comenda Dois de Julho, and the first Brazilian finalist for the global Green Tech Award.",
    image: "/images/triibe100/Anna Luísa Beserra.png",
    website: "https://www.sdwforall.com/en",
    linkedin: "https://www.linkedin.com/in/annabeserra/",
  },
  {
    name: "Alexia Hilbertidou",
    org: "",
    bio: "Founder & CEO - GirlBoss New Zealand",
    description:
      "Founded GirlBoss New Zealand at 16 from her bedroom, after being the only girl in her digital technology class and the only girl in advanced physics. Raised below the poverty line by her Samoan single mother in West Auckland, she built a school network delivering leadership, entrepreneurship, and STEM programming to young women.\n\nGirlBoss is now New Zealand's largest organization for young women, with 17,500 members across more than 400 schools in New Zealand, Australia, and the Cook Islands, and roughly one in seven high-school-aged young women in the country enrolled. Its founder is a Queen's Young Leader, a National Geographic Explorer, New Zealand's Official Gender Equality Ambassador, and a Forbes 30 Under 30 honoree.",
    image: "/images/triibe100/AlexiaHilbertidou.jpg",
    website: "https://www.girlboss.nz/",
    linkedin: "https://www.linkedin.com/in/alexiah/",
  },
  {
    name: "Neha Shukla",
    org: "",
    bio: "Founder & Executive Director, Innovation for Everyone",
    description:
      "Founded Innovation For Everyone after inventing SixFeetApart, a wearable social distancing device, at the start of the pandemic and realizing most students are never told they are allowed to build things. The youth movement teaches a four-step innovation process through workshops and books, working to close the AI ethics literacy gap and put youth safety at the center of how AI gets designed.\n\nInnovation For Everyone has reached more than 70,000 students across 35 countries and partners with the UN Foundation, the New York Hall of Science, and the Algorithmic Justice League. Its founder chaired the World Economic Forum's first entirely youth-led AI advisory body, wrote two bestselling books, and holds a Presidential Gold Service Award and a Diana Award.",
    image: "/images/triibe100/NehaShukla.jpg",
    website: "https://www.innoforeveryone.org/",
    linkedin: "https://www.linkedin.com/in/neha-shukla-innovation/",
  },
  {
    name: "Natalie Meyer",
    org: "",
    bio: "Founder & Managing Director, Arc Health",
    description:
      "Founded ArcHealth Foundation to bridge the gap between medical innovation and global healthcare, drawing on a background in medical-device commercialization and global health investment. The nonprofit brings together entrepreneurs, engineers, researchers, and investors around a shared commitment to expanding access to quality care in underserved parts of the world.\n\nHer model channels breakthrough medical innovation toward the communities that need it most, guided by a global network of physicians and public-health advisors spanning the United States and Africa. Still early in its journey, ArcHealth is building the partnerships and portfolio to carry these solutions to where they can do the most good.",
    image: "/images/triibe100/NatalieMeyer.jpg",
    website: "https://arc-health.org/",
    linkedin: "https://www.linkedin.com/in/natalierosemeyer/",
  },
  {
    name: "Bella Brown",
    org: "",
    bio: "Co-Founder, Living Outside",
    description:
      "Co-founded Living Outside in 2021 with her younger sister, a year after they started handing out care bags in Chicago and the same year their mother told them about an uncle who was unhoused. The nonprofit treats distribution as a platform for acknowledgment rather than charity, with every bag containing items recipients can pass on themselves.\n\nLiving Outside runs 20 chapters worldwide, each led by a high school student, and has reached more than 6,000 lives. Its co-founder backed the approach with her own mixed-methods research showing it reduces bias, and is a Coca-Cola Scholar, a Diller Teen Tikkun Olam Award recipient, and a Daily Point of Light honoree.",
    image: "/images/triibe100/BellaBrown.jpg",
    website: "https://www.livingoutside.org/",
    linkedin: "https://www.linkedin.com/in/bellabrown369/",
  },
  {
    name: "Nav Agarwal",
    org: "",
    bio: "Founder, One Step Greener",
    description:
      "Co-founded One Step Greener in 2018 at 11 with his older brother, after the Ghazipur landfill collapse killed two people and they connected Delhi's burning waste to the asthma attacks in their own home. The organization runs free door-to-door dry waste pickup, micro-sorts at a warehouse, routes each category to a specialized recycler, and employs women waste pickers with training and dignified work.\n\nOne Step Greener now operates in 13 Indian cities, has recycled 2.9 million pounds of waste from over 300,000 people, planted 68,000 trees, and taught a free curriculum in more than 150 schools. Its founders received the 2021 International Children's Peace Prize.",
    image: "/images/triibe100/NavAgarwal.jpg",
    website: "https://www.onestepgreener.org/",
    linkedin: "https://www.linkedin.com/in/nav-agarwal-45009a158/",
  },
  {
    name: "Olivier UWISHEMA",
    org: "",
    bio: "Founder and Chairman, Oli Health Magazine Organization",
    description:
      "Founded Oli Health Magazine Organization in 2018 to engage young people in professional health education and scientific research, opening doors that many had told him were closed to medical students. The nonprofit research academy has grown into a global community of more than 20,000 members, with a Global Research Fellowship that has trained over 4,000 early-career researchers across Africa, Europe, and Asia.\n\nHis mentorship-driven model pairs young doctors, students, and researchers with training, publishing, and international collaboration, building research capacity where it is scarce. OHMO's work has been recognized by the United Nations, and its founder was named to the Forbes 30 Under 30 list in Medicine and Research, received The Diana Award, and now serves as a peer reviewer for The Lancet.",
    image: "/images/triibe100/OlivierUWISHEMA.jpg",
    website: "https://www.olihealthmagazine.org/",
    linkedin: "https://www.linkedin.com/in/olivier-uwishema-554259b5/",
  },
  {
    name: "Kelsey Cadien",
    org: "",
    bio: "Co-Founder, Kelsey & Cambel's Kids Care",
    description:
      "Co-founded Kelsey & Cambel's Kids Care in 2012 with her younger sister, beginning with a letter-writing campaign of compassion to families affected by the Sandy Hook tragedy. Built on the idea of 'Compassion in Action', the nonprofit inspires young people to lead through service, mobilizing volunteers to support families and communities near and far.\n\nHer youth-led model turns everyday acts of kindness into sustained programs, from literacy and book drives to teacher appreciation and disaster response. What began in Cypress, Texas has grown into international outreach spanning Haiti, Ghana, and Afghanistan, and the sisters were recently recognized by the City of Houston for their impact.",
    image: "/images/triibe100/KelseyCadien.jpg",
    website: "https://www.kckidscare.org/",
    linkedin: "https://www.linkedin.com/in/kelsey-cadien/",
  },
  {
    name: "Emily Cho",
    org: "",
    bio: "Founder & Executive Director, Juvie for STEM",
    description:
      "Founded Juvie for STEM at 13, after volunteering in juvenile detention centers and prisons and seeing that incarcerated young people had almost no access to hands-on STEM learning. The youth-led nonprofit brings coding, robotics, and mentorship into correctional facilities, built on a belief in rehabilitation through education.\n\nHer volunteer-powered model creates and delivers curriculum from coding to chemistry, pairing lessons with reentry support to reduce recidivism. Juvie for STEM has grown to reach nearly 20,000 young people through 36 chapters across 17 U.S. states and beyond, mobilizing thousands of volunteers, and earned her a place on the Forbes 30 Under 30 Social Impact list.",
    image: "/images/triibe100/EmilyCho.jpg",
    website: "https://www.juvieforstem.org/",
    linkedin: "https://www.linkedin.com/in/emilyycho/",
  },
  {
    name: "Mary Zhu",
    org: "",
    bio: "Founder & Executive Director, Develop for Good",
    description:
      "Co-founded Develop for Good in 2020 as a Stanford student during the pandemic, connecting college volunteers who wanted to build with nonprofits that needed technology. The daughter of immigrants who grew up leaning on nonprofit support, she built the organization to turn student talent into social good.\n\nHer mentorship-driven model pairs and trains diverse student teams to develop software for nonprofits under industry guidance. Develop for Good has deployed more than 2,800 volunteers on 200-plus projects for organizations like UNICEF, the WHO, and the World Bank, raised over $1.3 million, and earned her a place on the Forbes 30 Under 30 list.",
    image: "/images/triibe100/MaryZhu.jpg",
    website: "https://www.developforgood.org/",
    linkedin: "https://www.linkedin.com/in/maryyzhu/",
  },
  {
    name: "Owen Tanner-Flomberg",
    org: "",
    bio: "Founding Executive Director, Student Basic Needs Coalition",
    description:
      "Co-founded the Student Basic Needs Coalition in 2019 as a student at the University of Tennessee, after watching classmates drop out for financial reasons, then launched it nationally in 2020. The nonprofit helps college students meet their basic needs so money never stands between them and a degree.\n\nIts three-part model combines a free benefits-eligibility screener, campus education, and policy advocacy to close the 'SNAP gap' for students. In 2025 alone, the coalition helped 15,000 students access more than $57 million in food benefits and enrolled thousands more in healthcare, work that earned him a place on the Forbes 30 Under 30 Social Impact list.",
    image: "/images/triibe100/OwenTanner-Flomberg.png",
    website: "https://studentbasicneeds.com/",
    linkedin: "https://www.linkedin.com/in/owen-flomberg/",
  },
  {
    name: "Adaobi Okeke",
    org: "",
    bio: "Co-Founder, CIF Initiative",
    description:
      "Founded the Change is Female Initiative to empower women and girls in underserved communities with the tools, resources, and support to become leaders in their own right. The organization works to foster gender equality, amplify women's voices, and create safe, inclusive spaces for growth, education, and social impact.\n\nHer approach centers long-term, community-owned change, guided by a vision of building an organization that can sustain its impact well beyond any single leader. That mission-first mindset shapes how the initiative grows and how it invests in the women it serves.",
    image: "/images/triibe100/AdaobiOkeke.jpg",
    website: "https://www.linkedin.com/company/cif-initiative/",
    linkedin: "https://www.linkedin.com/in/okekeadaobirita/",
  },
  {
    name: "Val Amiel Vestil",
    org: "",
    bio: "Executive Director, Association of Young Environmental Journalists",
    description:
      "Founded the Association of Young Environmental Journalists in 2017, beginning with a student environmental writing camp and a conviction that the planet needs young storytellers to give it a voice. The youth-led, registered nonprofit and news network works to make communities ecologically literate through journalism and youth development.\n\nIts model trains young writers through hands-on workshops, caravans, and documentary storytelling under the rallying cry to let the earth be heard. AYEJ has trained hundreds of young journalists across the Philippines, and its founder became the first Filipino to receive the ASEAN Youth Eco-Champion Award.",
    image: "/images/triibe100/ValAmielVestil.jpg",
    website:
      "https://www.linkedin.com/company/association-of-young-environmental-journalists/",
    linkedin: "https://www.linkedin.com/in/valvestil/",
  },
  {
    name: "Ava Langridge",
    org: "",
    bio: "Founder & Executive Director, Our Youth 4 The Climate",
    description:
      "Founded Our Youth 4 The Climate in 2021 at 18, after seeing how education systems were failing to prepare young people for the crisis they are inheriting. The global, youth-led grassroots organization offers high-quality climate education, free and open to all.\n\nHer model began with online classes during the pandemic and grew into a community powered by social media, a free curriculum, and weekly lessons that meet young people where they are. Led today by a global team of youth leaders, Our Youth 4 The Climate reaches audiences across platforms with the belief that knowledge is power.",
    image: "/images/triibe100/AvaLangridge.jpg",
    website: "https://oy4c.org/",
    linkedin: "https://www.linkedin.com/in/ava-langridge-46435b24a/",
  },
  {
    name: "Kehkashan Basu",
    org: "",
    bio: "Sustainability Expert, Green Hope Foundation",
    description:
      "Founded Green Hope Foundation in 2012 at 12, after seeing a photograph of a dead bird with a belly full of plastic at age seven and deciding the exclusion of children and women from sustainability decisions was itself the problem. The United Nations accredited enterprise brings young people, women, and marginalized communities directly into the sustainable development process rather than consulting them after the fact.\n\nGreen Hope works at grassroots level in 28 countries and has empowered more than 500,000 people. Its founder is the only Canadian to win the International Children's Peace Prize, a recipient of Canada's Meritorious Service Medal, a Forbes 30 Under 30 honoree, a UN Human Rights Champion, and a National Geographic Young Explorer.",
    image: "/images/triibe100/KehkashanBasu.jpeg",
    website: "https://www.thegreenhopefoundation.org/",
    linkedin: "https://www.linkedin.com/in/kehkashanbasu/",
  },
  {
    name: "Rijve Arefin",
    org: "",
    bio: "Co-Founder, Awareness 360",
    description:
      "Co-founded Awareness 360 in October 2014 over a conversation at a Dhaka burger joint, two friends asking why so many young people want to give back and have no idea where to begin. The Kuala Lumpur headquartered nonprofit trains young people to design and lead their own local projects, from handwashing and water filtration workshops to menstrual hygiene education for communities others overlook.\n\nAwareness 360 has mobilized volunteers across more than 20 countries with impact reported across 75-plus, and has been recognized by UNDP, UN Women, and the US State Department. Its co-founders were named to the Forbes 30 Under 30 Asia Social Impact list and now serve as Diana Award judges.",
    image: "/images/triibe100/RijveArefin.jpg",
    website: "https://awareness360.org.my/",
    linkedin: "https://www.linkedin.com/in/rijvearefin/",
  },
  {
    name: "Joseph Nguthiru",
    org: "",
    bio: "Co-Founder & Engineer, AfroClimate",
    description:
      "Founded HyaPak in 2022 as a final-year engineering project, after a field trip left his boat trapped for five hours in the water hyacinth choking Lake Naivasha and the fishing economy around it. The venture uses one problem to solve another, turning the invasive weed into biodegradable seedling bags, courier packaging, and carton linings that replace fossil-fuel plastic.\n\nHyaPak has cleared more than eight hectares of hyacinth from the lake while creating green jobs for the people whose livelihoods it destroyed. He also co-founded AfroClimate, a US 501(c)(3) that has backed over 40 African climate ventures, and M-Situ, an AI early warning system for deforestation, and was named a 2025 UN Young Champion of the Earth and a 2023 Obama Foundation Leader.",
    image: "/images/triibe100/JosephNguthiru.jpg",
    website: "https://www.afroclimate.org/",
    linkedin: "https://www.linkedin.com/in/josephnguthiru/",
  },
  {
    name: "Khloe Thompson",
    org: "",
    bio: "Founder, Khloe Kares",
    description:
      "Founded Khloe Kares at eight, after passing the same unhoused woman on her walk to school in Irvine and asking her parents why she was there. Having just learned to sew from her grandmother, she hand-stitched tote bags and filled them with hygiene essentials, starting with a goal of twenty-five.\n\nKhloe Kares has distributed more than 50,000 Kare Bags worldwide and now runs youth leadership workshops alongside its outreach. Its founder returns to Ghana each year to install water pumps and bathroom facilities at schools without clean water, is building the Khloe Kares Creative Arts Center in Kumasi, and received the George H.W. Bush Points of Light Award.",
    image: "/images/triibe100/KhloeThompson.jpg",
    website: "https://www.khloekares.com/#/",
    linkedin: "https://www.linkedin.com/in/khloe-kares-2ba082265/",
  },
  {
    name: "Marie-Claire Graf",
    org: "",
    bio: "Co-Founder, Youth Negotiators Academy",
    description:
      "Co-founded the Youth Negotiators Academy in 2021 with a small group of climate and negotiation experts, after years inside UN processes where young people were discussed but rarely seated at the table. The academy trains negotiators aged 18 to 35 through a six-month program, then connects them directly to their own national delegations so they arrive at the talks with a mandate rather than a badge.\n\nThe Climate Youth Negotiator Programme has grown from 59 negotiators in 26 countries in its pilot year to 75 countries in 2025, and the Land Youth Negotiator Programme has trained 100 young negotiators from 35 countries for the desertification convention. A former Swiss climate negotiator, its co-founder chaired YOUNGO at the UNFCCC, served as UN Food Systems Summit Vice-Chair on youth, and was named United Nations Youth Climate Champion of Switzerland.",
    image: "/images/triibe100/Marie-ClaireGraf.jpg",
    website: "https://www.youthnegotiators.org/",
    linkedin: "https://www.linkedin.com/in/marie-claire-graf/",
  },
  {
    name: "Jerome Foster II",
    org: "",
    bio: "Founder & Executive Director, WaicUp",
    description:
      "Held weekly climate strikes outside the White House for 80 straight weeks, then founded OneMillionOfUs to mobilize young voters in the 2020 election. That work grew into Waic Up, which uses art, journalism, and civic engagement to organize young people across climate justice, racial justice, and human rights.\n\nAt 18 he became the youngest person ever to advise the White House, joining the Environmental Justice Advisory Council after interning for the late John Lewis at 16. He is a United Nations Champion of the Earth, a TIME Next Generation Leader, a Bloomberg Green Champion, and named to Business Insider's Climate Action 30.",
    image: "/images/triibe100/JeromeFosterII.jpg",
    website: "https://www.waicup.org/",
    linkedin: "https://www.linkedin.com/in/jeromefosterii/",
  },
  {
    name: "Sonali Ratnasinghe",
    org: "",
    bio: "Founder & Executive Director, Youth Ambassadors of Service",
    description:
      "Founded Youth Ambassadors of Service in September 2020 with two friends, after noticing that most volunteer programs got students in the door for the hours and offered nothing beyond that. The nonprofit runs two tiers, Act and Advance, teaching high schoolers to hold their own drives, fundraisers, and initiatives with real guidance behind them.\n\nNow one of North Carolina's largest youth-led nonprofits, it is governed by student leaders with a volunteer board providing oversight. Its founder is a Daily Point of Light honoree, a Governor's Volunteer Service Award recipient, a Points of Light Ambassador, and was named to United Way of the Greater Triangle's 10 to Watch.",
    image: "/images/triibe100/SonaliRatnasinghe.jpg",
    website: "https://www.youthambassadorsofservice.org/",
    linkedin: "https://www.linkedin.com/in/sonaliratnasinghe/",
  },
  {
    name: "Ben Mayele Jeme",
    org: "",
    bio: "Founder & Executive Director, Nakujali Foundation",
    description:
      "Founded Nakujali Foundation inside Nakivale Refugee Settlement in Uganda, one of the oldest and largest in Africa, where displacement trauma meets almost no access to mental health care. The refugee-led nonprofit works through trauma-informed yoga, art therapy, storytelling, and skill-building, bringing mindfulness into settlement schools and creating shared spaces between refugee and local children.\n\nThe team is building a Healing and Empowering Center constructed from eco-bricks made of recovered plastic bottles and powered by solar, an approach that diverts waste while cutting construction costs by up to 40 percent. Yoga clubs in partner schools are designed to be run by local teachers and students so the work continues without outside staff.",
    image: "/images/triibe100/BenMayeleJeme.jpg",
    website: "https://www.nakujalifoundation.org/",
    linkedin: "https://www.linkedin.com/in/ben-mayele-jeme-6a8a17322/",
  },
  {
    name: "Caeley Looney",
    org: "",
    bio: "Founder & CEO, Reinvented Magazine",
    description:
      "Founded Reinvented in 2018, a fresh aerospace engineering graduate flipping through a teen fashion magazine she no longer recognized herself in. It became the first print magazine written for girls in STEM by girls in STEM, paired with workshops, events, and mentorship, and a one-for-one program that sends a donated copy to a girl without access for every one purchased.\n\nShe built the organization at night while working days at L3Harris and then Firefly Aerospace, where she was a mission operations engineer and mission planner on the company's first commercial lunar lander. A Latina and autistic engineer who was told more than once she did not belong, she has since left the aerospace industry to run Reinvented full time.",
    image: "/images/triibe100/CaeleyLooney.jpg",
    website: "https://www.reinventedmagazine.com/",
    linkedin: "https://www.linkedin.com/in/caeleylooney/",
  },
  {
    name: "Shreyaa Venkat",
    org: "",
    bio: "Founder & CEO, NEST4US",
    description:
      "Co-founded NEST4US at 13 with her younger sister, building a philanthropic platform on kindness, generosity, and social good. NEST stands for Newer Environment Starts Today, and its five programs span hunger relief, tutoring, mentorship, kindness campaigns, and birthday boxes for children who would otherwise go without.\n\nNEST4US now advances more than 14 of the UN Sustainable Development Goals and has reached tens of thousands of people across 27 countries and six continents, with volunteers contributing hundreds of thousands of dollars in service value. Its founder has logged 8,000 hours of service, sat on the World Food Forum Youth Policy Board, spoken at the United Nations and the Gates Foundation, and received the George H.W. Bush Points of Light Award.",
    image: "/images/triibe100/ShreyaaVenkat.jpg",
    website: "https://nest4us.org/",
    linkedin: "https://www.linkedin.com/in/shreyaavenkat/",
  },
  {
    name: "Anne-Sophie Frédérick",
    org: "",
    bio: "Founder & Product Lead, Haitech Learning",
    description:
      "Founded HAITECH Learning to expand access to computer science education and open doors through code, rooted in pride in her Haitian heritage. Built while she was still a student, the nonprofit works to close the computer-literacy gap and turn technology into global opportunity.\n\nHer model brings coding education and community together, equipping young people with the skills to build in tech. A former president of her county's public-school student government and now a computer science student at Williams College, she continues to grow HAITECH's reach through code and connection.",
    image: "/images/triibe100/Anne-SophieFrederick.jpg",
    website: "https://www.haitechlearning.org/",
    linkedin:
      "https://www.linkedin.com/in/anne-sophie-fr%C3%A9d%C3%A9rick-1364ba235/",
  },
  {
    name: "Derin Ege Sezgin",
    org: "",
    bio: "Founder & President, SDG Youth Connect",
    description:
      "Founded SDG Youth Connect in September 2023 at 13, frustrated that the Sustainable Development Goals were talked about constantly and taught to young people almost never. He incorporated it as a 501(c)(3), then messaged 45 different UN representatives until one wrote back, turning a digital project into a recognized Civil Society Organization built on three pathways: awareness, advocacy, and action.\n\nThe organization runs national coordinator networks across Africa, Europe, and the Americas, with chapters in Nigeria and Cameroon delivering sickle cell and hemoglobin screenings, and co-organized an SDG Design Challenge drawing more than 400 participants. Its founder has spoken at the UN High-Level Political Forum five days running and addressed ambassadors on AI governance at the 80th General Assembly, then went home to study for a geometry test.",
    image: "/images/triibe100/DerinEgeSezgin.png",
    website: "https://www.sdgyouthconnect.org/",
    linkedin: "https://www.linkedin.com/in/derinege/",
  },
  {
    name: "Alex Edgar",
    org: "",
    bio: "Co-Founder, Youth 250",
    description:
      "Co-founded Youth250 to make sure the country's 250th anniversary was shaped by the generation inheriting it rather than commemorated at them. The initiative places young people inside the institutions doing the commemorating, through a Bureau of 100 paid and trained youth advisors and a research-backed Gen Z Scorecard.\n\nMore than 400 organizations have adopted the scorecard, and in February over 60 young adults gathered at the National Constitution Center to draft and sign a youth-written Declaration, broadcast in part on C-SPAN, which now travels to museums nationwide. Its co-founder is Youth Engagement Manager at Made By Us, the first Gen Z board member of Points of Light, and a Forbes 30 Under 30 honoree.",
    image: "/images/triibe100/AlexEdgar.jpg",
    website: "https://historymadebyus.org/youth250",
    linkedin: "https://www.linkedin.com/in/alexander-w-edgar/",
  },
  {
    name: "Maya Gowda",
    org: "",
    bio: "Founder & President, Students for Environmental Education & Discovery",
    description:
      "Founded Students for Environmental Education and Discovery in her freshman year of high school in Miami, after helping organize a Global Week for Future strike at Miami Beach City Hall and realizing that turnout was easier to build than understanding. The global climate literacy program is built around five curriculum strands that schools can actually teach.\n\nA CLEO Institute Certified Climate Speaker since her freshman year, she served as the mayor's appointee to the Miami-Dade Youth Commission, where she passed an urging to bring climate literacy into every school in the county. Her work has been supported by a Riley's Way Foundation fellowship.",
    image: "/images/triibe100/MayaGowda.jpg",
    website: "https://www.seedclimatechange.org/",
    linkedin: "https://www.linkedin.com/in/maya-gowda-a20484240/",
  },
  {
    name: "Arjun Sharda",
    org: "",
    bio: "Executive Director, TLEEM",
    description:
      "Founded TLEEM in October 2023 at 12, as a club at his middle school in Cedar Park, Texas, after noticing that students with equal intelligence and ambition ended up in wildly different places based purely on who they knew. Named for the Arabic word for education, it teaches K-12 students the networking and social capital skills school leaves out: professional outreach, building mentorship, and having a real network before graduation.\n\nTLEEM now serves more than 4,000 students through 37 chapters across 11 countries, and launched a pilot program supported by Walmart in 2025. Its founder has been recognized by Governor Greg Abbott and the Texas State Board of Education, won a silver American Business Award, and writes for outlets including the Washington Post.",
    image: "/images/triibe100/ArjunSharda.jpg",
    website: "https://tleem.org/",
    linkedin: "https://www.linkedin.com/in/arjun-sharda/",
  },
  {
    name: "Madison Quesnel",
    org: "",
    bio: "Founder & Executive Director, Building Grace",
    description:
      "Founded Building Grace after becoming unexpectedly pregnant at 19 and placing her baby for adoption, then finding almost nothing waiting for her on the other side. Birth parents were the one group the adoption process seemed to forget once the paperwork was done.\n\nSo she built what was missing. Building Grace exists as a resource and a support system for birth parents navigating the same healing she had to navigate alone.",
    image: "/images/triibe100/Madison Quesnel.jpeg",
    website: "https://www.buildinggracehelpingwomen.com/",
    linkedin: "https://www.linkedin.com/in/madison-q-9846ab218/",
  },
  {
    name: "Felix Atamba",
    org: "",
    bio: "Founder & Youth Project Lead, Youth Against Hunger Initiative",
    description:
      "Founded the Youth Against Hunger Initiative in Kenya, an agroecologist trained at the University of Nairobi who saw that hunger in Sub-Saharan Africa is rarely a problem of scarcity alone. YAHI organizes young people around food security through agroecology, nutrition education, and support for the small-scale farmers who grow most of the region's food.\n\nThe initiative runs community campaigns including Zero Hunger Fridays, connecting local action to the Sustainable Development Goals on hunger and climate. Its founder contributes to the FAO's Food Security and Nutrition Forum and works to promote nutritious local food plants and the knowledge to grow them.",
    image: "/images/triibe100/FelixAtamba.jpg",
    website: "https://www.linkedin.com/company/youthagainsthunger/",
    linkedin: "https://www.linkedin.com/in/felix-atamba/",
  },
  {
    name: "Ethan Hill",
    org: "",
    bio: "Founder, Ethan's Heart Bags4Blessings",
    description:
      "Founded Ethan's Heart in December 2016 at six, after passing a man named Mr. Marcus living under a Birmingham freeway underpass on the way to school and deciding it did not sit right. He spent his $100 in Christmas money on survival supplies, packed them into five-gallon buckets, and handed them out.\n\nEthan's Heart now runs a Free Mobile Store and Educational Unit delivering emergency food, clothing, sleeping bags, first aid, and hygiene supplies through street outreach across greater Birmingham, connecting people to services that lead toward stable housing. Its founder was a TIME and Nickelodeon Kid of the Year top 20 finalist and received the Congressional Medal of Honor Society's Citizen Honors Award for Service.",
    image: "/images/triibe100/EthanHill.jpeg",
    website: "http://www.ethansheartbham.org/",
    linkedin: "",
    instagram: "https://www.instagram.com/ethansheartbham/",
  },
  {
    name: "Crystal Yang",
    org: "",
    bio: "Founder & CEO, Audemy",
    description:
      "Founded Audemy after a blind classmate sat down at her lunch table and could not play the word game everyone else was playing. She built an audio version over the summer, then found the harder statistic behind it: more than 70 percent of blind students are at least a grade level behind. Audemy makes AI-powered, screen-free audio games that teach math and language through sound rather than adapted visuals.\n\nAudemy reaches more than 200,000 blind and visually impaired people across 136 countries, with its games used by roughly one in five blind students in the United States, and has released 100 accessibility toolkits for mainstream titles. Its founder leads a team of over 60 volunteers, has raised more than $200,000 from Intel, Google, and the Taco Bell Foundation, and presented her research at the ACM International Conference on Multimodal Interaction in Paris.",
    image: "/images/summit/CrystalYang.png",
    website: "https://audemy.org/",
    linkedin: "https://www.linkedin.com/in/crustaly/",
  },
  {
    name: "Marina El Khawand",
    org: "",
    bio: "Founder & President, Medonations",
    description:
      "Founded Medonations at 18, days after the Beirut port explosion, when her family urged her to leave the country and she volunteered at the blast site instead. What she saw there became the reason to stay. The organization collects and distributes medication and covers treatment costs for people the collapsing health system had stopped reaching.\n\nMedonations registered in Lebanon in 2021, opened a free HealthTech clinic in Beirut in 2022, and established a European headquarters in France in 2023, operating collection points in more than 65 countries and serving over 25,000 families. Its founder is a Forbes 30 Under 30 honoree, a Diana Award recipient, a HIMSS ChangeMaker in Health awardee, and a Young Activists Summit laureate at the UN in Geneva.",
    image: "/images/triibe100/MarinaElKhawand.jpg",
    website: "https://medonations.org/",
    linkedin: "https://www.linkedin.com/in/marinaelkhawand/",
  },
  {
    name: "Zoya Kalinsky",
    org: "",
    bio: "Founder & Executive Director, UnitEd Youth Council",
    description:
      "Founded the UnitEd Youth Council at 14, built on the distinction between young people being spoken about in decision-making rooms and actually being in them. The council gives members the tools, visibility, and mentorship to run their own projects, raise awareness, and fundraise for the causes they choose rather than the ones assigned to them.\n\nUnitEd has grown into a global network of more than 4,000 young leaders across over 60 countries. Its founder is a multi-time United Nations speaker on education, gender equality, and youth empowerment, has delivered a TEDx talk, and keynoted the International Youth Conference.",
    image: "/images/triibe100/ZoyaKalinsky.jpeg",
    website: "https://www.unitedyc.org/",
    linkedin: "",
    instagram: "https://www.instagram.com/zoyakalinsky/",
  },
  {
    name: "Ebun Lawal",
    org: "",
    bio: "Founder & Managing Director, Corporate Jungle Impact",
    description:
      "Founded Corporate Jungle Impact on a simple correction: young people are not a problem to be managed, they are a resource worth investing in. The organization builds programs that put young people in front of the leaders and institutions making decisions about them, teaching them to structure an argument and deliver it well enough to be heard.\n\nIts Own the Arena programme at the University of Portsmouth trained a cohort of youth researchers who carried out work commissioned by the Hampshire and Isle of Wight Police and Crime Commissioner, gathering 286 survey responses and 60 interviews on why young people do not trust authority. Its founder has delivered the model at Anthropy twice and inside prisons, and sits on the Anthropy Emerging Leaders Committee.",
    image: "/images/triibe100/EbunLawal.jpg",
    website: "https://uk.linkedin.com/company/corporate-jungle-impact",
    linkedin: "https://www.linkedin.com/in/ebun-lawal/",
  },
  {
    name: "Cherie Animashaun",
    org: "",
    bio: "Founder, Her Rising Initiative",
    description:
      "Founded Her Rising at 16 in her hometown of Evanston, Illinois, on the belief that young women of color are not missing ambition, but a roadmap and a room. The youth-led organization runs Girls Who Lead chapters and regional conferences, giving girls hands-on experience in policy, business, media, and civic engagement while connecting them with women leaders and opportunities to lead.\n\nHer Rising now has nearly 100 student-led chapters worldwide, with programming that includes free Girls Who Lead conferences, in-school leadership programs, and Rising Dinners with women in politics and business. Its founder is a 2025 Vital Voices Fellow and 2026 e.l.f. Beauty 22 Under 22 honoree, and continues to study government at Cornell University.",
    image: "/images/triibe100/CherieAnimashaun.jpg",
    website: "https://her-rising.com/",
    linkedin: "https://www.linkedin.com/in/cherieanimashaun/",
  },
  {
    name: "Michelle Ye",
    org: "",
    bio: "Co-Founder, Project EDSA",
    description:
      "Co-founded Project EDSA at 16 after seeing a structural gap in how schools address eating disorders and youth mental health. Rather than rely on one-off awareness events, EDSA embeds prevention, education, and peer support directly into schools, training student leaders and providing chapter toolkits, campaign resources, and evidence-based guidance developed with the National Association of Anorexia Nervosa and Associated Disorders.\n\nEDSA now has more than 105 chapters across 16 countries, with 400+ volunteers and 2,000+ trained student leaders who have educated over 100,000 students. Its co-founder oversees chapter onboarding, volunteer operations, and social media, while directing resources toward chapters and partner organizations. In 2026, Michelle received a San Mateo County commendation and became the youngest recipient of the Tony Hoffman Community Mental Health Services Award.",
    image: "/images/triibe100/MichelleYe.png",
    website: "https://projectedsa.wixsite.com/home",
    linkedin: "https://www.linkedin.com/in/michelle-ye-56a0b9274/",
  },
  {
    name: "Diya Mankotia",
    org: "",
    bio: "Founder and Executive Director, Project EDSA",
    description:
      "Founded Project EDSA in 2024 after her own experience in eighth grade showed her the limits of the support available to students. What began as one club at her school in Austin, Texas grew into a youth-led model that trains students to lead eating-disorder prevention, awareness, and peer-support initiatives in their own schools rather than relying solely on already stretched counseling systems.\n\nProject EDSA now has more than 100 student-led chapters across 16 countries, with 400+ volunteers and 2,000+ trained student leaders who have reached over 100,000 students through workshops and school-wide programs. Its founder has been a Daily Point of Light Award honoree, worked with ANAD's Student Ambassador Program, and presented Project EDSA's prevention curriculum to Austin ISD. She is now a student at Stanford University, Class of 2030.",
    image: "/images/triibe100/DiyaMankotia.jpg",
    website: "https://projectedsa.wixsite.com/home",
    linkedin: "https://www.linkedin.com/in/diya-mankotia/",
  },
  {
    name: "Mary Blankemeier",
    org: "",
    bio: "Founder and CEO, Run Your City",
    description:
      "Founded Run Your City in 2018 as a walk-on runner at the University of Virginia, starting as Run Charlottesville with a teammate. The idea was simple: college athletes already know how to build a team, so give them kids to coach and let running become a vehicle for confidence, health, and belonging. What began as one chapter has grown into a free, inclusive youth sports program powered by collegiate athletes.\n\nRun Your City now has 107 chapters across the United States and international programs in Rwanda, Nigeria, and India, reaching more than 13,000 children. Its founder received UVA’s Sky Alland Scholarship, becoming the first engineering student to receive it in 26 years, and is now pursuing an MBA at Stanford Graduate School of Business.",
    image: "/images/triibe100/MaryBlankemeier.jpg",
    website: "https://www.runyourcity.org/",
    linkedin: "https://www.linkedin.com/in/blanks/",
  },
  {
    name: "Eojin Park",
    org: "",
    bio: "Founder, Crisis! Educational Games",
    description:
      "Founded CRISIS! from a pitch that won the 2025 NATO Youth Summit Challenge, responding to a gap she had experienced firsthand: growing interest among young people in international relations with few opportunities to practice the skills. CRISIS! is a strategy-based educational platform that puts students aged 10–17 inside simulations of geopolitical decision-making, crisis management, and multilateral problem-solving. It was developed through Princeton’s Keller Center eLab with contributors from the University of Toronto and Rhode Island School of Design.\n\nIts founder is a junior at Princeton studying Politics with minors in Spanish, Portuguese, and Creative Writing, and serves as an Undergraduate Fellow and Communications Team Lead at Princeton’s Center for International Security Studies. She is the youngest and first undergraduate NATO Youth Summit Challenge winner, a 2026 Max Thabiso Edkins Ambassador appointed by the World Bank, and in 2026 worked with UNESCO’s South Asia Bureau on media and information literacy initiatives.",
    image: "/images/triibe100/EojinPark.jpg",
    website: "https://www.crisis-game.org/",
    linkedin: "https://www.linkedin.com/in/eojin-park-1849601b0/",
  },
  {
    name: "Arielle Galinsky",
    org: "",
    bio: "CEO and Co-Founder, The Legacy Project",
    description:
      "Co-founded The Legacy Project at Tufts in 2020 after losing both grandfathers at 10 and regretting that she never heard their stories. The model pairs college students and older adults for mutual storytelling, friendship, and collaborative writing, making sure nobody is only the subject and nobody is only the volunteer. What began as a Tufts student organization has grown into a national nonprofit connecting generations through storytelling and published life stories.\n\nThe Legacy Project now spans nearly 75 campuses across 30 states, with its work expanding from storytelling into intergenerational civic engagement. Its founder graduated summa cum laude from Tufts in 2024 and is an MPP/JD candidate at Harvard Kennedy School and Yale Law School. She was a 2025–26 Eisner Prize Fellow and now leads the Intergenerational Changemakers program, pairing older and younger participants to turn shared stories into community projects.",
    image: "/images/triibe100/ArielleGalinsky.jpg",
    website: "https://www.legacyprojectinc.org/",
    linkedin: "https://www.linkedin.com/in/ariellegalinsky/",
  },
  {
    name: "Elad Raymond",
    org: "",
    bio: "CEO, Onero Institute",
    description:
      "Conceived Onero with a roommate at the School for Ethics and Global Leadership in 2016 and later launched it at George Washington University. The name comes from the Latin root for “weight” or “load,” reflecting the responsibility young people inherit in shaping the world. Onero was built around a simple correction: young people are producing serious research on international affairs, and the professional community should make room for their voices.\n\nOnero is now a global youth-driven nonprofit think tank with regional programmes spanning Africa, Europe, the Indo-Pacific, Latin America and the Caribbean, and the Middle East, publishing youth-led research and creating opportunities for intergenerational dialogue and professional development. Its annual Bridge Award recognizes leaders who invest in the next generation. Elad graduated summa cum laude from GW’s Elliott School of International Affairs and continues to lead Onero’s expansion and research community.",
    image: "/images/triibe100/EladRaymond.png",
    website: "https://www.oneroinstitute.org/",
    linkedin: "https://www.linkedin.com/in/eladraymond/",
  },
  {
    name: "Natasha Agarwal",
    org: "",
    bio: "Founder and CEO, BelieveNBooks",
    description:
      "Founded BelieveNBooks on Earth Day 2021 as an eighth grader, after a pandemic spent reading collided with seeing how many children had little or nothing to read at home. Her first school book drive brought in more than 3,000 books, which she helped deliver to a center in Immokalee, Florida. BelieveNBooks has since distributed more than 250,000 books to over 50,000 children through 28 locations across the United States and Africa.\n\nIts founder wrote Tales of African Women Trailblazers, with 100% of profits funding book distribution to girls across Africa; more than 10,000 copies have already been distributed across five countries. Natasha is a Daily Point of Light Award honoree and a sophomore at the University of Pennsylvania. In 2026, BelieveNBooks was named America's Best Youth-Led Literacy Non-Profit Organization by Corporate Vision.",
    image: "/images/triibe100/NatashaAgarwal.png",
    website: "http://www.believenbooks.org",
    linkedin: "https://www.linkedin.com/in/natasha2007/",
  },
  {
    name: "Sam Hiner",
    org: "",
    bio: "Executive Director, Young People's Alliance",
    description:
      "Co-founded the Young People's Alliance as a high school student in North Carolina after drafting state legislation and noticing a recurring pattern: policy affecting young people was often written by adults without them. YPA grew from that insight into a youth-led organization that trains students to organize, engage policymakers, and advocate directly on issues shaping their generation.\n\nYPA now has more than 4,000 members across 90 campuses in 16 states, with students holding 800+ meetings with legislators and participating in more than 50,000 conversations. Its executive director has helped raise more than $2.1 million for the organization and build a model that equips young people to advocate on housing, economic opportunity, social media, and AI policy. Hiner was named to the 2026 Forbes 30 Under 30 list alongside co-founder Mick Tobin.",
    image: "/images/triibe100/SamHiner.jpg",
    website: "https://youngpeoplesalliance.org/",
    linkedin: "https://www.linkedin.com/in/samhiner/",
  },
  {
    name: "Mick Tobin",
    org: "",
    bio: "Co-Founder and Advocacy Director, Young People's Alliance",
    description:
      "Co-founded YPA as a high schooler in Mooresville, North Carolina, treating civic engagement as a skill to be learned rather than a virtue to be admired. He helped build an organization that trains students to move from caring about an issue to taking concrete action, from calling legislators and attending lobby days to testifying and helping shape legislation.\n\nYPA now has more than 4,000 members across 90 campuses in 16 states, with students holding 800+ meetings with legislators. Mick has advocated on issues including AI and youth technology, housing affordability, and economic opportunity, and helped lead YPA's American Dream Declaration. He graduated from Duke in 2025 and was named to the 2026 Forbes 30 Under 30 list alongside co-founder Sam Hiner.",
    image: "/images/triibe100/MickTobin.png",
    website: "https://youngpeoplesalliance.org/",
    linkedin: "https://www.linkedin.com/in/mick-tobin-b37a10199/",
  },
  {
    name: "Dr. Shelby Thomas",
    org: "",
    bio: "Founder and CEO, Ocean Rescue Alliance International",
    description:
      "Grew up surfing and diving near Daytona Beach before studying marine science at the University of Florida, where years of diving Florida’s reef tract showed her the scale of reef loss firsthand. After an early project turned underwater art into artificial habitat, she founded Ocean Rescue Alliance International in 2019 to scale marine restoration through science, engineering, art, and community engagement.\n\nORAI has now deployed more than 500 artificial reef structures across 10 reef sites and supported the outplanting of over 30,000 corals, while developing projects that restore habitat and strengthen coastal resilience. Its founder holds a PhD in Fisheries and Aquatic Sciences, has contributed to more than 40 restoration projects worldwide, is a TEDx speaker, and has received multiple Stevie Awards. In 2026, she was named SeaKeeper of the Year by the International SeaKeepers Society.",
    image: "/images/triibe100/ShelbyThomas.jpg",
    website: "https://www.oceanrescuealliance.org/",
    linkedin: "https://www.linkedin.com/in/dr-shelby-thomas-phd-347241b5/",
  },
  {
    name: "Kyle Matthys",
    org: "",
    bio: "Founder and CEO, TRIIBE",
    description:
      "Built TRIIBE while working a day job, starting from a structural problem rather than a personal one: the nonprofit sector has no startup engine because the incentives that build one, returns, commission, and equity, do not exist. A startup sector is necessary for philanthropic innovation, because only a founder with nothing yet to protect can afford to fail.\n\nTRIIBE maximizes return on Impact and Income for philentrepreneurs through three programs: the TRIIBE I00, the annual index of leading nonprofit founders under 30 to know; TRIIBE Talks, intergenerational conversations featuring next-gen voices on a decentralized stage anyone can run; and TRIIBE Grants, the largest grant database in the world, free for anyone to search. Talks is endorsed by Lara Stein, TEDx founder, and Grants by Jax Harrison, Grant Authority co-founder, both TRIIBE Legacy Board members.",
    image: "/images/triibe100/KyleMatthys.jpg",
    website: "https://www.triibe.org/",
    linkedin: "https://www.linkedin.com/in/kylematthys/",
  },
  {
    name: "Shreya Ramachandran",
    org: "",
    bio: "Founder, The Grey Water Project",
    description:
      "Founded The Grey Water Project at 13 after seeing fresh water trucked into communities in California and her grandparents’ home in India. After years of research into safely reusing greywater, she built a nonprofit focused on making water conservation accessible through education, advocacy, policy, and hands-on curricula. The project now spans four countries, has influenced more than 100,000 people, and has had its curriculum used in over 90 schools worldwide.\n\nShreya won the Gloria Barron Prize for Young Heroes and the 2019 Children’s Climate Prize, was a Google Science Fair global finalist and Global Student Prize finalist, and has contributed to environmental policy work with the UN Environment Programme. She graduated with Honors from Stanford in Human Biology with a concentration in Climate and Health and completed a master’s in Sustainability Science and Practice in 2026. She also received Stanford’s 2026 James W. Lyons Award for Service.",
    image: "/images/triibe100/ShreyaRamachandran.jpg",
    website: "https://thegreywaterproject.org",
    linkedin: "https://www.linkedin.com/in/shreya-ramachandran-greywater/",
  },
  {
    name: "Lea Nepomuceno",
    org: "",
    bio: "Founder, Beauty Beyond Bars",
    description:
      "Began interviewing incarcerated people at 13 and repeatedly heard stories of people making DIY toiletries or trading food for soap, shampoo, and other essentials. At 17, she founded Beauty Beyond Bars to address hygiene and beauty access in correctional facilities as a public health and human dignity issue. The organization combines product donations, legislative advocacy, and storytelling to improve everyday conditions behind bars.\n\nBeauty Beyond Bars has raised more than $290,000 in in-kind donations, taught incarcerated youth at two juvenile detention centers, and helped advance legislation affecting approximately 97,600 incarcerated people. Through its Problem-Solving Through Policy program, Lea helps incarcerated students turn their experiences and proposed solutions into legislation. She is a Teen Vogue 21 Under 21 honoree, a 2024 Vital Voices Visionaries Fellow, a 2025 Visionaries Summit finalist, and a 2026 e.l.f. Beauty 22 Under 22 honoree.",
    image: "/images/triibe100/LeaNepomuceno.png",
    website: "www.beautybeyondbars.org",
    linkedin: "https://www.linkedin.com/in/lea-nepomuceno-815715213/",
  },
  {
    name: "Maya Nanan",
    org: "",
    bio: "Founder, Autism Siblings and Friends Network",
    description:
      "Founded the Autism Siblings and Friends Network at 12 in Trinidad and Tobago after watching her younger brother Rahul, who is autistic and nonverbal, get turned away from six schools by the age of six. The youth-led organization creates inclusive educational and social opportunities for autistic young people, trains youth as advocates, and runs Rahul’s Clubhouse, an autism-friendly centre offering developmental programmes, therapy, life skills, arts, music, and sensory-friendly activities at low or nominal cost. Since its launch, the organization has trained more than 800 young people as advocates and expanded access to programmes for autistic people across Trinidad and Tobago.\n\nRahul’s Clubhouse was established in 2022 through support from the Queen’s Commonwealth Trust’s Platinum Jubilee Fund for Young Leaders and has since provided developmental and social programmes to autistic individuals while training hundreds of youth volunteers. Maya’s work has impacted more than 10,000 people locally, and she was named the 2023 Commonwealth Young Person of the Year after also becoming the first Diana Award recipient from Trinidad and Tobago. She continues to pursue youth development work while advocating for greater educational access and inclusion for autistic people.",
    image: "/images/triibe100/MayaNanan.jpg",
    /* website: "https://queenscommonwealthtrust.org/projects/siblings-friends-network-creating-inclusion-and-equal-access-to-opportunities-for-autistic-persons-in-trinidad-tobago/", */
    linkedin: "https://www.linkedin.com/in/maya-n-024529200/",
  },
  {
    name: "Rida Karim",
    org: "",
    bio: "Founder and CEO, Technology Youth Empowerment",
    description:
      " Founded Technology Youth Empowerment while in high school after seeing how STEM education could prioritize getting the right answer over genuine curiosity and understanding. The student-led nonprofit brings hands-on, curiosity-first STEM education to K–8 students through trained high school mentors, serving Title I schools and underserved communities through workshops, school programs, community partnerships, and take-home STEM kits. TYE has now expanded to 48 schools and community centers across the Washington, DC region, with a new Girls in STEM program serving 150 middle-school girls in Fairfax County.\n\nIts founder previously served as Student Representative to the Fairfax County School Board, advocating for equitable access to technology and computer science for a district of 183,000 students. Now a first-year student at the University of Virginia studying Data Science and Public Policy & Leadership, Rida has presented her work at the United Nations, MIT, Brookings Institution, and World Economic Forum. She was named a 2025 NCWIT Aspirations in Computing Award winner and selected as a 2025–26 UNA-USA Global Goals Ambassador, while TYE was also recognized as a 2025 Carnegie Young Leaders project.",
    image: "/images/triibe100/RidaKarim.png",
    website: "https://tyeconnects.org/",
    linkedin: "https://www.linkedin.com/in/ridakarim/",
  },
  {
    name: "Olivia Greenaway",
    org: "",
    bio: "Co-Founder and Executive Director, CareForAll",
    description:
      "Co-founded CareForAll in 2025 to mobilize young people as healthcare leaders rather than spectators. The youth-led nonprofit gives students the toolkits, mentorship, and health education to design and run their own community health projects and map medically underserved regions, then backs their leadership in larger movements for health equity.\n\nCareForAll operates 25 chapters with 700 members across 27 countries and has expanded into the Caribbean, including Montserrat. Its CEO earned her degree in Medical Humanities at Columbia, is an MHS candidate at Johns Hopkins Bloomberg School of Public Health, and served as a panelist at the United Nations 2026 ECOSOC Youth Forum.",
    image: "/images/triibe100/OliviaGreenaway.jpg",
    website: "https://careforall.org/",
    linkedin: "https://www.linkedin.com/in/olivia-greenaway/",
  },
  {
    name: "Diing Manyang",
    org: "",
    bio: "Co-Founder and Strategy Lead, Elimisha Kakuma",
    description:
      "Co-founded Elimisha Kakuma in 2021 with fellow former Kakuma refugees Joseph Dudi Miabok and Mary Maker and their former teacher, Deirdre Hand. The refugee-founded and refugee-led program runs a rigorous college-preparatory gap year inside Kakuma Refugee Camp, combining academic instruction, exam preparation, mentorship, and end-to-end guidance through university and scholarship applications.\n\nElimisha has now placed close to 60 students at universities around the world, with students securing more than $20 million in scholarships. Its strategy lead studied Systems Engineering with a minor in Economics at George Washington University and now works as a Technology Analyst at Morgan Stanley. She also co-founded Me4Her: Breaking Patriarchal Barriers, a girls' mentorship program in Kakuma, and is a Clinton Global Initiative University alumna and COVID-19 Student Action Fund awardee.",
    image: "/images/triibe100/DiingManyang.jpg",
    website: "https://www.elimishakakuma.org/",
    linkedin: "https://www.linkedin.com/in/diing-manyang/",
  },
  {
    name: "Mary Nyiriak Maker",
    org: "",
    bio: "Co-Founder and Fundraising Director, Elimisha Kakuma",
    description:
      "Co-founded Elimisha Kakuma in 2021 while studying at St. Olaf College, alongside fellow Kakuma refugees Diing Manyang and Joseph Dudi Miabok and their former teacher, Deirdre Hand. The refugee-led program gives high school graduates in Kakuma intensive academic preparation and guidance through university applications and scholarship opportunities, built by people who experienced the camp's barriers to higher education themselves.\n\nElimisha Kakuma has now helped place close to 60 students at top universities, with more than $20 million in scholarships secured by its students. Its co-founder grew up in Kakuma, taught English, biology, and business studies to high school students in the camp, graduated with honors from St. Olaf College in Theatre and International Relations, and delivered a TEDx talk from inside a refugee camp in 2018. She was appointed a UNHCR Goodwill Ambassador in 2023 and was recently named to RefuAward Magazine's Top 100 Influential Refugees list.",
    image: "/images/triibe100/MaryNyiriakMaker.jpg",
    website: "https://www.elimishakakuma.org/",
    linkedin: "https://www.linkedin.com/in/mary-maker/",
  },
  {
    name: "Joseph Dudi Miabok",
    org: "",
    bio: "Co-Founder and Programs Lead, Elimisha Kakuma",
    description:
      "Co-founded Elimisha Kakuma in 2021 while still an undergraduate, alongside fellow Kakuma refugees Diing Manyang and Mary Maker and their former teacher, Deirdre Hand. The refugee-led program prepares high school graduates in Kakuma Refugee Camp for university-level coursework and guides them through applications and financial aid, combining intensive academic instruction with mentorship, community service, and college counseling.\n\nElimisha Kakuma has helped secure 59+ university placements, with students earning more than $20 million in scholarships, and has built partnerships with 34+ universities. Its sixth cohort is now underway for 2026–27. Joseph grew up in Kakuma, earned his bachelor's degree from Harvard University, and completed an MS in Business Analytics at Virginia Tech.",
    image: "/images/triibe100/JosephDudiMiabok.jpg",
    website: "https://www.elimishakakuma.org/",
    linkedin: "https://www.linkedin.com/in/joseph-miabok/",
  },
  {
    name: "Andra Daniela Campos",
    org: "",
    bio: "Founder, Project Connect Forum",
    description:
      "Built Project Connect Forum in her senior year of high school as a low-income student who struggled to find meaningful extracurricular opportunities and did not know how to start a nonprofit of her own. She designed and developed the platform herself to help high school students discover opportunities, connect with teammates, and turn their interests into purposeful projects.\n\nProject Connect Forum has grown to thousands of users and now reaches a community of more than 50,000 followers, with a platform that combines an extracurricular database, student-led project opportunities, mentorship, and guidance for building meaningful “Purpose Projects.” Its founder studies at Stanford, received a $50,000 Edison International Scholarship as one of 30 2025 Edison Scholars, interned with Southern California Edison in 2026, and was accepted into Y Combinator's Startup School.",
    image: "/images/triibe100/AndraDanielaCampos.jpg",
    website: "https://projectconnectforum.com/",
    linkedin: "https://www.linkedin.com/in/andra-daniela-campos-861149258/",
  },
  {
    name: "Celine Qin",
    org: "",
    bio: "Founder and Executive Director, The Reclamation Project",
    description:
      "Founded The Reclamation Project at 13 in 2020 in Sacramento County, the daughter of Chinese and Vietnamese immigrants. The entirely youth-led organization advances mutual aid, anti-oppression education, healing justice, and community power-building for young people who are too often organized on behalf of rather than with.\n\nThe Reclamation Project has mobilized more than 270,000 community members and engaged more than 400,000 youth and allies across 171 countries, while directing 280+ events, campaigns, and grassroots projects. It has built a network of 3,200+ youth mentees and 185+ coalition partners, and has advised, secured, or supported nearly $20 million in grants and private and government partnerships. Its founder won Princeton University's Prize in Race Relations, was named to e.l.f. Beauty's 2026 22 Under 22, and was selected as a 2026 Vital Voices Grassroots Fellow.",
    image: "/images/triibe100/CelineQin.png",
    website: "https://www.trpcoalition.org/",
    linkedin: "https://www.linkedin.com/in/celine-qin-impact/",
  },
  {
    name: "Zuha Ajlan",
    org: "",
    bio: "Founder and CEO, Shadow A Scientist",
    description:
      "Founded Shadow A Scientist in 2022 at the University of the Witwatersrand after realizing as an undergraduate how little she knew about the range of careers a science degree could lead to. The organization gives underrepresented students direct exposure to research environments through lab shadowing, site visits to research institutions, hands-on technique workshops, career talks, and mentorship with working scientists.\n\nShadow A Scientist has reached more than 2,000 students, spans over 35 STEM fields, and is supported by more than 60 volunteers. The organization is active across South Africa, Kenya, Cameroon, and Lesotho, and became a registered nonprofit in South Africa in 2024. Its founder is an MSc (Med) neuroscientist whose work has been recognized by Golden Key International and Hey Youth.",
    image: "/images/triibe100/ZuhaAjlan.jpg",
    website: "https://shadowascientist.org/",
    linkedin: "https://www.linkedin.com/in/zuha-ajlan-a25623221/",
  },
  {
    name: "Sarah Shelke",
    org: "",
    bio: "Co-Founder and Executive Director, Mind4Youth",
    description:
      "Co-founded Mind4Youth in California in 2023 at 14, after seeing a family member navigate depression in a household where mental illness was spoken about in lowered voices. What started as an Instagram account grew into a youth-led nonprofit providing self-care resources, mental health education, and access to therapy for underserved young people.\n\nMind4Youth now has more than 28,000 volunteers across 71 countries and 183 chapters, with over $731,000 raised, 64,000 self-care products provided, and 1,800 therapy sessions funded. Sarah has spoken before the United Nations Committee on the Rights of the Child, was a top-three finalist for the 2024 International Children's Peace Prize, received the Princeton Prize in Race Relations, and was named to the inaugural 2026 TIME Visionaries list.",
    image: "/images/triibe100/SarahShelke.png",
    website: "https://mind4youth.com",
    linkedin: "https://www.linkedin.com/in/sarahshelke/",
  },

  {
    name: "COMING_SOON_PLACEHOLDER",
    org: "",
    bio: "",
  },
];

const rest: Founder[] = restOverrides.map((override, i) => ({
  id: i + 11,
  name: "Name",
  org: "Non Profit",
  bio: "Coming soon.",
  website: "",
  ...override,
}));

export const founders: Founder[] = [...firstTen, ...rest];
