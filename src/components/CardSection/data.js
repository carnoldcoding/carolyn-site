import bg1 from '../../assets/love.svg'
import bg2 from '../../assets/woman.svg'
import bg3 from '../../assets/certification.svg'
import bg4 from '../../assets/woman_design.svg'

export const card1 = {
    title: "Why Us?",
    subtitle: "Because we care. About you, and your company",
    modalHeader: "SSDC Gives You",
    modalContent: 
    <ul>
        <li>Individualized attention by experienced consultants who really care about your mission and your success</li>
        <li>A development strategy that fits your unique needs and situations</li>
        <li>Tangible results that are attainable and sustainable</li>
        <li>Open access to knowledgeable consultants for quick questions, troubleshooting, and to celebrate your successes</li>
    </ul>,
    background: bg1,
    delay: '0s'
}

export const card2 = {
    title: "Vision Statement",
    subtitle: "The goal of SSDC is to facilitate a joyful connection between the donor and non-profit.",
    modalHeader: "Our Goal",
    modalContent: "SSDC supports the nonprofit by acting as a trusted advisors whose mission and vision aligns with her own; their constituencies through enhanced impact of the organizations mission; and her family by providing resources and lifestyle that fulfills our dreams.",
    background: bg2,
    delay: '.5s'
}

export const card3 = {
    title: "Our Expertise",
    subtitle: "As a Certified Fund Raising Executive (CFRE), Carolyn holds the only accredited, globally recognized certification for fundraising professionals.",
    modalHeader: "What is a CFRE?",
    modalContent: <p>To earn CFRE certification, fundraising professionals must meet education, professional practice, and professional performance requirements, pass a comprehensive exam on best practices in ethical fundraising; and attest that they are knowledgeable and abide by the International Statement of Ethical Principles in Fundraising as well as laws governing fundraising in their region of practice. <br/><br/>
    By hiring a CFRE professional, you have full confidence that your fundraising team members are using current best practices, are from knowledgeable backgrounds and are dedicated to ethical fundraising. <br/><br/>Carolyn Sharaway's 16-year career in the nonprofit sector began in direct service to under served populations and was the catalyst to pursue fundraising as a career. She developed her skills in institutional advancement for health and education organizations which led to the management of multi-year, sustainable fundraising and development projects. Carolyn earned a Bachelor of Science degree in Psychology from Stony Brook University and a master’s degree in Nonprofit Management from Milano School of International Affairs, Management, and Urban Policy in New York City. <br/><br/>
    She is a Certified Fundraising Executive (CFRE), has a certificate in Planned Giving authorized by University of California, Davis, and sits on the Marketing and Communications Committee for Philanthropic Planning Group of Greater New York.</p>,
    background: bg3,
    delay: '1s'
}

export const card4 = {
    title: "Our Process",
    subtitle: "SSDC carefully chooses its clients to ensure a good fit. To let you rest assured that we will enjoy working together and that SSDC's expertise can make an impact on your mission.",
    modalHeader: "SSDC On-Boarding",
    modalContent: <>
    <h3>Here are the steps to becoming an SSDC client:</h3>
    <ul>
        <li>An exploratory meeting (pro bono) is the first step in the process where we talk about how your needs suit our experience. </li>
        <li>If there is an alignment there, SSDC provides a detailed proposal on the scope of work (including deliverables and timeline) which is reviewed by the nonprofit.</li>
        <li>Necessary edits are made to the scope of work and the contract is signed.</li>
        <li>Work commences and we move ahead to develop your nonprofit's resources! </li>
    </ul>
    </>,
    background: bg4,
    delay: '1.5s'
}